  // Seleccionar todos los elementos h2
  const h2Elements = getElemetsByClassName ('h2');

  // 1. Modificar el contenido con innerHTML
  h2Elements[1].innerHTML = 'Contenido modificado con <b>innerHTML';

  // 2. Modificar el contenido con innerText
  h2Elements[1].innerText = 'Contenido modificado con innerText';

  // 3. Obtener los hijos del nodo 'header' con children
  const header = document.querySelector('header');
  console.log(header.children); // Muestra los hijos directos de <header>

  // 4. Obtener el número de elementos hijos de 'header' con childElementCount
  console.log(header.childElementCount); // Muestra la cantidad de hijos en <header>

  // 5. Modificar el atributo 'id' del segundo h2
  h2Elements[1].id = 'nuevoIdH2';
  console.log(h2Elements[1].id); // Imprime el nuevo id del segundo h2

  // 6. Modificar el estilo del segundo h2 (color, tamaño de fuente, peso de fuente)
  h2Elements[1].style.color = 'blue';  // Cambia el color del texto a azul
  h2Elements[1].style.fontSize = '30px';  // Cambia el tamaño de la fuente
  h2Elements[1].style.fontWeight = 'bold';  // Cambia el peso de la fuente a negrita    