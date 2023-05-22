console.log("Hello from main.js");

// Michael Jasper, Modded Rocket Patrol: Multi-Player Color Matching, 4-19-2022, completed in 5 days

let config = {
    type: Phaser.Canvas,
    debug: true,
    width: 640,
    height: 480,
    scene: [Menu, LevelTwo, LevelThree]
};

let keyA, keyS, keyD, keyF, keyLEFT, keyRIGHT, keyUP, keyR;

let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let bought = false;
let fixedUp = false;
let sanctuary = false;

let money = 0;
let profits = 50;
let expenses = 20;

let game = new Phaser.Game(config);