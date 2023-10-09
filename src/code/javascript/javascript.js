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

function CleanDisplay(){
  document.getElementById('display').value = 0;
}

function RadicCalculation(){
  var aux_value = document.getElementById('display').value;
  
  aux_value = Math.sqrt(aux_value);

  document.getElementById('display').value = aux_value;
}

function Calculation(){
  try{
    document.getElementById('display').value = eval(document.getElementById('display').value);
  }catch(error){
    document.getElementById('display').value = 'Error';
  }
}