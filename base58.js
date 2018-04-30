const alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
const base = alphabet.length;
const N = 2000;

function encode(num){
  let encoded = '';
  let r = '';
  while (num){
    let remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  for(let i=0; i<N; i++){
    r += alphabet[Math.floor(Math.random()*base)];
  }
  encoded = r + encoded; 
  return encoded;
}

function decode(str){
  let decoded = 0;
  str = str.substr(N);
  while (str){
    let index = alphabet.indexOf(str[0]);
    let power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;