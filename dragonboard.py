import mraa

x = mraa.Gpio(13);
x.dir(mraa.DIR_IN)
value = x.read()
print(value);
