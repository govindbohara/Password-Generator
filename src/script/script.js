const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=';

const getUpperCaseLetter = () => {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};
const getLowerCaseLetter = () => {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};
const getNumber = () => {
    return numbers[Math.floor(Math.random() * numbers.length)];
};
const getSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
    const len = lenEl.value;
    let password = '';
    if (upperEl.checked) {
        password += getUpperCaseLetter();
    }
    if (lowerEl.checked) {
        password += getLowerCaseLetter();
    }
    if (numberEl.checked) {
        password += getNumber();
    }
    if (symbolEl.checked) {
        password += getSymbol();
    }
    console.log(password.length);

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        // console.log(x);
        console.log(x);
        password += x;
    }
    pwEl.innerText = '';
    pwEl.innerText = password;
};
generateEl.addEventListener('click', () => {
    generatePassword();
});

const generateX = () => {
    const array = [];
    if (upperEl.checked) {
        array.push(getUpperCaseLetter());
    }
    if (lowerEl.checked) {
        array.push(getLowerCaseLetter());
    }
    if (numberEl.checked) {
        array.push(getNumber());
    }
    if (symbolEl.checked) {
        array.push(getSymbol());
    }

    // console.log(array);
    if (array.length === 0) return '';
    console.log(array.length);
    return array[Math.floor(Math.random() * array.length)];
};

copyEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = pwEl.innerText;
    if (!password) {
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert(`Copied to clipboard : ${textArea.value}`);
});
