// This is the function which will calculate the numbers.
function calc() {
  /*
    First we grab all the data from the HTML form.

    We grab HTML elements using a method called querySelector(), which grabs the element based on an ID or Class.
    The "document" statement means that we grab an element from within the document this file is linked to (index.html).
    The "value" property defines what we want to get from the element, which in this case is the value typed in by the user.
    And lastly we use the parseInt() method to convert the entire value into a number data type, since data from a form is send as a string.
  */
  // variable "a" is the first number.
  var a = parseInt(document.querySelector("#value1").value);
  // variable "b" is the second number.
  var b = parseInt(document.querySelector("#value2").value);
  // variable "op" is the operation used.
  var op = document.querySelector("#operator").value;
  // variable "calculate" is defined but not used until later in this function.
  var calculate;

  // Here we calculate the value of the two numbers using simple conditions.
  // The value is assigned to "var calculate".
  if (op == "add") {
    calculate = a + b;
  } else if (op == "sub") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  }

  // Then lastly we output the result into the <div> inside index.html using the innerHTML property.
  document.querySelector("#result").innerHTML = calculate;
}
