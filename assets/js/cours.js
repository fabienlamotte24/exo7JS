function Number(){
  var shoeSize = document.getElementById("shoeSize").value;
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  var regex1 = /^[\d]{2}$/;
  var regex2 = /^[\d]{4}$/;
  var resultat =((((shoeSize*2)+5)*50)-yearOfBirth) + 1766;
  if((regex1.test(shoeSize) == true) && (regex2.test(yearOfBirth) == true)){
    alert(resultat);
  }else{
    alert("Vérifiez que vous avez saisie 2 chiffres pour la pointure et 4 chiffres pour l'année");
  }
}
