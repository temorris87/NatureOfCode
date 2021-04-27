import {RandomWalker} from "./RandomWalker.js";

let width = 800;
let height = 800;

let rws = [];

new p5(function(p5) {

    p5.setup = function() {
        let cnv = p5.createCanvas(width, height);

        rws.push(new RandomWalker(width / 4, height / 4, 4, p5));
        rws.push(new RandomWalker(3 * width / 4, height / 4, 4, p5));
        rws.push(new RandomWalker(width / 4, 3 * height / 4, 4, p5));
        rws.push(new RandomWalker(3 * width / 4, 3 * height / 4, 4, p5));
    }

    p5.draw = function() {
        for (const rw of rws) {
            rw.randomStep();
        }
    }

});