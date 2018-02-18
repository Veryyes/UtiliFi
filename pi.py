#!/usr/bin/python

import serial

output = ""
ser = serial.Serial('/dev/ttyACM0', 9600, 8, 'N', 1, timeout=1)
ser.flushInput()

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
		print buff
		buff = []
	else:
		print "SKIP " + str(buff)
		buff = []
			
