class Contas {    
    private dataLancamento: string;
    private valorLancamento: number;
    private numeroDocumento: string;
    private dataVencimento: string;

    get DataLancamento(): string {
        return this.dataLancamento;
    }

    set DataLancamento(data: string) {
        this.dataLancamento = data;
    }

    get ValorLancamento(): number {
        return this.valorLancamento;
    }

    set VlorLancamento(valor: number) {
        this.valorLancamento = valor;
    }

    get NumeroDocumento(): string {
        return this.numeroDocumento;
    }

    set NumeroDocumento(numero: string) {
        this.numeroDocumento = numero;
    }

    get DataVencimento(): string {
        return this.dataVencimento;
    }

    set DataVencimento(data: string) {
        this.dataVencimento = data;
    }
}

class ContasPagar extends Contas {
    private nomeFavorecido: string;
    private dataPagamento: string;
    private valorPago: number;

    get NomeFavorecido(): string {
        return this.nomeFavorecido;
    }

    set NomeFavorecido(nome: string) {
        this.nomeFavorecido = nome;
    }

    get DataPagamento(): string {
        return this.dataPagamento;
    }

    set DataPagamento(data: string) {
        this.dataPagamento = data;
    }

    get ValorPago(): number {
        return this.valorPago;
    }

    set ValorPago(valor: number) {
        this.valorPago = valor;
    }
}

class ContasReceber extends Contas {
    private nomeCliente: string;
    private dataRecebimento: string;
    private valorRecebido: number;

    get NomeCliente(): string {
        return this.nomeCliente;
    }

    set NomeCliente(nome: string) {
        this.nomeCliente = nome;
    }

    get DataRecebimento(): string {
        return this.dataRecebimento;
    }

    set DataRecebimento(data: string) {
        this.dataRecebimento = data;
    }

    get ValorRecebido(): number {
        return this.valorRecebido;
    }

    set ValorRecebido(valor: number) {
        this.valorRecebido = valor;
    }
}