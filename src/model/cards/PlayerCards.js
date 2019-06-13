
const addQuantidade = (playerCard, quantidade) => {
    playerCard._addQuantidade(quantidade);
}

const _PlayerCard = (() => {
    let card;
    let quantidade;

    return class PlayerCard {

        constructor(c) {
            card = c;
            quantidade = 0;
        }

        _addQuantidade(q) {
            quantidade += q;
        }

        getCard() {
            return card;
        }

        getQuantidade() {
            return quantidade;
        }

    }
})();

export class PlayerCard {

    constructor(playerCard) {
        this._card = playerCard.getCard();
        this._quantidade = playerCard.getQuantidade();
    }

    getCard() {
        return this._card;
    }

    getQuantidade() {
        return this._quantidade;
    }

}

export default class PlayerCards {

    constructor() {
        this.cards = {};
    }

    getCards = () => [].concat(Object.entries(this.cards).map(card => new PlayerCard(card)));

    addNewCard(card) {
        let playerCard = this.cards[card.id];
        if (!playerCard) {
            playerCard = new _PlayerCard(card);
        }
        addQuantidade(playerCard, 1);
        return new PlayerCard(playerCard);
    }

}
