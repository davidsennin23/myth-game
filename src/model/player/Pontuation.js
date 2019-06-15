import { Subject } from 'rxjs';

export default class {

    constructor() {
        this.pontuation = 0;
        this.generatePoints();
    }

    generatePoints() {
        this.subject = new Subject();
        setInterval(() => this.subject.next(this.pontuation += 10), 100);
    }

    getTotalPoints() {
        return this.pontuation;
    }

    consumePoints(amount) {
        if (!this.hasEnough(amount)) throw new Error("Cannot use more points than you have");
        console.log(this.pontuation);
        this.pontuation -= amount;
        console.log(this.pontuation);
    }

    hasEnough(amount) {
        return (amount < this.pontuation)
    }

    subscribe(funct) {
        return this.subject.subscribe(funct);
    }

    unsubscribe(funct) {
        this.subject.unsubscribe(funct);
    }

}