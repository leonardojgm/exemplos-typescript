class CoversaoUnidade {
    static polegada_centimetro(valor: number) : number {
        return valor * 2.54;
    }

    static centimetro_polegada(valor: number) : number {
        return valor * 0.3937;
    }

    static milha_quilometro(valor: number) : number {
        return valor * 1.609;
    }

    static quilometro_milha(valor: number) : number {
        return valor * 0.6214;
    }

    static galao_litro(valor: number) : number {
        return valor * 3.7854117;       
    }

    static litro_galao(valor: number) : number {
        return valor * 0.2642;
    }

    static libra_quilograma(valor: number) : number {
        return valor * 0.4536;
    }

    static quilograma_libra(valor: number) : number {
        return valor * 2.205;
    }

    static acre_hectare(valor: number) : number {
        return valor * 0.4047;
    }

    static hectare_acre(valor: number) : number {
        return valor * 2.471;
    }

    static celsius_fahrenheit(valor: number) : number {
        return valor * 1.8 + 32;
    }

    static fahrenheit_celsius(valor: number) : number {
        return (valor - 32) / 1.8;
    }
}

console.log("5 pol. equivalem a " + CoversaoUnidade.polegada_centimetro(5) + " cm");