function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  // your code here
  
  string = `${this.parenthesize(this.getAreaCode())} ${this.getExchangeCode()}-${this.getLineNumber()}`;

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return `${this.numbers[0]}${this.numbers[1]}${this.numbers[2]}`;
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
    return `${this.numbers[3]}${this.numbers[4]}${this.numbers[5]}`
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
   return `${this.numbers[6]}${this.numbers[7]}${this.numbers[8]}${this.numbers[9]}`
}
PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let number = new PhoneNumberFormatter([6,5,0,8,3,5,9,1,7,2]);
console.log(number.render()); // --> "(650) 835-9172"
