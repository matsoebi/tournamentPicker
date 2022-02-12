"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contestant = exports.createTournamentPlan = void 0;
const tree_1 = require("./tree");
function createTournamentPlan(contestants) {
    contestants = randomizeOrder(contestants);
    let root = new tree_1.TreeNode();
    (0, tree_1.branch)(root, contestants);
    return root;
}
exports.createTournamentPlan = createTournamentPlan;
/**
 * Randomizes the order of the given list
 * @param contestants list of contestants
 * @returns list of contestants in randomizes order
 */
function randomizeOrder(contestants) {
    return contestants.map(el => [Math.floor(Math.random() * 100), el])
        .sort((a, b) => a[0] - b[0])
        .map(el => el[1]);
}
class Contestant {
    constructor(name) {
        this.name = name;
    }
}
exports.Contestant = Contestant;
