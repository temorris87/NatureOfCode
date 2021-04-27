export class RandomWalker {
    constructor(x, y, stepSize, p) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x;
        this.y2 = y;
        this.stepSize = stepSize;
        this.p = p;
    }

    drawStep() {
        this.p.line(this.x1, this.y1, this.x2, this.y2);
    }

    randomStep() {
        let choices = [-1, 0, 1];
        let dx = this.p.random(choices);
        let dy = this.p.random(choices);

        this.x1 = this.x2;
        this.y1 = this.y2;

        this.x2 = this.x1 + (dx * this.stepSize);
        this.y2 = this.y1 + (dy * this.stepSize);

        this.drawStep();
    }
}