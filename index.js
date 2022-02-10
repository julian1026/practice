const jwt = require("jsonwebtoken");
//process argument
let [, , option, secret, nameortoken] = process.argv;

if (!option || !secret || !nameortoken) {
  console.error("missing arguments");
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option == "sign") {
  console.log(signToken({ sub: nameortoken }, secret));
} else if (option == "verify") {
  console.log(verifyToken(nameortoken, secret));
} else {
  console.log("option needs to be 'sign' or 'verify' ");
}
console.log("good evnenig, I am second brach");
