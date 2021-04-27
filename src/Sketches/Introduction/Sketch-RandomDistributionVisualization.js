import {RandomDistribution} from "../../Introduction/RandomDistribution.js";

let width = 2400;
let height = 400;

let rd;

new p5(function(p5) {

    p5.setup = function() {
        let cnv = p5.createCanvas(width, height);
        rd = new RandomDistribution(80);
    }

    p5.draw = function() {
        rd.performIteration(p5);
    }

});