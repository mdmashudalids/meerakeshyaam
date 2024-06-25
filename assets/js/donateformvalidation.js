const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const checkbox = document.getElementById('checkbox');
const ssfile = document.getElementById('ssfile'); // image file
const transactionId = document.getElementById('transaction'); // transaction ID
const amount = document.getElementById('amount');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}

const isValidImage = file => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.heic)$/i;
    return allowedExtensions.test(file.name);
}

const isValidTransactionId = transactionId => {
    const re = /^[a-zA-Z0-9]{8,20}$/; // Adjust this regex based on your criteria
    return re.test(transactionId);
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const checkboxValue = checkbox.checked;
    const file = ssfile.files[0];
    const transactionIdValue = transactionId.value.trim();
    const amountValue = amount.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'First name is required');
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Last name is required');
    } else {
        setSuccess(lastname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Provide a 10 digit phone number');
    } else {
        setSuccess(phone);
    }

    if (!checkboxValue) {
        setError(checkbox, 'Please agree to the terms and conditions');
    } else {
        setSuccess(checkbox);
    }

    if (!file) {
        setError(ssfile, 'Image file is required');
    } else if (!isValidImage(file)) {
        setError(ssfile, 'Please upload a valid image file (jpg, png, heic)');
    } else {
        setSuccess(ssfile);
    }

    if (transactionIdValue === '') {
        setError(transactionId, 'Transaction ID is required');
    } else if (!isValidTransactionId(transactionIdValue)) {
        setError(transactionId, 'Provide a valid transaction ID (8-20 alphanumeric characters)');
    } else {
        setSuccess(transactionId);
    }

    if (amountValue === '') {
        setError(amount, 'Amount is required');
    } else {
        setSuccess(amount);
    }
};
