const creditCardForm = document.querySelector('#credit-card-form');
const processBtn = document.querySelector('#process-btn');
const cardNumberInput = document.querySelector('#card-number');
const expirationDateInput = document.querySelector('#expiration-date');
const cvvInput = document.querySelector('#cvv');const cardholderNameInput = document.querySelector('#cardholder-name');
const cardNumberError = document.querySelector('#card-number-error');
const expirationDateError = document.querySelector('#expiration-date-error');
const cvvError = document.querySelector('#cvv-error');
const cardholderNameError = document.querySelector('#cardholder-name-error');
processBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cardNumber = cardNumberInput.value.trim();
    const expirationDate = expirationDateInput.value.trim();
    const cvv = cvvInput.value.trim();
    const cardholderName = cardholderNameInput.value.trim();
    if (!cardNumber){
        cardNumberError.textContent = 'Please enter your card number.';
    } else {
        cardNumberError.textContent = '';
    }
    if (!expirationDate) {
        expirationDateError.textContent = 'Please enter your expiration date.';
    } else {
        expirationDateError.textContent = '';
    }
    if (!cvv) {
        cvvError.textContent = 'Please enter your CVV.';
    } else {
        cvvError.textContent = '';
    }
    if (!cardholderName) {
        cardholderNameError.textContent = 'Please enter your cardholder name.';
    } else {
        cardholderNameError.textContent = '';
    }
    if (cardNumber && expirationDate && cvv && cardholderName) {
        alert('Payment processed successfully!');
        creditCardForm.reset();
    }
});
