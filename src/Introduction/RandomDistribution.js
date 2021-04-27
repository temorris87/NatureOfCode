export class RandomDistribution {

    constructor(n) {
        this.frequencies = [];

        for (let i = 0; i < n; i++) {
            this.frequencies.push(0);
        }
    }

    generateRandomNumber() {
        this.frequencies[Math.floor(Math.random() * this.frequencies.length)]++;
    }

    drawFrequencies(p) {
        let boxWidth = p.width / this.frequencies.length;
        for (let i = 0; i < this.frequencies.length; i++) {
            let x = i * boxWidth;
            let y = p.height - this.frequencies[i];
            p.rect(x, y, boxWidth, p.height - y);
        }
    }

    performIteration(p) {
        this.generateRandomNumber();
        this.drawFrequencies(p);
    }

}