"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branch = exports.TreeNode = void 0;
class TreeNode {
    constructor(nodeR, nodeL) {
        this.right = nodeR !== null && nodeR !== void 0 ? nodeR : null;
        this.left = nodeL !== null && nodeL !== void 0 ? nodeL : null;
    }
    clash() {
        //i don't have a clue what i will do here
    }
}
exports.TreeNode = TreeNode;
function branch(root, contestants) {
    if (contestants.length == 2) {
        root.left = contestants[0];
        root.right = contestants[1];
    }
    else if (contestants.length == 3) {
        let nodeL = new TreeNode();
        branch(nodeL, contestants.slice(0, 2));
        root.left = nodeL;
        root.right = contestants[2];
    }
    else {
        let mid = Math.floor(contestants.length / 2);
        let nodeL = new TreeNode();
        branch(nodeL, contestants.slice(0, mid));
        root.left = nodeL;
        let nodeR = new TreeNode();
        branch(nodeR, contestants.slice(mid));
        root.right = nodeR;
    }
}
exports.branch = branch;
