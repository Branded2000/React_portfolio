#include <SoftwareSerial.h>
#include <Servo.h>
Servo servo01;
Servo servo02;
Servo servo03;
Servo servo04;
Servo servo05;
Servo servo06;
SoftwareSerial Bluetooth(5, 6); // Arduino(RX, TX) - HC-05 Bluetooth (TX, RX)

int servo1Pos, servo2Pos, servo3Pos, servo4Pos, servo5Pos, servo6Pos; // current position
int servo1PPos, servo2PPos, servo3PPos, servo4PPos, servo5PPos, servo6PPos; // previous position
String dataIn = "";

void setup() {
  servo01.attach(3);
  servo02.attach(4);
  servo03.attach(7);
  servo04.attach(8);
  servo05.attach(9);
  servo06.attach(10);
  Bluetooth.begin(9600); // Default baud rate of the Bluetooth module
  Bluetooth.setTimeout(1);
  delay(20);
  // Robot arm initial position
  servo1PPos = 90;
  servo01.write(servo1PPos);
  servo2PPos = 180;
  servo02.write(servo2PPos);
  servo3PPos = 150;
  servo03.write(servo3PPos);
  servo4PPos = 100;
  servo04.write(servo4PPos);
  servo5PPos = 70;
  servo05.write(servo5PPos);
  servo6PPos = 130;
  servo06.write(servo6PPos);
}

void loop(){
  
  if(Bluetooth.available() > 0){
    dataIn = Bluetooth.readString();
    Serial.print(dataIn);
    
   
    if(dataIn == "L1" || dataIn == "R1"){  //Move servo 1 -> WAIS
      if(dataIn == "L1"){
        Serial.print(dataIn);
        increase(1, 90, 180, servo1PPos, servo1Pos, servo01);

      }
      else if(dataIn == "R1"){
        Serial.print(dataIn);
        decrease(1, 90, 180, servo1PPos, servo1Pos, servo01);
      }
    }

    else if(dataIn == "F2" || dataIn == "B2"){  //Move servo 2 -> SHOULDER
     
      if(dataIn == "F2"){
        Serial.print(dataIn);
        increase(90, 180, 250, servo2PPos, servo2Pos, servo02);
        
      }
      else if(dataIn == "B2"){
        Serial.print(dataIn);
        decrease(90, 180, 250, servo2PPos, servo2Pos, servo02);
      }
    }
    else if(dataIn == "U3" || dataIn == "D3"){  //Move servo 3 -> ELBOW
     
      if(dataIn == "U3"){
        Serial.print(dataIn);
        increase(90, 150, 200, servo3PPos, servo3Pos, servo03);
      }
      else if(dataIn == "D3"){
        Serial.print(dataIn);
        decrease(90, 150, 200, servo3PPos, servo3Pos, servo03);
      }
    }

    else if(dataIn == "SL4" || dataIn == "SR4"){ //Move servo 4 -> WRIST ROLL
      
      if(dataIn == "SL4"){
        Serial.print(dataIn);
        increase(90, 100, 220, servo4PPos, servo4Pos, servo04);
      }
      else if(dataIn == "SR4"){
        Serial.print(dataIn);
        decrease(45, 100, 220, servo4PPos, servo4Pos, servo04);
      }
    }

    else if(dataIn == "U5" || dataIn == "D5"){   //Move servo 5 -> WRIST PITCH
    
      if(dataIn == "U5"){
        Serial.print(dataIn);
        increase(10, 70, 140, servo5PPos, servo5Pos, servo05);
      }
      else if(dataIn == "D5"){
        Serial.print(dataIn);
        decrease(10, 70, 140, servo5PPos, servo5Pos, servo05);
      }
    }

    else if(dataIn == "O6" || dataIn == "C6"){   //Move servo 6 -> GRIP
    
      if(dataIn == "O6"){
        Serial.print(dataIn);
        servo6Pos  = 130;
        servo06.write(servo6Pos);
        servo6PPos = servo6Pos;
      }
      else if(dataIn == "C6"){
        Serial.print(dataIn);
        servo6Pos = 70;
        servo06.write(servo6Pos);
        servo6PPos = servo6Pos;
      }
    } 
  
  }

}

void increase(int low, int def, int high, int &pp, int &sp, Servo l){ //Change position   

       if(pp != high){
          if(pp == low){
            sp  = def;
            for(int i = pp; i <= sp; i++){
              l.write(i);
              delay(20);
            }      
            pp = sp;
          }

          else if(pp == def){
            sp = high;
            for(int i = pp; i <= sp; i++){
              l.write(i);
              delay(10);
            }
            pp = sp;
          }
        } 
}

void decrease(int low, int def, int high, int &pp, int &sp, Servo l){

       if(pp != low){
          if(pp == high){
            sp  = def;
            for(int i = pp; i >= sp; i--){
              l.write(i);
              delay(10);
            }      
            pp = sp;
          }

          else if(pp == def){
            sp = low;
            for(int i = pp; i >= sp; i--){
              l.write(i);
              delay(10);
            }
            pp = sp;
          }
        } 
}
