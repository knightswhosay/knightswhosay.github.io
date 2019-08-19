function verificar() {
  // Current year
  var data =  new Date()
  var ano = data.getFullYear()
  var sexo = document.getElementsByName('radsex')
  var res = document.getElementById('res')
  var img = document.createElement('img')
  var genero = 'Homem' 
  img.setAttribute('id', 'foto')
  img.style.paddingTop = '5px'
  var bornyear = Number(document.getElementById('ano').value)
  var age = ano-bornyear
  // Pages data
  
  res.style.textAlign = 'center'

  if (bornyear == 0 || bornyear > ano) {
      alert('Error verifique os dados e tente novamente')   
      return
  }

  if(sexo[1].checked) {
   var genero = 'Mulher'
   if (age >= 0 && age < 10) {
     // Criança
     img.setAttribute('src','img/littlegirl.jpg')
   } else if (age < 21){
    // jovem 
    img.setAttribute('src','img/youngwoman.jpg')
   } else if (age < 50){
    // Adulto
    img.setAttribute('src','img/adultwoman.jpg')
   } else{
    // idoso
    img.setAttribute('src','img/oldwoman.jpg')
  } 
  res.innerHTML = `Detectamos ${genero} que tem ${age} anos de idade`
  res.appendChild(img)
  return
 }

 if (age >= 0 && age < 10) {
   // Criança
   img.setAttribute('src','img/littleboy.jpg')
 } else if (age < 21){
  // jovem 
  img.setAttribute('src','img/youngman.jpg')
 } else if (age < 50){
  // Adulto
  img.setAttribute('src','img/adultman.jpg')
 } else{
  // idoso
  img.setAttribute('src','img/oldman.jpg')
} 
  
res.innerHTML = `Detectamos ${genero} que tem ${age} anos de idade`
res.appendChild(img)
}

