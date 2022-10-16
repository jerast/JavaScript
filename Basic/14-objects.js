var miAuto = {
    marca: "BMW",
    model: "M5",
    annio: 2019,
    details: () => {
        console.log(`${this.marca} ${this.model} from ${this.annio}`)
    }
}

miAuto.marca // "BMW"
miAuto.model // "M5"
miAuto.details() // "BM3 M5 from 2019"