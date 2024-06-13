function generatePassword(){
    const length = document.getElementById('length').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols= document.getElementById('symbols').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allCharacters = '';
    if (useUppercase)  allCharacters  += uppercase;
    if (useLowercase)  allCharacters  += lowercase;
    if (useNumbers)  allCharacters  += numbers;
    if (useSymbols)  allCharacters  += symbols;

    let password = '';
    for (let i = 0; i < length;  i++) {
        const randomIndex =  Math.floor(Math.random() * allCharacters.length);
        password += allCharacters [randomIndex]
    }

    document.getElementById('password').value = password;
}