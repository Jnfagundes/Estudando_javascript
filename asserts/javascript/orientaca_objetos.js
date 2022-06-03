//Paradigmas: imperativo e declarativo.

//Pilare da Orientação a objetos
//Abstração: imaginar de forma cada vez mais simples.
//Herança: Objeto filho que herda características do objeto pai, podendo ter características específicas para o filho.
//Encapsulamento: cada classe tem metodos diferentes.
//Polimorfismo: comportamento diferente para uma mesma classe.

//Protótipos: Todos os objetos js herdam propriedades e métodos de um prototype.
//Classes: não existem naturalmente.


class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
       this._saldo = this._saldo - valor;
       return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor < 500){
            return "Operação negada"
        }

        this._saldo = this._saldo - valor;
    }
}