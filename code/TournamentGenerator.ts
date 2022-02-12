import {TreeNode, branch} from "./tree"

export function createTournamentPlan(contestants: Contestant[]) {
    contestants = randomizeOrder(contestants);

    let root = new TreeNode();
    branch(root, contestants);
    return root;
}

/**
 * Randomizes the order of the given list
 * @param contestants list of contestants
 * @returns list of contestants in randomizes order
 */
function randomizeOrder(contestants: Contestant[]):Contestant[] {
    return contestants.map(el => [Math.floor(Math.random() * 100), el])
    .sort((a,b) => <number>a[0]-<number>b[0]) 
    .map(el => <Contestant>el[1]);
}

export class Contestant {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}