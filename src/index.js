module.exports = function reverse (n) {
  
  
  let result = '',
  str = (n >= 0) ? 
    n.toString() : 
    (n * -1).toString();
 
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return +result;
}
