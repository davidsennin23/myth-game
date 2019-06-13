
export default class Card {

    constructor(id, nome, dificuldade) {
        this.id = id;
        this.nome = nome;    
        this.dificuldade = dificuldade;
    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getDificuldade() {
        return this.dificuldade;
    }
    

}