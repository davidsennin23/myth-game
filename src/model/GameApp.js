import Player from "./player/Player";
import cardGenerator from './game-utils/CardGenerator';
import errorCatcher from './errors/ErrorCatcher';

class GameApp {

    initGame() {
        this.player = new Player();
    }

    getPlayer = () => this.player;

    generateNewCard = (amount) => {
        let card = cardGenerator.generateCard();
        console.log(card);
        this.player.generateCard(card, amount);
    }

    getNewCard = () => {
        let amount = 1000;
        console.log("Generate card");
        if (!this.player.validatePoints(amount)) {
            throw new Error("Não tem pontos suficientes para conseguir uma nova carta");
        }
        this.generateNewCard(amount);
    }

}

const game = new GameApp();
errorCatcher.registerFunction("card-gen", game, "getNewCard");

export default game;