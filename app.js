function creditCardValidation(cardNumber) {
    
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/; 
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
    

    
    if (visaPattern.test(cardNumber)) {
        return "Visa";
    } else if (mastercardPattern.test(cardNumber)) {
        return "Mastercard";
    } 
     else {
        return "Invalid";
    }
}

const cardNumber = "4111111111111111"; 
console.log(creditCardValidation(cardNumber)); 
