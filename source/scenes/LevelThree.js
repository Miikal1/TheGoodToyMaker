class LevelThree extends Phaser.Scene {
    constructor() {
        super("levelThree");
    }

    // please work 1

    preload(){
        this.load.image('blueBackground', 'assets/blueBackground.png');
        this.load.image('teddyFace', 'assets/teddyFace.png');
        this.load.image('business', 'assets/business.png');
        this.load.image('mansionButton', 'assets/mansionButton.png');
        this.load.image('plumbingButton', 'assets/plumbingButton.png');
        this.load.image('electricityButton', 'assets/electricityButton.png');
        this.load.image('foodButton', 'assets/foodButton.png');
        this.load.image('repairButton', 'assets/repairButton.png');
        this.load.image('houseRepairButton', 'assets/houseRepairButton.png');
        this.load.image('tvButton', 'assets/tvButton.png');
        this.load.image('gamesButton', 'assets/gamesButton.png');
        this.load.image('poolButton', 'assets/poolButton.png');
        this.load.image('gardenButton', 'assets/gardenButton.png');
        this.load.image('hammerGame1', 'assets/hammerGame1.png');
        this.load.image('hammerGame2', 'assets/hammerGame2.png');
        this.load.image('plumbingGame1', 'assets/plumbingGame1.png');
        this.load.image('plumbingGame2', 'assets/plumbingGame2.png');
        this.load.image('wireGame1', 'assets/wireGame1.png');
        this.load.image('wireGame2', 'assets/wireGame2.png');
        this.load.image('sewingGame1', 'assets/sewingGame1.png');
        this.load.image('sewingGame2', 'assets/sewingGame2.png');
        this.load.image('close', 'assets/close.png');
        this.load.image('bought', 'assets/bought.png');
    }

    create() {

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

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

        this.happiness = 100;

        this.counter = 0;

        this.mansion = false;
        this.plumbing = false;
        this.electricity = false;
        this.food = false;
        this.repair = false;
        this.houseRepair = false;
        this.tv = false;
        this.game = false
        this.pool = false;
        this.garden = false;

      /*this.choice1 = this.add.image(430, 120, 'option');
        this.choice2 = this.add.image(430, 200, 'option');
        this.choice3 = this.add.image(430, 280, 'option');
        this.choice4 = this.add.image(430, 360, 'option');
        this.choice5 = this.add.image(430, 440, 'option');*/

        this.teddy = this.add.image(100, 130, 'teddyFace');

        //this.happiness = this.add.text(100, 230, 'Happiness: '+this.happiness+ '%', { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);

        this.bubble = this.add.image(100, 290, 'speechBubble');
        this.bubble.setAlpha(0);
        this.speech = this.add.text(100, 247, '', { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);
        this.cost = this.add.text(100, 385, '', { font: '20px Futura', fill: '#000000' }).setOrigin(0.5);

        this.mini = false;
        this.finished = 0;

        var business = this.add.sprite(100, 450, 'business').setInteractive();

        business.on('pointerdown', function (pointer) {
                if (this.mini == false){
                    this.scene.switch('levelTwo');
                }
                if(this.mansion == true){
                    if(this.houseRepair == false){
                        this.hammer = this.add.image(100, 290, 'hammerGame1').setInteractive();
                        this.hammerCount = 0;
                        this.mini = true;
                        this.finished = 0;
                    }
                    if(this.plumbing == false){
                        this.plumb = this.add.image(100, 290, 'plumbingGame1');
                        this.plumbCount = 0;
                        this.mini = true;
                        this.finished = 0;
                    }
                    if(this.electricity == false){
                        this.wire = this.add.image(100, 290, 'wireGame1');
                        this.wireCount = 0;
                        this.mini = true;
                        this.finished = 0;
                    }
                    if(this.repair == false){
                        this.sewing = this.add.image(100, 290, 'sewingGame1');
                        this.sewingCount = 0;
                        this.mini = true;
                        this.finished = 0;
                    }
                }
        }, this);

        this.bank = this.add.text(320, 30, '$'+money, { font: '50px Futura', fill: '#FFFFFF' }).setOrigin(0.5);

        this.fixTime1 = 0;
        this.fixTime2 = 0;

        this.thankTime1 = 0;
        this.thankTime2 = 0;

        this.houseTime1 = 0;
        this.houseTime2 = 0;

        this.wallTime1 = 0;
        this.wallTime2 = 0;

        this.pipeTime1 = 0;
        this.pipeTime2 = 0;

        this.lightTime1 = 0;
        this.lightTime2 = 0;

        this.threadTime1 = 0;
        this.threadTime2 = 0;

        this.eatTime1 = 0;
        this.eatTime2 = 0;

        this.plantTime1 = 0;
        this.plantTime2 = 0;

        this.watchTime1 = 0;
        this.watchTime2 = 0;

        this.waterTime1 = 0;
        this.waterTime2 = 0;

        this.playTime1 = 0;
        this.playTime2 = 0;

        this.mansionChoice = this.add.image(430, 120, 'mansionButton').setInteractive();
        this.mansionPrice = 1000000;

        this.mansionChoice.on('pointerdown', function (pointer) {

            if (money >= this.mansionPrice){
                money = money - this.mansionPrice;
                this.mansion = true;
                bought = true;
                this.mansionChoice.setAlpha(0);
                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');
            }
  
        }, this);

        this.mansionChoice.on('pointerover', (event, gameObjects) =>
        {

            if(this.mansion == false){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('The first step in\nmaking a sanctury is a\nbuilding that can\nhouse a lot of toys.\nNothing grand needed.');
                this.cost.setText('Cost $'+this.mansionPrice);
            }

        });

        this.mansionChoice.on('pointerout', (event, gameObjects) =>
        {

            this.bubble.setAlpha(0);
            this.speech.setText('');
            this.cost.setText('');

        });

    }

    update() {
        
        /*if (this.inUse == true){
            this.close = this.add.image(100, 360, 'close').setInteractive();
            if (this.mansion == true){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('');
            }
            this.close.on('pointerdown', function (pointer) {
                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.close.destroy();
                this.inUse = false;
            }, this);
        }*/

        if (this.mini == true){
            this.fixed = 4;
            if (this.houseRepair == true){
                this.fixed = this.fixed - 1;
            }
            if (this.plumbing == true){
                this.fixed = this.fixed - 1;
            }
            if (this.electricity == true){
                this.fixed = this.fixed - 1;
            }
            if (this.repair == true){
                this.fixed = this.fixed - 1;
            }
            if(Phaser.Input.Keyboard.JustDown(this.keyA)) {

                this.hammerCount = this.hammerCount+1;
                if(this.hammerCount == 1 || this.hammerCount == 3 || this.hammerCount == 5 || this.hammerCount == 7){
                 this.hammer.setTexture('hammerGame2');
                }
                else if(this.hammerCount == 0 || this.hammerCount == 2 || this.hammerCount == 4 || this.hammerCount == 6){
                    this.hammer.setTexture('hammerGame1');
                   }
                if (this.hammerCount == 8){
                 this.hammer.destroy();
                 this.finished = this.finished + 1;
                }
     
            }
            if(Phaser.Input.Keyboard.JustDown(this.keyS)) {

                this.plumbCount = this.plumbCount+1;
                if(this.plumbCount == 1 || this.plumbCount == 3 || this.plumbCount == 5 || this.plumbCount == 7){
                 this.plumb.setTexture('plumbingGame2');
                }
                else if(this.plumbCount == 0 || this.plumbCount == 2 || this.plumbCount == 4 || this.plumbCount == 6){
                    this.plumb.setTexture('plumbingGame1');
                   }
                if (this.plumbCount == 8){
                 this.plumb.destroy();
                 this.finished = this.finished + 1;
                }
                
            }

            if(Phaser.Input.Keyboard.JustDown(this.keyD)) {

                this.wireCount = this.wireCount+1;
                if(this.wireCount == 1 || this.wireCount == 3 || this.wireCount == 5 || this.wireCount == 7){
                 this.wire.setTexture('wireGame2');
                }
                else if(this.wireCount == 0 || this.wireCount == 2 || this.wireCount == 4 || this.wireCount == 6){
                    this.wire.setTexture('wireGame1');
                   }
                if (this.wireCount == 8){
                 this.wire.destroy();
                 this.finished = this.finished + 1;
                }
     
            }

            if(Phaser.Input.Keyboard.JustDown(this.keyF)) {

                this.sewingCount = this.sewingCount+1;
                if(this.sewingCount == 1 || this.sewingCount == 3 || this.sewingCount == 5 || this.sewingCount == 7){
                 this.sewing.setTexture('sewingGame2');
                }
                else if(this.sewingCount == 0 || this.sewingCount == 2 || this.sewingCount == 4 || this.sewingCount == 6){
                    this.sewing.setTexture('sewingGame1');
                   }
                if (this.sewingCount == 8){
                 this.sewing.destroy();
                 this.finished = this.finished + 1;
                }
                
            }

            if(this.fixed == this.finished){
                this.mini = false;
            }
        }

        if (this.mansion == true){
            // house repair
            this.houseRepairChoice = this.add.image(430, 120, 'houseRepairButton').setInteractive();
            this.houseRepairPrice = 1000000000;

            this.houseRepairChoice.on('pointerdown', function (pointer) {

                if (this.mini == false){
                    if (money >= this.houseRepairPrice){
                       money = money - this.houseRepairPrice;
                        this.houseRepair = true;
                        this.houseRepairChoice.setAlpha(0);
                        this.bubble.setAlpha(0);
                        this.speech.setText('');
                        this.cost.setText('');
                    }
                }
  
            }, this);

            this.houseRepairChoice.on('pointerover', (event, gameObjects) =>
            {
                if (this.houseRepair == false && this.mini == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('The house is big\nand cool, but the oldness\nis really showing.\nWe need to make \nsome permanant repairs.');
                    this.cost.setText('Cost $'+this.houseRepairPrice);
                }
            });

            this.houseRepairChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            //plumbing
            this.plumbingChoice = this.add.image(430, 200, 'plumbingButton').setInteractive();
            this.plumbingPrice = 1000000000;

            this.plumbingChoice.on('pointerdown', function (pointer) {

                if (this.mini == false){
                    if (money >= this.plumbingPrice){
                       money = money - this.plumbingPrice;
                        this.plumbing = true;
                        this.plumbingChoice.setAlpha(0);
                        this.bubble.setAlpha(0);
                        this.speech.setText('');
                        this.cost.setText('');
                    }
                }
  
            }, this);

            this.plumbingChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.plumbing == false && this.mini == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('The plumbing in this\nhouse keeps braking\ndown. We need a pro to\nto make a\nperminant solution.');
                    this.cost.setText('Cost $'+this.plumbingPrice);
                }

            });

            this.plumbingChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            // electricity
            this.electricityChoice = this.add.image(430, 280, 'electricityButton').setInteractive();
            this.electricityPrice = 1000000000;

            this.electricityChoice.on('pointerdown', function (pointer) {

                if (this.mini == false){
                    if (money >= this.electricityPrice){
                       money = money - this.electricityPrice;
                        this.electricity = true;
                        this.electricityChoice.setAlpha(0);
                        this.bubble.setAlpha(0);
                        this.speech.setText('');
                        this.cost.setText('');
                    }
                }
  
            }, this);

            this.electricityChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.electricity == false && this.mini == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('The lights in this\nhouse struggle to stay\non. We need to fix\nthe wiring for good\nso the toys can see.');
                    this.cost.setText('Cost $'+this.electricityPrice);
                }

            });

            this.electricityChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            // repair
            this.repairChoice = this.add.image(430, 360, 'repairButton').setInteractive();
            this.repairPrice = 1000000000;

            this.repairChoice.on('pointerdown', function (pointer) {

                if (this.mini == false){
                    if (money >= this.repairPrice){
                       money = money - this.repairPrice;
                        this.repair = true;
                        this.repairChoice.setAlpha(0);
                        this.bubble.setAlpha(0);
                        this.speech.setText('');
                        this.cost.setText('');
                    }
                }
  
            }, this);

            this.repairChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.repair == false && this.mini == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('Many of the toys in\nhouse are in bad shape.\nSome skilled toy\nmakers can be hired\nto repair us.');
                    this.cost.setText('Cost $'+this.repairPrice);
                }

            });

            this.repairChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

        }

        if (this.houseRepair == true && this.plumbing == true && this.electricity == true && this.repair == true){
            fixedUp = true;
            // food
            this.foodChoice = this.add.image(430, 120, 'foodButton').setInteractive();
            this.foodPrice = 100000000000;

            this.foodChoice.on('pointerdown', function (pointer) {

                if (money >= this.foodPrice){
                    money = money - this.foodPrice;
                    this.food = true;
                    this.foodChoice.setAlpha(0);
                    this.bubble.setAlpha(0);
                    this.speech.setText('');
                    this.cost.setText('');
                }
  
            }, this);

            this.foodChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.food == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('Toys do not need to\neat, but we can and do\nlike tasty food. You\nthink delivery is\npossible?');
                    this.cost.setText('Cost $'+this.foodPrice);
                }

            });

            this.foodChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            //garden
            this.gardenChoice = this.add.image(430, 200, 'gardenButton').setInteractive();
            this.gardenPrice = 100000000000;

            this.gardenChoice.on('pointerdown', function (pointer) {

                if (money >= this.gardenPrice){
                    money = money - this.gardenPrice;
                    this.garden = true;
                    this.gardenChoice.setAlpha(0);
                    this.bubble.setAlpha(0);
                    this.speech.setText('');
                    this.cost.setText('');
                }
  
            }, this);

            this.gardenChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.garden == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('The garden in the\nback is workable, and \nsome of the toys want\nto grow stuff in\nit. Lets help.');
                    this.cost.setText('Cost $'+this.gardenPrice);
                }

            });

            this.gardenChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            // tv
            this.tvChoice = this.add.image(430, 280, 'tvButton').setInteractive();
            this.tvPrice = 100000000000;

            this.tvChoice.on('pointerdown', function (pointer) {

                if (money >= this.tvPrice){
                    money = money - this.tvPrice;
                    this.tv = true;
                    this.tvChoice.setAlpha(0);
                    this.bubble.setAlpha(0);
                    this.speech.setText('');
                    this.cost.setText('');
                }
  
            }, this);

            this.tvChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.tv == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('Some toys are bored\nwith the board games\nwe brought. We need a\nbetter source of\nfun, like a TV.');
                    this.cost.setText('Cost $'+this.tvPrice);
                }

            });

            this.tvChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            // pool
            this.poolChoice = this.add.image(430, 360, 'poolButton').setInteractive();
            this.poolPrice = 100000000000;

            this.poolChoice.on('pointerdown', function (pointer) {

                if (money >= this.poolPrice){
                    money = money - this.poolPrice;
                    this.pool = true;
                    this.poolChoice.setAlpha(0);
                    this.bubble.setAlpha(0);
                    this.speech.setText('');
                    this.cost.setText('');
                }
  
            }, this);

            this.poolChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.pool == false){
                    this.bubble.setAlpha(1);
                  //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('We found a big pool\nin the lower floor. If\nwe can fix it, all\nthe toys can go\nswimming.');
                    this.cost.setText('Cost $'+this.poolPrice);
                }

            });

            this.poolChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

            // game
            this.gameChoice = this.add.image(430, 440, 'gamesButton').setInteractive();
            this.gamePrice = 100000000000;

            this.gameChoice.on('pointerdown', function (pointer) {

                if (money >= this.gamePrice){
                    money = money - this.gamePrice;
                    this.game = true;
                    this.gameChoice.setAlpha(0);
                    this.bubble.setAlpha(0);
                    this.speech.setText('');
                    this.cost.setText('');
                }
  
            }, this);

            this.gameChoice.on('pointerover', (event, gameObjects) =>
            {

                if (this.game == false){
                    this.bubble.setAlpha(1);
                //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                    this.speech.setText('Some toys say they\nwant more entertainment.\nHow about video\ngames? Those could\nexcite them.');
                    this.cost.setText('Cost $'+this.gamePrice);
                }

            });

            this.gameChoice.on('pointerout', (event, gameObjects) =>
            {

                this.bubble.setAlpha(0);
                this.speech.setText('');
                this.cost.setText('');

            });

        }

        /*this.choice1 = this.add.image(430, 120, 'option');
        this.choice2 = this.add.image(430, 200, 'option');
        this.choice3 = this.add.image(430, 280, 'option');
        this.choice4 = this.add.image(430, 360, 'option');
        this.choice5 = this.add.image(430, 440, 'option');*/

        if (this.houseRepair == true){
            this.boughtRH = this.add.image(430, 120, 'bought');
        }

        if (this.plumbing == true){
            this.boughtPL = this.add.image(430, 200, 'bought');
        }

        if (this.electricity == true){
            this.boughtEL = this.add.image(430, 280, 'bought');
        }

        if (this.repair == true){
            this.boughtRE = this.add.image(430, 360, 'bought');
        }

        if (this.houseRepair == true && this.plumbing == true && this.electricity == true && this.repair == true){
            this.boughtRH.destroy();
            this.boughtPL.destroy();
            this.boughtEL.destroy();
            this.boughtRE.destroy();
        }

        if (this.food == true){
            this.boughtFO = this.add.image(430, 120, 'bought');
        }

        if (this.garden == true){
            this.boughtGA = this.add.image(430, 200, 'bought');
        }

        if (this.tv == true){
            this.boughtTV = this.add.image(430, 280, 'bought');
        }

        if (this.pool == true){
            this.boughtPO = this.add.image(430, 360, 'bought');
        }

        if (this.game == true){
            this.boughtGAME = this.add.image(430, 440, 'bought');
        }

        if (this.mansion == true){
            if (this.houseTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Wait, you bought a\nwhole mansion to build\nour sanctuary in. \nYou did not need\nto buy big, but wow!');
                this.houseTime1 = this.houseTime1 + 1;
            }
            else if (this.houseTime1 == 1000 && this.houseTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('How many rooms are\nin this place? We can\nmake this place into\nan awesome toy\nsanctuary. Lets do it.');
                this.houseTime2 = this.houseTime2 + 1;
            }
        }

        if (this.houseRepair == true){
            if (this.wallTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('We fixed the leaky\nroof, broken cupboards,\nand holes in the \nwalls. The house is\nbetter shape now.');
                this.wallTime1 = this.wallTime1 + 1;
            }
            else if (this.wallTime1 == 1000 && this.wallTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Now we have less\nwood work to do every\ntime you visit. And\nmore toys will come\nto play here.');
                this.wallTime2 = this.wallTime2 + 1;
            }
        }

        if (this.plumbing == true){
            if (this.pipeTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('That takes care of\nall the leaky pipes and\ngot the water run-\nning. I would say\nplumbings done');
                this.pipeTime1 = this.pipeTime1 + 1;
            }
            else if (this.pipeTime1 == 1000 && this.pipeTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('The working sinks\nand tubs will be great\nfor water proof toys\nand for cleaning\ntoys in general.');
                this.pipeTime2 = this.pipeTime2 + 1;
            }
        }

        if (this.electricity == true){
            if (this.lightTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('All the wires are\nin the right places now\nso all the lights\nand outlets should\nwork now.');
                this.lightTime1 = this.lightTime1 + 1;
            }
            else if (this.lightTime1 == 1000 && this.lightTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('This will be great\nthat need to recharge\nin some way. And I\nwonder what other\nfun we can power.');
                this.lightTime2 = this.lightTime2 + 1;
            }
        }

        if (this.repair == true){
            if (this.threadTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('All these repair\nguys and toy makers know\nthe secret of us \ntoys living and are\nwilling to keep it.');
                this.threadTime1 = this.threadTime1 + 1;
            }
            else if (this.threadTime1 == 1000 && this.threadTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('They are ready to\nsew or screw anyone back\ntogether. Its a\ngreat relief to all\n.toys. Thank you.');
                this.threadTime2 = this.threadTime2 + 1;
            }
        }

        if (this.food == true){
            if (this.eatTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You set up for food\ndelivery to occur \nweakly, and pay for \nspecial event food,\nlike pizza nights?!');
                this.eatTime1 = this.eatTime1 + 1;
            }
            else if (this.eatTime1 == 1000 && this.eatTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('I did not think \nwould be so kind. All the\ntoys the sanctuary\nare going to love\nthis!!!');
                this.eatTime2 = this.eatTime2 + 1;
            }
        }

        if (this.garden == true){
            if (this.plantTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('We bought plenty\nseeds and soil, and set\nplanter boxes. Oh, \nyou also mowed the\ngrass. Thanks, buddy.');
                this.plantTime1 = this.plantTime1 + 1;
            }
            else if (this.plantTime1 == 1000 && this.plantTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Now we can let the\ntoys start growing. I\nhope they have fun\nworking the plants\ninto into beauty.');
                this.plantTime2 = this.plantTime2 + 1;
            }
        }

        if (this.tv == true){
            if (this.watchTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('You bought us a \nhuge flat screen and set\nit up with countless\nchannels and got\nhow many movies?');
                this.watchTime1 = this.watchTime1 + 1;
            }
            else if (this.watchTime1 == 1000 && this.watchTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Its going to be\nhard to get bored now. \nYour free to watch \nwith us anytime you\nwant, friend.');
                this.watchTime2 = this.watchTime2 + 1;
            }
        }

        if (this.pool == true){
            if (this.waterTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('The pool looks so\ngreat now, and you added\na diving bord and\nwater slide!! Its\nawesome!');
                this.waterTime1 = this.waterTime1 + 1;
            }
            else if (this.waterTime1 == 1000 && this.waterTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('This is going to \nsuch a fun place for \ntoys to go swimming,\nrace boats, jump\nin, we all love this.');
                this.waterTime2 = this.waterTime2 + 1;
            }
        }

        if (this.game == true){
            if (this.playTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('How many consoles\ngames did you buy? We \nmay need more tvs to\nuse them all. You\nwill buy those to?!');
                this.playTime1 = this.playTime1 + 1;
            }
            else if (this.playTime1 == 1000 && this.playTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('With these, we \nwill be having fun for \nyears with everyone\nplaying these. Lets\ngame together soon.');
                this.playTime2 = this.playTime2 + 1;
            }
        }

        if (this.houseRepair == true && this.plumbing == true && this.electricity == true && this.repair == true){
            sanctuary = true;
            if (this.fixTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('We managed to fix\nup the house real good.\nAnd even got a repair\nservice going. A\nlot of progress.');
                this.fixTime1 = this.fixtime1 + 1;
            }
            else if (this.fixTime1 == 1000 && this.fixTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('This is becoming a\ngreat place for sad and\nand forgotten toys\ntoys to live. I\nhope theyll be happy.');
                this.fixTime2 = this.fixTime1 + 2;
            }
        }

        if (this.food == true && this.garden == true && this.tv == true && this.pool == true && this.game == true){
            sanctuary = true;
            if (this.thankTime1 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('The mansion is now\npossibly the best place\na toy can live. And\n its all thanks\nto you, buddy.');
                this.thankTime1 = this.thankTime1 + 1;
            }
            else if (this.thankTime1 == 1000 && this.thankTime2 < 1000){
                this.bubble.setAlpha(1);
              //this.speech.setText('This upgrades our\nstuffed toy production.\n I never understood\nwhy you kids are\ninto these things.')
                this.speech.setText('Feel free to come\nand play any time. Its\nan honor to be your\nteddy bear and best\nfriend!!!');
                this.thankTime2 = this.thankTime1 + 2;
            }
        }

        this.bank.setText('$'+money);

        if(this.keyR.isDown) {
            console.log('mini:'+this.mini+' fixed: '+this.fixed+' finished: '+this.finished);
        }

        if(this.keyF.isDown) {
            console.log(this.sewingCount);
        }

        

    }

}