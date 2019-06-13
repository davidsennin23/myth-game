import Pontuation from "./Pontuation";
import PlayerCards from '../cards/PlayerCards';
import { Subject } from "rxjs";

export default class Player {

    constructor() {
        this.points = new Pontuation();
        this.cards = new PlayerCards();
        this.cardGenSubject = new Subject();
    }

    getPoints = () => this.points;

    validatePoints = (amount) => this.points.hasEnough(amount);

    generateCard = (card, amount) => {
        if (this.validatePoints(amount)) {
            this.points.consumePoints(amount);
            this.cardGenSubject.next(this.cards.addNewCard(card));
        }
    }

    getPlayerCards = () => this.cards.getCards();

    subscribeToCardSpawn = (func) => this.cardGenSubject.subscribe(func);

    unsubscribeOfCardSpawn = (func) => this.cardGenSubject.unsubscribe(func);

}