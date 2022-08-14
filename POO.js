class zapatilla {
    constructor(talle, color, marca) {
        this.talle = talle,
            this.color = color,
            this.marca = marca,
            this.info = `Soy una zapatilla ${marca} de talle ${talle} y color ${color}`;
    }
};

let zapa = new zapatilla(43, "negra", "nike")

console.log(zapa.info)