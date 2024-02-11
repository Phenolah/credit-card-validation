function validateCreditCard(cardNumber) {
    
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/; 
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
    

    
    if (visaPattern.test(cardNumber)) {
        return "Visa";
    } else if (mastercardPattern.test(cardNumber)) {
        return "Mastercard";
    } else if (amexPattern.test(cardNumber)) {
        return "American Express";
    } else if (discoverPattern.test(cardNumber)) {
        return "Discover";
    } else {
        return "Invalid";
    }
}

const cardNumber = "4671101111181091"; 
console.log(validateCreditCard(cardNumber)); 

