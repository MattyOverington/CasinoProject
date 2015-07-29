
//---------------------------------------------------
//Initialization
//---------------------------------------------------

var canvas;
var context;
var renderer;


//---------------------------------------------------
//Constructors
//---------------------------------------------------

//Game Constructor

function Game (numberOfPlayers, roundNum, initialCash, initialSmallBlind, blindRaiseInterval, blindRaisePercetage, numberofDecks, players, decks) {
    this.numberOfPlayers = numberofPlayers;
    this.roundNum = roundNum;
    this.initialCash = initialCash;
    this.initialSmallBlind = initialSmallBlind;
    this.blindRaiseInterval = blindRaiseInterval;
    this.blindRaisePercentage = blindRaisePercentage;
    this.numberOfDecks = numberofDecks;
    this.players = players;
    this.decks = decks;
}


//Deck Constructor

function Deck (numberOfCards, cards) {
    this.cards = cards;
    this.numberOfCards = numberOfCards;
}

//Card Constructor

function Card (suit, number, deck) {
    this.suit = suit;
    this.number = number;
    this.deck = deck;
}

//Player Constructor

function Player (number, colour, name, balance, rank, currentHand) {
    this.number = number;
    this.colour = colour;
    this.name = name;
    this.balance = balance;
    this.rank = rank;
    this.currentHand = currentHand;
}

//---------------------------------------------------
//Canvas Methods
//---------------------------------------------------

function initCanvas() {
	canvas = document.getElementById("texas_holdem_canvas");
	context = canvas.getContext("2d")
}

function initPixi() {
	var renderer = 	new PIXI
}