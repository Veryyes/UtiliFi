#!/usr/bin/python

import serial
import web
import time

output = ""
ser = serial.Serial('/dev/ttyACM0', 9600, 8, 'N', 1, timeout=1)
ser.flushInput()

f = open("sqlconnect", "r")
hostname = f.readline().strip()
username = f.readline().strip()
password = f.readline().strip()
f.close()

db = web.database(dbn='mysql',host=hostname, port= 3306 , user=username, pw=password, db="utilify" )

i = 0
buff = []
while True:
	i = 0
	while i<7:
		input = ser.readline().strip()
		if(i == 0 and input != "START"): 			#Check for header
			break
		if len(input) > 0: #if we get something, grab it
			buff.append(input)
			i += 1
	if(len(buff) == 7):						#check for complete list
		date = time.strftime('%Y-%m-%d %X')
		print buff
		db.insert('gas', time=date, gasFlow= buff[1], gasTotal=buff[2] )
		db.insert('water', time=date, waterFlow=buff[3], waterTotal=buff[4])
		db.insert('power', time=date, watts=buff[5], energy=buff[6])
		buff = []
	else:
		print "SKIP " + str(buff)
		buff = []
			
