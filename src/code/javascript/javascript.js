/**
 * @brief Add characters to text box.
 * 
 * @param {*} value Chracater that will be added to the text box.
 */
function AddToDisplay(value) {
  var aux_value = document.getElementById('display').value;

  if(aux_value == "0" || aux_value == "Error"){
    aux_value = '';
    aux_value += value;
  }else{
    aux_value += value;
  }

  document.getElementById('display').value = aux_value;
}

/**
 * @brief Clean text box.
 */
function CleanDisplay(){
  document.getElementById('display').value = 0;
}

/**
 * @brief Function to calculate de radic.
 */
function RadicCalculation(){
  var aux_value = document.getElementById('display').value;
  
  aux_value = Math.sqrt(aux_value);

  document.getElementById('display').value = aux_value;
}

/**
 * @brief Evaluates the text box and calculates depending on what appear on it.
 */
function Calculation(){
  try{
    document.getElementById('display').value = eval(document.getElementById('display').value);
  }catch(error){
    document.getElementById('display').value = 'Error';
  }
}

/**
 * @brief Function to multiply per the same number.
 */
function Elevate(){
  var aux_value = document.getElementById('display').value;

  aux_value = aux_value * aux_value;

  document.getElementById('display').value = aux_value;
}

/**
 * @brief Function to divide 1 with another value.
 */
function DivideOne(){
  var aux_value = document.getElementById('display').value;

  aux_value = 1 / aux_value;

  document.getElementById('display').value = aux_value;
}