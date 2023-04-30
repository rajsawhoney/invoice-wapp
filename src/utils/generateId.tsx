function generateID() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var charactersLength = characters.length;
  var numberLength = numbers.length;

  for (var i = 0; i < 2; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  for (var i = 0; i < 4; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numberLength));
  }

  return result;
}

export default generateID;
