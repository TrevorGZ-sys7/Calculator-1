let history = []; // Array to store history

function appendToDisplay(value) {
    var inputField = document.getElementById('display');
    inputField.value += value;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        let result = eval(display.value);
        history.push(display.value + " = " + result); // Store the calculation in history
        display.value = result;
    } catch (error) {
        display.value = "Error"; // Display "Error" if there's an issue
    }
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = '0123456789+-*/.';

    if (allowedKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Delete') {
        clearDisplay();
    }
      else if (key === 'h') {
        showHistory();
      }      
});

function showHistory() {
    const historyDiv = document.getElementById('history');
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear existing history

    // Add each item in the history array to the list
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });

    // Toggle visibility of the history
    historyDiv.style.display = historyDiv.style.display === 'none' ? 'block' : 'none';
}
