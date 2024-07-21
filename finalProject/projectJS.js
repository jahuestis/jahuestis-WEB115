
let form = document.getElementById('myForm');
let emailInput = document.getElementById('email')
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Sn']
let meals = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner']


// Submit form and create new page if valid email address provided
form.addEventListener('submit', function(event) {
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valaid email address');
        event.preventDefault();
    } else {
        newDocument = ("<!DOCTYPE HTML>\n<html>\n<head>\n<title>" + document.getElementById('name').value + "'s Meal Plan</title>\n" + '<link rel="stylesheet" href="popupStyles.css">' + "\n</head>\n<body>\n<h1>" + document.getElementById('name').value + "'s Meal Plan</h1>\n<p>Goal: " + document.getElementById('goal').value + "</p>");
        mealPlanTable = ("\n<table>\n<tr>" + '\n    <th id="tableCorner"></th>' + "\n    <th>Monday</th>\n    <th>Tuesday</th>\n    <th>Wednesday</th>\n    <th>Thursday</th>\n    <th>Friday</th>\n    <th>Saturday</th>\n    <th>Sunday</th>\n</tr>");
        
        let mealsFormatted = ['Breakfast', 'Snack', 'Lunch', 'Snack', 'Dinner']
        for (let i = 0; i < 5; i++) {
            mealPlanTable += ('\n<tr>\n    <th>' + mealsFormatted[i] + '</th>')
            for (let j = 0; j < 7; j++) {
                let mealInput = document.getElementById(meals[i] + 'Input' + days[j])
                mealPlanTable +=('\n    <td>' + mealInput.value + '</td>')
            }
            mealPlanTable += ('\n</tr>')

        }

        mealPlanTable += ("\n</table>");
        newDocument += mealPlanTable;
        newDocument += ('\n<p id="contact">Contact: ' + document.getElementById('email').value + '</p>\n<button id="printButton" onClick="window.print()">Print</button>\n</body>\n</html>');
        flyWindow = window.open('about:blank','myPop','width=800,height=600,left=200,top=200');
        console.log(newDocument);
        flyWindow.document.write(newDocument);
    }
})

// Change color of email address input based on validity
emailInput.addEventListener('input', function(event) {
    let emailInput = document.getElementById('email')
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.color = 'red';
    } else {
        emailInput.style.color = 'black';
    }
})

// Copy meals from first day to other days
let copyAllButton = document.getElementById('copyAllButton')

copyAllButton.addEventListener('click', function(event) {
    for (let i = 0; i < 5; i++) {
        copyFromMonday(meals[i], 0, 1) 
    }
})
// Copy meals from monday/tuesday alternating
let copyAltButton = document.getElementById('copyAltButton')
copyAltButton.addEventListener('click', function(event) {
    for (let i = 0; i < 5; i++) {
        copyFromMonday(meals[i], 0, 2)
        copyFromMonday(meals[i], 1, 2)
    }
})



function copyFromMonday(meal, dayFrom, frequency) {
    let mondayMeal = document.getElementById(meal + 'Input' + days[dayFrom]);
    for (let i = dayFrom; i < 7; i += frequency) {
        let nextMeal = document.getElementById(meal + 'Input' + days[i]);
        nextMeal.value = mondayMeal.value;
    }

}




