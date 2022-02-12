import {Contestant, createTournamentPlan} from "./tournamentGenerator"

let contestantList = [
    new Contestant("Paul"),
    new Contestant("Petra"),
    new Contestant("Monika"),
    new Contestant("Erik"),
    new Contestant("Marisha"),
    new Contestant("Matt"),
    new Contestant("Skully"),
    new Contestant("Josh"),
    new Contestant("Ethan"),
    new Contestant("Tobi"),
    new Contestant("Mark")
];

function start() {
    //get contestant list
    let root = createTournamentPlan(contestantList);

}
