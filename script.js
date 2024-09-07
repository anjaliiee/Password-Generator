const passwordBox = document.getElementById("password");

const length = 12;
passwordBox.maxLength = length;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVW";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0987654321";
const Symbols = "@#&*%^+=_-`';.,/!()$?:~[]";
const alpabets = upperCase + lowerCase + numeric + Symbols;
function createpassword() {
  let password = "";
  var select = [upperCase, lowerCase, numeric, Symbols];
  while (password.length < length) {
    var temp = [Math.floor(Math.random() * select.length)];
    var type = select[temp];
    password += type[Math.floor(Math.random() * type.length)];
  }

  passwordBox.value = password;
}
function copypassword() {
  passwordBox.select();
  document.execCommand("Copy");
}
