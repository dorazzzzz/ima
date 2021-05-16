#include <DFRobot_PN532.h>

#define  BLOCK_SIZE      16
#define  PN532_IRQ      (2)
#define  INTERRUPT      (1)
#define  POLLING        (0)
// Use this line for a breakout or shield with an I2C connection
// Check the card by polling
DFRobot_PN532_IIC  nfc(PN532_IRQ, POLLING);
struct card NFCcard;

String stringOne = "";
String stringAppend = "";

char puid[7];

void setup() {
  Serial.begin(115200);
  //Initialize the NFC module
  while (!nfc.begin()) {
    //    Serial.println("initial failure");
    delay (500);
  }
  //  Serial.println("Please place the NFC card/tag on module..... ");
}

void loop() {
  //Scan, write and read NFC card every 2s
  //Print all what is to be written and read

  if (nfc.scan()) {
    //Read the basic information of the card
    NFCcard = nfc.getInformation();
    //    Serial.println("----------------NFC card/tag information-------------------");
    //    Serial.print("UID: ");
    //    for (int i = 0; i < NFCcard.uidlenght; i++) {
    //      Serial.print(NFCcard.uid[i], HEX);
    //      Serial.print(" ");
    //    }

    if (strncmp((char*) NFCcard.uid, puid, 4) != 0) {
      strncpy(puid, (char*) NFCcard.uid, 4);
      puid[4] = 0;
      // Serial.print("uid: ");
      //      Serial.println(puid);
      for (int i = 0; i < NFCcard.uidlenght; i++) {
        Serial.print(NFCcard.uid[i], HEX);
        //  Serial.print(" ");
      }
      Serial.print("\r\n");
    }
  }
  else {
    //Serial.println("no card!");
  }

  delay(500);
}
