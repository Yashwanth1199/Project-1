class Player{
    constructor(height,width,jumpHeight){
        this.height=height;
        this.width=width;
        this.jumpHeight=jumpHeight;
        this.standingstillImage=new Image();
        this.standingstillImage.src="Hen_Steady.png";
    }
}

const player_height=150;
const player_width=130;
const max_jump_height=350;

let player=null;
function initialize(){
    player=new Player(player_height,player_width,max_jump_height);
}

//loop the game
function gameLoop(){
    console.log("looping");
}
requestAnimationFrame(gameLoop);