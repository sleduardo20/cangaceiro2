import { handleStatus } from "./utils/promise-helpers.js";

document.querySelector('#myButton')
.addEventListener('click', () => 
  fetch('http://localhost:3000/notas')
    .then(res => handleStatus(res))
    .then(notas => {
      const itemsNotas = notas.map(nota => nota.itens)

      console.log(itemsNotas)
      
      const totalItem = itemsNotas.filter((nota)=> nota.codigo == '2143')
                       .reduce((total, item) => total + item.valor, 0)


     console.log(totalItem)

    })
    .catch(error => console.log(error)))
