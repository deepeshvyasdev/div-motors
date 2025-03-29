// Console Greeting (just for fun)
console.log("div-motors is one of my upcoming project.I will start working on it soon_");

// Utility Functions
// Random number generator between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add two numbers (simple example)
function addNumbers(a, b) {
    return a + b;
}

// Check if string is empty
function isEmptyString(str) {
    return str.trim() === "";
}

// DOM Manipulation (agar HTML ke saath use karna ho)
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded!");

    // Example: Button click event
    const button = document.querySelector("#myButton"); // Assuming ek button hai HTML mein
    if (button) {
        button.addEventListener("click", () => {
            alert("Button dabaya gaya hai!");
            button.style.backgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
        });
    }

    // Example: Input field se value lena
    const input = document.querySelector("#myInput");
    if (input) {
        input.addEventListener("input", (e) => {
            console.log("Input value:", e.target.value);
        });
    }
});

// Array Operations
const myArray = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = myArray.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Map to double the numbers
const doubled = myArray.map(num => num * 2);
console.log("Doubled array:", doubled);

// Async Function (API call example)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage of fetch (uncomment to use)
// fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Simple Object
const person = {
    name: "Amit",
    age: 25,
    greet() {
        console.log(`Hi, mera naam ${this.name} hai aur meri umar ${this.age} hai!`);
    }
};
person.greet();

// Local Storage Example (save and retrieve data)
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Usage
saveToLocalStorage("user", { name: "Rahul", age: 30 });
console.log("From storage:", getFromLocalStorage("user"));

// Simple Loop Example
for (let i = 0; i < 5; i++) {
    console.log(`Loop count: ${i}`);
}
