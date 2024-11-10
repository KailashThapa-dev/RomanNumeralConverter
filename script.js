const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const input = document.getElementById('number');
const form = document.querySelector('form'); // Select the single form element

const convertToRoman = num => {
    const ref = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    
    let numberRoman = '';

    ref.forEach(([symbol, value]) => {
        while (num >= value) {
            numberRoman += symbol;
            num -= value;
        }
    });
    
    return numberRoman;
};

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
});

convertBtn.addEventListener('click', () => {
    const inputValue = parseInt(input.value).trim();

    if (!inputValue) {
        output.textContent = "Please enter a valid number";
        output.style.color="red";
    } 
    else if (inputValue < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.style.color="red";    
    }
    else if (inputValue >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.style.color="red";
    }
    else {
        output.textContent = convertToRoman(inputValue);
    }

    output.style.display = "block";
});
