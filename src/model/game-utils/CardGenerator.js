import cards from '../cards/CardRepository';

class CardGenerator {

    getCard(cards) {
        let factor = (1/cards.length);
        let factAux = factor;
        let index = 0;
        let random = Math.random();
        while(random > factAux) {
            factAux += factor;
            index++;
        }
        return cards[index];
    }

    generateProbality() {
        return Math.random()*100;
    }

    getCards(probality) {
        switch(true) {
            case (probality < 50):
                return cards.filter(card => card.getDificuldade() == 1);
            case (probality < 82):
                return cards.filter(card => card.getDificuldade() == 2);
            case (probality < 94):
                return cards.filter(card => card.getDificuldade() == 3);
            case (probality < 99):
                return cards.filter(card => card.getDificuldade() == 4);
            case (probality < 100):
                return cards.filter(card => card.getDificuldade() == 5);
            default:
                return [];
        }
    }

    /**
     * Probabilidade de conseguir uma carta a partir da dificuldade
     * 5 -> 1%; valores entre 99.0 e 100.0
     * 4 -> 5%; valores entre 94.0 e 98.99999
     * 3 -> 12%; valores entre 82.0 e 93.9999999
     * 2 -> 32%; valores entre 50.0 e 81.9999999
     * 1 -> 50%; valores entre 0.0 e 49.9999999
     */
    generateCard() {
        let probality = this.generateProbality();
        let cards = this.getCards(probality);
        return this.getCard(cards);
    }

}

const cardGenerator = new CardGenerator();

export default cardGenerator;