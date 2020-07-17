// Taking input from the user and typecasted input to string
let user_input = String(prompt("Enter OS name and version separated by a space "));

// Splitting the input by its space
let split_user_input = user_input.split(" ");

//printing the elements to the console window
console.log("The OS name is " + split_user_input[0] + " and version is " + split_user_input[1]);