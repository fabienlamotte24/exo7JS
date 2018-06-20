function Number(){
  var pointure= document.getElementById("shoeSize").value;
  var annee= document.getElementById("yearOfBirth").value;
  var resultat=((((pointure*2)+5)*50)-annee) + 1766;
  alert(resultat);
}
