"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournamentGenerator_1 = require("./tournamentGenerator");
let participantList = [
    new tournamentGenerator_1.Contestant("Paul"),
    new tournamentGenerator_1.Contestant("Petra"),
    new tournamentGenerator_1.Contestant("Monika"),
    new tournamentGenerator_1.Contestant("Erik"),
    new tournamentGenerator_1.Contestant("Marisha"),
    new tournamentGenerator_1.Contestant("Matt"),
    new tournamentGenerator_1.Contestant("Skully"),
    new tournamentGenerator_1.Contestant("Josh"),
    new tournamentGenerator_1.Contestant("Ethan"),
    new tournamentGenerator_1.Contestant("Tobi"),
    new tournamentGenerator_1.Contestant("Mark")
];
(0, tournamentGenerator_1.createTournamentPlan)(participantList);
