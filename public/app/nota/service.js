import { handleStatus } from "../utils/promise-helpers.js"

const API = 'http://localhost:3000/notas'

const sumItems = codProd => notas => {
  const itemsNotasFlatMap = notas.flatMap((nota)=> nota.itens)
  const notasProd = itemsNotasFlatMap.filter((nota)=> nota.codigo == codProd)
  return notasProd.reduce((acc, item)=> acc + item.valor, 0)
}

export const notaService  = {
  listAll(){
    return fetch(API)
            .then(handleStatus)
            .catch(err => {
              console.log(err)
              return Promise.reject('Nao foi possivel obter as notas fiscais')
            })
  },
  sumItems(codProd){
    return this.listAll().then(sumItems(codProd))
  }
}