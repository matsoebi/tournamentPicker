import {Contestant} from "./tournamentGenerator"

export class TreeNode {
    right: TreeNode | Contestant | null;
    left: TreeNode | Contestant | null;

    constructor();
    constructor(nodeR: Contestant, nodeL: Contestant);
    constructor(nodeR: TreeNode, nodeL: TreeNode);
    constructor(nodeR?: TreeNode | Contestant, nodeL?: TreeNode | Contestant) {
        this.right = nodeR ?? null;
        this.left = nodeL ?? null;
    }
    
    clash() {
        //i don't have a clue what i will do here
    }
}

export function branch(root: TreeNode, contestants: Contestant[]) {
    if (contestants.length == 2) {
        root.left = contestants[0];
        root.right = contestants[1];
    } else if (contestants.length == 3) {
        let nodeL = new TreeNode();
        branch(nodeL, contestants.slice(0, 2));
        root.left = nodeL;

        root.right = contestants[2];
    } else {
        let mid = Math.floor(contestants.length/2);

        let nodeL = new TreeNode();
        branch(nodeL, contestants.slice(0, mid));
        root.left = nodeL;

        let nodeR = new TreeNode();
        branch(nodeR, contestants.slice(mid));
        root.right = nodeR;
    }
}