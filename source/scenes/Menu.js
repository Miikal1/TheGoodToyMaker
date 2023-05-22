
class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload() {
        // load audio
        this.load.image('title', 'assets/title.png');
        this.load.image('start', 'assets/start.png');
        this.load.image('teddyFaceBig', 'assets/teddyFaceBig.png');
      }

    create(){
        
      this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'title').setOrigin(0,0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
             },
            fixedWidth: 0
        }
        
        this.choice = 0;

        var levelTwo = this.add.sprite(300, 400, 'start').setInteractive();

        levelTwo.on('pointerdown', function (pointer) {

          this.scene.start('levelTwo');

        }, this);

    }  

    update() {
     
 
    }  

}