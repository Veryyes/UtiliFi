#define deltat 3
#define gasAnalog A0
#define waterAnalog A1
#define powerDig 13
#define watervcc 10

#define resistor 1 
//(1 Ohm Resistor)

int i;
int gasTotal;
int waterTotal;
int energy;

void setup(){
  gasTotal=0;
  waterTotal=0;
  energy=0;
  i = 0;
  digitalWrite(watervcc, HIGH);
  Serial.begin(9600);
}

void getInputs(int* gas, int* water, int* power){
  //Get Flow for gas and water
  *gas = analogRead(gasAnalog); //Flow rate is linearly related to Pressure I think
  *water = analogRead(waterAnalog);
  //Get Power Usage on Resistor (We choose :) )  
  int volts;
  if(i%3==0){
    digitalWrite(powerDig, LOW);
    volts = 0;
  }else{
    digitalWrite(powerDig, HIGH);
    volts = 5; //Arudino uno outputs 5V on digital
  }
  *power = (volts * volts)/resistor;
}

void doRiemman(int gasFlow, int waterFlow, int power, int* gas, int* water, int* energy){
  *gas += gasFlow * deltat; 
  *water += waterFlow * deltat;
  *energy += power * deltat;
}

void loop(){
  int gasFlow, waterFlow, power;
  
  getInputs(&gasFlow, &waterFlow, &power);
  doRiemman(gasFlow, waterFlow, power, &gasTotal, &waterTotal, &energy);
  Serial.println("START");
  Serial.println(gasFlow);
  
  Serial.println(gasTotal);

  Serial.println(waterFlow);

  Serial.println(waterTotal);

  Serial.println(power);

  Serial.println(energy);
  i++;
  delay(deltat*1000);
}
