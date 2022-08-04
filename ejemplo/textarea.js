
  textarea = document.getElementById('Texto1');
  
  textarea.innerHTML = "asdfasd";

  function Intercambiar(){
    var Textarea1 = document.getElementById ("Texto1")
    var Textarea2 = document.getElementById ("Texto2")
  var Valor1 = Textarea1.value
  Textarea1.value = Textarea2.value
  Textarea2.value = Valor1
  }
