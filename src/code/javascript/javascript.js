function AddToDisplay(value) {
  var aux_value = document.getElementById('display').value;

  if(aux_value == "0"){
    aux_value = '';
    aux_value += value;
  }else{
    aux_value += value;
  }

  document.getElementById('display').value = aux_value;
}

function CleanDisplay(){
  document.getElementById('display').value = '';
}