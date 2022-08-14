class pizza {
    constructor(ID, nombre, ingredientes, precio) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }

}

let pizzas = [
    muzzarella = new pizza(`01`, `Muzzarella`, ingredientes = [`tomate`, `muzzarella`, `oregano`], 800),
    especial = new pizza(`02`, `Especial`, ingredientes = [`tomate`, `muzzarella`, `jamon`, `huevo`], 1000),
    cuatroQuesos = new pizza(`03`, `Cuatro Quesos`, ingredientes = [`tomate`, `muzzarella`, `parmesano`, `probolone`, `barra`], 1200),
    palmitos = new pizza(`04`, `Palmitos`, ingredientes = [`tomate`, `muzzarella`, `palmitos`, `salas golf`], 1300),
    anana = new pizza(`05`, `Anana`, ingredientes = [`tomate`, `muzzarella`, `anana`, `azucar morena`], 1500),
    sinQueso = new pizza(`06`, `Sin Queso`, ingredientes = [`tomate`, `oregano`], 500),
]
console.log(`// a) //`)
const idImpar = pizzas.filter((piza) => piza.ID % 2 != 0)

console.log(`Las pizzas con ID impar son:`)
for (piza of idImpar) {
    console.log(`${piza.nombre}`)
}
console.log(`// b) //`)
const baratas = pizzas.filter((piza) => piza.precio < 600)

console.log(`Hay ${baratas.length} pizzas de menos de $600:`)
for (piza of baratas) {
    console.log(`La ${piza.nombre} cuesta $${piza.precio}`)
}

console.log(`// c) //`)
console.log(`PRECIOS:`)
for (piza of pizzas) {
    console.log(`La ${piza.nombre} vale $${piza.precio}`)
}

console.log(`// d) //`)

for (piza of pizzas) {
    console.log(`=>La ${piza.nombre} se hace con:`)
    console.log(`${piza.ingredientes.join(', ')}`)
}