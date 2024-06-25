  // JavaScript code for form validation
	// Prevent form from submitting
 
  let form = document.getElementById('myForm');
  
  form.addEventListener('submit', function(event) {
     // Retrieve the input field value
    let alphaNumInputElement = document.getElementById('inputField');
    let input = alphaNumInputElement.value;

    // Regular expression pattern for alphanumeric input
    const alphaNumRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    let valid = alphaNumRegex.test(input);

    // Valid input: display confirmation and submit the form
    if (valid) {
      alert('Valid alphanumeric input. Form has been submitted.');
      console.log('Valid input. Form submitted')

    } else {
      alert('Invalid input. Must be alphanumeric.'); // Invalid input: display error message
      event.preventDefault;
      console.log('Invalid input. Submission prevented.');
    }

  })



  

  