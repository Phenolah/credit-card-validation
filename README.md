# credit-card-validation

This is a simple JavaScript program to validate credit card numbers using regular expressions.

Usage

Clone the repository to your local machine.

	<code> git clone https://github.com/Phenolah/credit-card-validation
     </code>
     
Run the app.js file
The program will validate some sample credit card number and display the card type (VISA, MASTERCARD, AMEX, DISCOVER) or indicate if it's invalid.


#REGULAR EXPRESSIONS
Regular expressions are used to validate credit card numbers for the following card types:

Visa Regex: /^4[0-9]{12}(?:[0-9]{3})?$/

  ^: Start of a string
  4: The number must start with 4
  [0-9]{12}: There should be 12 additional digits after the starting 4
  (?:[0-9]{3})?: Optionally, there can be 3 more digits
  $: The string should end after 16 digits (with or without the additional 3 digits)

Mastercard Regex: /^5[1-5][0-9]{14}$/

  ^: Start of a string
  5[1-5]: The number must start with 5 followed by a digit between 1 and 5
  [0-9]{14}: There should be 14 additional digits after the starting 2 digits
  $: The string should end after 16 digits

Amex Regex: /^3[47][0-9]{13}$/

  ^: Start of a String
  3[47]: The number must start with 3 followed by either 4 or 7
  [0-9]{13}: There should be 13 additional digits after the starting 2 digits
  $: The string should end after 15 digits

Discover Regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/
  ^: Start of a string
  6: The number must start with 6
  (?:011|5[0-9]{2}): Following the 6, there can either be 011 or a number starting with 5 followed by any two digits
  [0-9]{12}: There should be 12 additional digits after the initial sequence
  $: The string should end after 16 digits
