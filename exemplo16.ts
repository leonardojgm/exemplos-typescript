interface ICalculoVolume {
    calculaVolume(): number;
}

class Valores {
    private raioCilindro: number;
    private alturaCilindro: number;

    set raio(valor: number) {
        this.raioCilindro = valor;
    }
    
    get raio(): number {
        return this.raioCilindro;
    }

    set altura(valor: number) {
        this.alturaCilindro = valor;
    }

    get altura(): number {
        return this.alturaCilindro;
    }
}

class Cilindro extends Valores implements ICalculoVolume {
    calculaVolume(): number {
        return 3.1415 * this.raio * this.raio * this.altura;
    }
}

var cilindro = new Cilindro();

cilindro.raio = 5;
cilindro.altura = 10;

console.log("Volume do cilindro com raio = " + cilindro.raio + " e altura = " + cilindro.altura + ": " + cilindro.calculaVolume());