class LevelTwo extends Phaser.Scene {
    constructor() {
        super("levelTwo");
    }

    // please work 1

    preload(){
        this.load.image('blueBackground', 'assets/blueBackground.png');
        this.load.image('mrSquare', 'assets/mrSquare.png');
        this.load.image('speechBubble', 'assets/speechBubble.png');
        this.load.image('stuffedToyButton', 'assets/stuffedToyButton.png');
        this.load.image('dollButton', 'assets/dollButton.png');
        this.load.image('carButton', 'assets/carButton.png');
        this.load.image('boardgameButton', 'assets/boardgameButton.png');
        this.load.image('electricButton', 'assets/electricButton.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('close', 'assets/close.png');
    }

    create() {

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'blueBackground').setOrigin(0,0);

        //let typeP1 = Math.floor((Math.random() * 3));

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
             },
            fixedWidth: 100
        }

        //this.num = Math.round(7.27564576743546433475);
        //console.log(this.num);

        //this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        //this.scoreRight = this.add.text(460, borderUISize + borderPadding*2, this.p2Score, scoreConfig);

        this.counter = 0;

        this.choice1 = this.add.image(430, 120, 'stuffedToyButton').setInteractive();
        this.upgrade1 = 1;
        this.level1 = this.add.text(210, 120, this.upgrade1, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.price1 = 1000;

        this.choice2 = this.add.image(430, 200, 'dollButton').setInteractive();
        this.upgrade2 = 0;
        this.level2 = this.add.text(210, 200, this.upgrade2, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.price2 = 10000;

        this.choice3 = this.add.image(430, 280, 'carButton').setInteractive();
        this.upgrade3 = 0;
        this.level3 = this.add.text(210, 280, this.upgrade3, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.price3 = 100000;

        this.choice4 = this.add.image(430, 360, 'boardgameButton').setInteractive();
        this.upgrade4 = 0;
        this.level4 = this.add.text(210, 360, this.upgrade4, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.price4 = 1000000;

        this.choice5 = this.add.image(430, 440, 'electricButton').setInteractive();
        this.upgrade5 = 0;
        this.level5 = this.add.text(210, 440, this.upgrade5, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.price5 = 10000000;

        this.mr = this.add.image(100, 130, 'mrSquare');

        this.profit = this.add.text(100, 230, 'Profits $'+profits, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.expense = this.add.text(100, 260, 'Expenses $'+expenses, { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);

        this.bubble = this.add.image(100, 290, 'speechBubble');
        this.bubble.setAlpha(0);
        //this.speech = this.add.text(100, 210, 'bob\nbill', { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.speech = this.add.text(100, 247, '', { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.cost = this.add.text(100, 385, '', { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);

        this.play = this.add.sprite(100, 450, 'play').setInteractive();

        this.play.on('pointerdown', function (pointer) {

          this.scene.switch('levelThree');

        }, this);

        this.choice1.on('pointerdown', function (pointer) {

            if (money >= this.price1){
                this.upgrade1 = this.upgrade1 + 1;
                money = money - this.price1;
                profits = profits + 50;
                expenses = expenses + 20;
                this.price1 = this.price1 + 1000;
            }
  
        }, this);

        this.choice1.on('pointerover', (event, gameObjects) =>
        {

            this.bubble.setAlpha(1);
          //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
            this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.');
            this.cost.setText('Cost $'+this.price1);

        });

        this.choice1.on('pointerout', (event, gameObjects) =>
        {

            this.bubble.setAlpha(0);
            this.speech.setText('');
            this.cost.setText('');

        });

        this.choice2.on('pointerdown', function (pointer) {

            if (money >= this.price2){
                this.upgrade2 = this.upgrade2 + 1;
                money = money - this.price2;
                profits = profits + 100;
                expenses = expenses + 70;
                this.price2 = this.price2 + 10000;
            }
  
        }, this);

        this.choice2.on('pointerover', (event, gameObjects) =>
        {

            this.bubble.setAlpha(1);
          //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
            this.speech.setText('This upgrades our\ndoll production.\nAction figures are dolls,\nlittle boys just\nrefuse to admitt it.');
            this.cost.setText('Cost $'+this.price2);

        });

        this.choice2.on('pointerout', (event, gameObjects) =>
        {

            this.bubble.setAlpha(0);
            this.speech.setText('');
            this.cost.setText('');

        });

        this.choice3.on('pointerdown', function (pointer) {

            if (money >= this.price3){
                this.upgrade3 = this.upgrade3 + 1;
                money = money - this.price3;
                profits = profits + 1000;
                expenses = expenses + 800;
                this.price3 = this.price3 + 100000;
            }
  
        }, this);

        this.choice3.on('pointerover', (event, gameObjects) =>
        {

            this.bubble.setAlpha(1);
          //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
            this.speech.setText('This upgrades our\ntoy car production.\nThey are never as fast\n or powerful as real\ncars. Lame to me.');
            this.cost.setText('Cost $'+this.price3);

        });

        this.choice3.on('pointerout', (event, gameObjects) =>
        {

            this.bubble.setAlpha(0);
            this.speech.setText('');
            this.cost.setText('');

        });

        this.choice4.on('pointerdown', function (pointer) {

            if (money >= this.price4){
                this.upgrade4 = this.upgrade4 + 1;
                money = money - this.price4;
                profits = profits + 10000;
                expenses = expenses + 6000;
                this.price4 = this.price4 + 1000000;
            }
  
        }, this);

        this.choice4.on('pointerover', (event, gameObjects) =>
        {

            this.bubble.setAlpha(1);
          //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
            this.speech.setText('This upgrades our\nboard game production.\nThe only game I like\nis Monopoly, its\nabout getting rich.');
            this.cost.setText('Cost $'+this.price4);

        });

        this.choice4.on('pointerout', (event, gameObjects) =>
        {

            this.bubble.setAlpha(0);
            this.speech.setText('');
            this.cost.setText('');

        });

        this.choice5.on('pointerdown', function (pointer) {

            if (money >= this.price5){
                this.upgrade5 = this.upgrade5 + 1;
                money = money - this.price5;
                profits = profits + 100000;
                expenses = expenses + 9000;
                this.price5 = this.price5 + 10000000;
            }
  
        }, this);

        this.choice5.on('pointerover', (event, gameObjects) =>
        {

            this.bubble.setAlpha(1);
          //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
            this.speech.setText('This upgrades our\nwind-up to electronic\ntoy production. I hate\nmaking these, so\nexpensive');
            this.cost.setText('Cost $'+this.price5);

        });

        this.choice5.on('pointerout', (event, gameObjects) =>
        {

            this.bubble.setAlpha(0);
            this.speech.setText('');
            this.cost.setText('');

        });

        this.bank = this.add.text(320, 30, '$'+money, { font: '50px Futura', fill: '#FFFFFF' }).setOrigin(0.5);

        this.input.on('pointerdown', function (pointer) {

            console.log('down');

        }, this);

        this.greedTime1 = 0;
        this.greedTime2 = 0;

        this.shockTime1 = 0;
        this.shockTime2 = 0;

        this.fixTime1 = 0;
        this.fixTime2 = 0;

        this.doneTime1 = 0;
        this.doneTime2 = 0;

        this.softTime1 = 0;
        this.softTime2 = 0;

        this.hardTime1 = 0;
        this.hardTime2 = 0;

        this.roadTime1 = 0;
        this.roadTime2 = 0;

        this.diceTime1 = 0;
        this.diceTime2 = 0;

        this.bulbTime1 = 0;
        this.bulbTime2 = 0;

    }

    update() {
        
         // check key input for restart
        //if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
        //    this.scene.restart();
        //    this.speedUp = false;
        //    console.log(game.settings.spaceshipSpeed);
        //    console.log(this.speedUp);
        //}

        //if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        //    this.scene.start("menu");
        //}

        const movenmentSpeed = 4;

        money = money + profits;
        money = money - expenses;
        this.bank.setText('$'+money);

        this.profit.setText('Profits $'+profits);
        this.expense.setText('Expenses $'+expenses);

        this.level1.setText(this.upgrade1);
        this.level2.setText(this.upgrade2);
        this.level3.setText(this.upgrade3);
        this.level4.setText(this.upgrade4);
        this.level5.setText(this.upgrade5);

        if (this.upgrade1 == 100){
            if (this.softTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You have put a lot\nof money into stuffed\ntoys. How much of \nthis soft junk do\nyou want to make?!');
                this.softTime1 = this.softTime1 + 1;
                
            }
            else if (this.softTime1 == 1000 && this.softTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('We have to make \ndeals with fairs, gift\nshops and carnivals \njust to sell them.\nIts plain dumb!!');
                this.softTime2 = this.softTime2 + 1;
                
            }
        }

        if (this.upgrade2 == 100){
            if (this.hardTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You have put a lot\nof money into dolls.\nBy far the safest toy\nto sell and earn\nmoney from.');
                this.hardTime1 = this.hardTime1 + 1;
                
            }
            else if (this.hardTime1 == 1000 && this.hardTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Or at least it \nwould be if you were not\nso stubborn about QA.\nToo much money\ngoes into those.');
                this.hardTime2 = this.hardTime2 + 1;
                
            }
        }

        if (this.upgrade3 == 100){
            if (this.roadTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You have put a lot\nof money into toy cars.\nI still do not see\nthe appeal of the\ntiny fakes.');
                this.roadTime1 = this.roadTime1 + 1;
                
            }
            else if (this.roadTime1 == 1000 && this.roadTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('They are not big,\nnor loud, and will never\nas fast. And they \nnot expensive! \nWhy do these sell?!.');
                this.roadTime2 = this.roadTime2 + 1;
                
            }
        }

        if (this.upgrade4 == 100){
            if (this.diceTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You have put a lot\nof money into board\ngames. I hate making\nthese, dealing with\ngame designers.');
                this.diceTime1 = this.diceTime1 + 1;
                
            }
            else if (this.diceTime1 == 1000 && this.diceTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Their dumb creater\ncomplexes, always out\nto make games better.\nThey SHOULD just\nslap stuff together.');
                this.diceTime2 = this.diceTime2 + 1;
                
            }
        }

        if (this.upgrade5 == 100){
            if (this.bulbTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You have put a lot\nof money into electric\ntoys. By far the \nmost expensive move\nyou made.');
                this.bulbTime1 = this.bulbTime1 + 1;
                
            }
            else if (this.bulbTime1 == 1000 && this.bulbTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('All the parts we \nhave to buy and assemble.\nHow much of the\nmoney to do so comes\nfrom my paycheck?!');
                this.bulbTime2 = this.bulbTime2 + 1;
                
            }
        }

        if (money == 100000000000){
            if (this.greedTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Despite your idiot\nways, you have managed\nto make a decent \namount of money.\nI was expection');
                this.greedTime1 = this.greedTime1 + 1;
                
            }
            else if (this.greedTime1 == 1000 && this.greedTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('worse, but you did\nmake something that can\npay me. I still could\nmake more if\nI was boss, though.');
                this.greedTime2 = this.greedTime2 + 1;
                
            }
        }

        if (bought == true){
            if (this.shockTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('What the heck?! \nYou used company\nmoney to buy some\nrun down mansion?\nWhy?!?');
                this.shockTime1 = this.shockTime1 + 1;
                
            }
            else if (this.shockTime1 == 1000 && this.shockTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Your not going to\neven live there! This is\nan outrageous waste\nof money! You \nlittle idiot!!!');
                this.shockTime2 = this.shockTime2 + 1;
                
            }
        }

        if (fixedUp == true){
            if (this.fixTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('So, you used our\nmoney fixing up that old\nmansion, and gathe-\nring toys and \ngames in the place.');
                this.fixTime1 = this.fixTime1 + 1;
                
            }
            else if (this.fixTime1 == 1000 && this.fixTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Your wasting money,\nyou fool! This childish\nuh, whatever your\nmaking there will\nnever be worth it!');
                this.fixTime2 = this.fixTime2 + 1;
                
            }
        }
        if (sanctuary == true){
            if (this.doneTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Pool repair, food\ndelivery, so many toys\nin every room. You \nturned that mansion\ninto a fun house!');
                this.doneTime1 = this.doneTime1 + 1;
                
            }
            else if (this.doneTime1 == 1000 && this.doneTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Wasting the budget\non this useless play\nbuilding! I was in \ncharge, I would fire\nyou right now!!!');
                this.doneTime2 = this.doneTime2 + 1;
                
            }
        }

        if(this.keyA.isDown) {
            console.log(this.shockTime1);
        }

    }

}