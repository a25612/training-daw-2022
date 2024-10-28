window.onload = function (e) {
  // 1. Modificar el contenido con innerHTML
  document.getElementsByTagName('h2')[1].innerHTML = 'Contenido modificado con innerHTML';

  //2.Seleccionar el elemento con id == username
  let button = document.getElementById('username');
  console.log(button);

  //3.Cambiar el color de todos los .first que estén dentro de un artículo
  const allFirst = document.querySelectorAll('article.first')
  for (let item of allFirst) {
    item.style['background-color'] = '#00ccff'
  }

  //4.Seleccionar todos lo elementos li con class == item
  const allLi = document.querySelectorAll('li.item')
  for (let item of allLi){
    console.log(item);
  }

  //5.Seleccionar todos los buttons dentro de class == buttons
  const allButtons = document.querySelectorAll('buttons button')

  //6.Cambiar el codigo de fondo del primer parrafo
  document.querySelectorAll('p')[0].style['background-color'] = 'pink';


}