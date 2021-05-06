var gameState; // keypart of the structure to create the different 'levels' throughout the story

// IMAGE VARIABLES
var gif_loadDoor;
var img_loadPopUp0;
var img_loadPopUp1;
var img_loadPopUp2;
var img_loadPopUp4;
var img_loadPopUp5;
var img_loadPopUpX;
var img_banksHateHim;
var img_ronaldoFace;
var img_halandFace;
var img_menu;

var img_football0;
var img_football1;
var img_football2;
var img_football3;
var img_football3_0;
var img_football4;
var img_football5;
var img_football6;
var img_football7;
var img_football8;
var img_football9;
var img_football10;
var img_football11;
var img_football12;
var img_football13;
var img_redCard;
var img_penalty;

var img_pint;
var img_half;
var img_guinness;
var img_whiteWine;
var img_redWine;
var img_cocktail;
var img_whiskey;
var img_lemonade;
var img_coke;
var img_mcCoys0;
var img_mcCoys1;
var img_mcCoys2;

var img_spareChange;
var img_fiver;
var img_mask0;
var img_mask1;
var img_lighter;
var gif_flame;
var img_loyaltyCard;
var img_santanderReceipt;
var img_parkingTicket;
var imgcrackedPhone;
var img_chalk;
var gif_ronnie;
var vid_ronnie;
var img_cocoaButter;

var img_yamYam;

// LOCATED ITEM VARIABLES
var spareChange_found;
var fiver_found;
var mask0_found;
var lighter_found;
var loyaltyCard_found;
var santanderReceipt_found;
var parkingTicket_found;
var crackedPhone_found;
var airPod0_found;
var airPod1_found;
var chalk_found;
var cocoaButter_found;

// ACTION VARIABLES;

var optButtons_pressed;

// story1

var justPitch_action;
var messi_action;
var penalty_scored; // whether the goal was scored 
var saved_or_missed;
var virus_action;

// story2
var spareChange_action;
var fiver_action;
var mask0_action; // to deal with mask images
var chalk_action; // to deal with playing ronnie gif
var isRonnie; // to click back from the ronnie gif to story2_2
var lighter_action;
var parkingTicket_action;

function preload()
{
    // assets used before story splits 
    img_redTarget = loadImage('assets/redTarget.png')
    gif_loadDoor = loadImage('assets/door.gif');
    img_loadPopUp0 = loadImage('assets/popUp0.jpg');
    img_loadPopUp1 = loadImage('assets/popUp1.jpg');
    img_loadPopUp2 = loadImage('assets/popUp2.jpg');
    img_loadPopUp3 = loadImage('assets/popUp3.jpg');
    img_loadPopUp4 = loadImage('assets/popUp4.jpg');
    img_loadPopUp5 = loadImage('assets/popUp5.jpg');
    img_loadPopUp6 = loadImage('assets/popUp6.jpg');
    img_loadPopUpX = loadImage('assets/popUpX.png');
    img_banksHateHim = loadImage('assets/banksHateHim.jpg')
    img_ronaldoFace = loadImage('assets/ronaldoFace.png')
    img_halandFace = loadImage('assets/halandFace.png')
    
    // assets used in story1_0
    img_football0 = loadImage('forTheGame_assets/football0.jpg');
    img_football1 = loadImage('forTheGame_assets/football1.jpg');
    img_football2 = loadImage('forTheGame_assets/football2.jpg');
    img_football3 = loadImage('forTheGame_assets/football3.jpg');
    img_football3_0 = loadImage('forTheGame_assets/football3_0.jpg');
    img_football4 = loadImage('forTheGame_assets/football4.jpg');   
    img_football5 = loadImage('forTheGame_assets/football5.jpg');
    img_football6 = loadImage('forTheGame_assets/football6.jpg');
    img_football7 = loadImage('forTheGame_assets/football7.jpg');
    img_football8 = loadImage('forTheGame_assets/football8.jpg');
    img_football9 = loadImage('forTheGame_assets/football9.jpg');
    img_football10 = loadImage('forTheGame_assets/football10.jpg');  
    img_football11 = loadImage('forTheGame_assets/football11.jpg');
    img_football13 = loadImage('forTheGame_assets/football13.jpg');
    img_redCard = loadImage('forTheGame_assets/redCard.jpg');
    img_penalty = loadImage('forTheGame_assets/penalty.jpg');
    
    gif_justPitch = loadImage('forTheGame_assets/justPitch.gif');
    gif_messi = loadImage('forTheGame_assets/messi.gif');
    
    //assets used in story2_0
    img_pint = loadImage('forAFew_assets/pint.jpg');
    img_half = loadImage('forAFew_assets/half.jpg');
    img_guinness = loadImage('forAFew_assets/guinness.jpg');
    img_whiteWine = loadImage('forAFew_assets/whiteWine.jpg');
    img_redWine = loadImage('forAFew_assets/redWine.jpg');
    img_cocktail = loadImage('forAFew_assets/cocktail.jpg');
    img_whiskey = loadImage('forAFew_assets/whiskey.jpg');
    img_lemonade = loadImage('forAFew_assets/lemonade.jpg');
    img_coke = loadImage('forAFew_assets/coke.jpg');
    img_mcCoys0 = loadImage('forAFew_assets/mcCoys0.jpg');
    img_mcCoys1 = loadImage('forAFew_assets/mcCoys1.jpg');
    img_mcCoys2 = loadImage('forAFew_assets/mcCoys2.jpg');
    
    // assets used in story2_1
    img_menu = loadImage('forAFew_assets/menu.png');
    
    // assets used in story2_2
    img_spareChange = loadImage('forAFew_assets/spareChange.jpg');
    img_fiver = loadImage('forAFew_assets/fiver.jpg');
    img_mask0 = loadImage('forAFew_assets/mask0.png');
    img_mask1 = loadImage('forAFew_assets/mask1.jpg');
    img_lighter = loadImage('forAFew_assets/lighter.png');
    gif_flame = loadImage('forAFew_assets/flame.gif');
    img_loyaltyCard = loadImage('forAFew_assets/loyaltyCard.png');
    img_santanderReceipt = loadImage('forAFew_assets/santanderReceipt.png');
    img_parkingTicket = loadImage('forAFew_assets/parkingTicket.png');
    img_crackedPhone = loadImage('forAFew_assets/crackedPhone.jpg');
    img_airPod0 = loadImage('forAFew_assets/airPod0.png');
    img_airPod1 = loadImage('forAFew_assets/airPod1.png');
    img_chalk = loadImage('forAFew_assets/chalk0.png');
    gif_ronnie = loadImage('forAFew_assets/ronnie.gif')
    // vid_ronnie = createVideo(['assets/ronnie.mp4'], vidLoad);
    img_cocoaButter = loadImage('forAFew_assets/cocoaButter.png');
    
    img_yamYam = loadImage('forAFew_assets/yamYam.jpg');
}

// SETUP SETUP SETUP SETUP
// -----------------------

function setup()
{
    createCanvas(1440, 800);
    
    gameState = 0;

    // initialise boolean before items have been found;
    items_found();
    
    // INITIALISE BOOLEAN TO DETERMINE WHETHER ACTION IS PERFORMED
    
    // story1
    justPitch_action = false;
    messi_action = false;
    penalty_scored = random(1, 100);
    console.log(penalty_scored);
    saved_or_missed = false;
    virus_action = false;
    
    // story2
    spareChange_action = false;
    fiver_action = false;
    mask0_action = false;
    chalk_action = false;
    isRonnie = false;
    lighter_action = false;
    parkingTicket_action = false;
}

// DRAW DRAW DRAW DRAW DRAW 
// ------------------------

function items_found()
{
    spareChange_found = false;
    fiver_found = false;
    mask0_found = false;
    mask1_found = false;
    lighter_found = false;
    loyaltyCard_found = false;
    santanderReceipt_found = false;
    parkingTicket_found = false;
    crackedPhone_found = false;
    airPod0_found = false;
    airPod1_found = false;
    chalk_found = false;
    cocoaButter_found = false;
}

function draw()
{   
    if(gameState == 0)
    {
        gameStart(); // until you click the screen    
    }
    if(gameState == 1)
    {
        choice1(); // for the game or for a few
    }
    if(gameState == 2)
    {
        story1_0(); // call the function for the 1st storyline
    }
    if(gameState == 4)
    {
        story1_1(); // red card given
    }
    if(gameState == 6)
    {
        story1_2(); // taking the penalty shot
    }
    if(gameState == 8)
    {
        story1_3(); // if the penalty shot is missed or saved        
    }
    if(gameState == 10)
    {
        story1_4(); // if the penalty shot is scored
    }
    if(gameState == 12)
    {
        story1_5(); // shot on goal
    }
    if(gameState == 14)
    {
        story1_6(); // take the shot in the top right corner
    }
    if(gameState == 3)
    {
        story2_0(); // call the function for the 2nd storyline
    }
    if(gameState == 5)
    {
        story2_1(); // call the next stage of story 2
    }
    if(gameState == 7)
    {
        story2_2(); // looking in your pocket
    }
    if(gameState == 9)
    {
        story2_3(); // once payed for the drink 
    }
}

// FUNCTIONS TO INCREMENT THE GAME STATE
// -------------------------------------

function increaseGameStateOnce()
{
    gameState += 1; 
    console.log(gameState);
}

function increaseGameStateTwice()
{
    gameState += 2;
    console.log(gameState);
}

function increaseGameStateFour()
{
    gameState += 4;
    console.log(gameState);
}

// FUNCTIONS FOR BOTH OPTIONS OF GAME DIRECTION
// --------------------------------------------

function forTheGame()
{   
    let opt1 = "here for the game";

    fill(0, 0, 200);
    stroke(255);
    rect(width/2.7 -150, height/2 -25, 300, 35, 5);

    textSize(20);
    textFont('Georgia');
    textAlign(CENTER);
    fill(255);
    text(opt1, width/2.7, height/2);
}
function forAFew()
{
    let opt2 = "here for a few";

    fill(0, 0, 200);
    stroke(255);
    rect(width/1.6 -150, height/2 -25, 300, 35, 5);

    textSize(20);
    textFont('Georgia');
    textAlign(CENTER);
    fill(255);
    text(opt2, width/1.6, height/2);
}

// FUNCTIONS FOR EACH OF THE DIFFERENT GAME STATES
// ------------------------------------------------

function gameStart()
{
    background(0);    
    image(gif_loadDoor, 0, 0, width, height);
}

function choice1()
{
    background(5);
    
    // sidebars
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(20, 20, width/5, height - 40);
    rect(width - (width/5 + 20), 20, width/5, height - 40);
    pop();
    
    // pop up ads 
    image(img_loadPopUp0, 20, 20, width/5, height - 40);
    image(img_loadPopUp5,  width - width/5 - 20, 20, width/5, height - 40);
    
    // call functions to draw buttons
    forTheGame(); 
    forAFew();
}

function story1_0()
{
    image(img_football0, 0, 0, width, height); // background image
    
    //images that are displayed depending on whether the mouse is over that specific position
    
    //leading up to the red card & penalty
    if(mouseX > width/1.5 && mouseX < width/1.5 + 200 && 
       mouseY > height/4 && mouseY < height/4 + 150)
    {
        image(img_football1, width/1.5, height/4, 200, 150);
        
        if(mouseX > width/1.5 && mouseX < width/1.5 + 50 &&
           mouseY > height/2.75 && mouseY < height/2.75 + 50)
        {
            image(img_football8, width/1.5, height/2.75, 50, 50);
            push();
            textSize(20);
            fill(200, 0, 0);
            noStroke();
            text('force the tackle', width/1.3, height/2.3)
        }
    }
    
    //sliding tackle image + messi
    if(mouseX > width/1.8 && mouseX < width/1.8 + 600 && 
       mouseY > height/1.6 && mouseY < height/1.6 + 290)
    {
        image(img_football2, width/1.8, height/1.6, 600, 290);
        image(img_football6, width/1.65, height/1.38, 70, 50);
        
        if(mouseX > width/1.65 && mouseX < width/1.65 + 70 && 
        mouseY > height/1.38 && mouseY < height/1.38 + 50)
        {   
            if(messi_action == true);
            {
                image(gif_messi, width/1.8, height/1.6, 600, 290);
            }
        }      
    }
    
    //marcus rashford one
    if(mouseX > width/8 && mouseX < width/8 + 600 && 
       mouseY > height/30 && mouseY < height/30 + 300)
    {
        image(img_football3, width/8, height/30, 600, 300);
        if(mouseX > width/7.5 && mouseX < width/7.5 + 150 && mouseY > height/20 && mouseY < height/20 + 250)
        {    
            image(img_football3_0, width/7.5, height/20, 150, 250);
            push();
            textSize(20);
            fill(200, 0, 0);
            noStroke();
            text('make the run', width/8, height/10);
        }
    }
    
    
    // just pitch
    if(mouseX > width/3 && mouseX < width/3 + 300 && 
       mouseY > height/1.85 && mouseY < height/1.85 + 300)
    {
        image(img_football5, width/3, height/1.85, 300, 300);
    }
    if(justPitch_action == true)
    {
        image(gif_justPitch, width/3, height/1.85, 300, 300);
    }
}

function story1_1()
{
    image(img_redCard, 0, 0, width, height);
}

function story1_2()
{
    image(img_penalty, 0, 0, width, height);
    image(img_redTarget, mouseX - 35, mouseY - 35, 70, 70);
}

function story1_3()
{
    background(5);
    
    // sidebars
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(20, 20, width/5, height - 40);
    rect(width - (width/5 + 20), 20, width/5, height - 40);
    pop();
    
    // pop up ads 
    image(img_banksHateHim, 20, 20, width/5, height - 40);
    image(img_loadPopUp6, width - width/5 - 20, 20, width/5, height - 40);
    
    textSize(60);
    text('GAME OVER', 0, height/3, width, height);
    
    textSize(20);
    if(saved_or_missed == true)
    {
        text('you missed, unlucky', 0, height/4, width, height);
    }
    else
    {
        text('saved by the keeper', 0, height/4, width, height);
    }
    
    push();
    fill(0, 0, 200);
    stroke(255);
    rect(width/2 -50, height/2 -25, 100, 35, 5);

    textSize(20);
    fill(255);
    textFont('Georgia');
    text('okay', width/2, height/2);
    pop();
}

function story1_4()
{
    background(5);
    
    // sidebars
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(20, 20, width/5, height - 40);
    rect(width - (width/5 + 20), 20, width/5, height - 40);
    pop();
    
    // pop up ads 
    image(img_loadPopUp1, 20, 20, width/5, height - 40);
    rotate(-PI/50);
    image(img_halandFace, 50, 160, 220, 180);
    rotate(PI/50);
    image(img_loadPopUp6, width - width/5 - 20, 20, width/5, height - 40);
    textSize(60);
    text('GOAL SCORED', 0, height/3, width, height);
       
    push();
    fill(0, 0, 200);
    stroke(255);
    rect(width/2 -50, height/2 -25, 100, 35, 5);

    textSize(20);
    fill(255);
    textFont('Georgia');
    text('okay', width/2, height/2);
    pop();
    
    if(virus_action == false)
    {
        push();
        background(0, 200);
        imageMode(CENTER);
        image(img_loadPopUp3, width/2, height/2, width/1.5, height/1.5);
        image(img_loadPopUpX, width/1.25, height/4.5, 50, 50);
        pop();
    }
}

function story1_5()
{
    image(img_football13, 0, 0, width, height);
}

function story1_6()
{
    image(img_football4, 0, 0, width, height);
    image(img_redTarget, mouseX - 35, mouseY - 35, 70, 70);
}

function story2_0()
{
    background(255);
    
    image(img_mcCoys0, width/1.8, height/10, 200, 200);
    image(img_mcCoys1, width/1.8, height/10, 200, 200);
    image(img_mcCoys2, width/1.8, height/10, 200, 200);
    
    image(img_pint, width/20, height/7, 200, 200);
    image(img_half, width/20, height/7, 200, 200);
    
    image(img_redWine, width/2, height/1.4, 200, 200);
    image(img_whiteWine, width/2, height/1.4, 200, 200);
    
    image(img_guinness, width/5, height/5, 200, 200);
    
    image(img_cocktail, width/1.5, height/1.5, 600, 200); 
    
    image(img_whiskey, width/4, height/2, 200, 200);
    
    image(img_lemonade, width/1.2, height/5, 200, 200);
    
    image(img_coke, width/17, height/2, 200, 400);
    
    if(mouseX > width/1.8 && mouseX < width/1.8 + 200 && 
       mouseY > height/10 && mouseY < height/10 + 200)
    {
        return true;
    }
    
    if(mouseX > width/20 && mouseX < width/20 + 200 && 
       mouseY > height/7 && mouseY < height/7 + 200)
    {
        return true;
    }
    
    if(mouseX > width/2 && mouseX < width/2 + 200 && 
       mouseY > height/1.4 && mouseY < height/1.4 + 200)
    {
        return true;
    }
    
    if(mouseX > width/5 && mouseX < width/5 + 200 && 
       mouseY > height/5 && mouseY < height/5 + 200)
    {
        return true;
    }
     
    if(mouseX > width/1.5 && mouseX < width/1.5 + 600 && 
       mouseY > height/1.5 && mouseY < height/1.5 + 200)
    {
        return true;
    }
    
    if(mouseX > width/4 && mouseX < width/4 + 200 && 
       mouseY > height/2 && mouseY < height/2 + 200)
    {
        return true;
    }
    
    if(mouseX > width/1.2 && mouseX < width/1.2 + 200 && 
       mouseY > height/5 && mouseY < height/5 + 200)
    {   
        return true;
    }
    

    if(mouseX > width/17 && mouseX < width/17 + 200 && 
       mouseY > height/2 && mouseY < height/2 + 400)
    {    
        return true;
    }
    else
    {
        return false;
    }
}

function story2_1()
{
    background(5);
    
    // sidebars
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(20, 20, width/5, height - 40);
    rect(width - (width/5 + 20), 20, width/5, height - 40);
    pop();
    
    // pop up ads 
    image(img_loadPopUp1, 20, 20, width/5, height - 40);
    image(img_ronaldoFace, 5, 130, 350, 250);
    image(img_menu,  width - width/5 - 20, 20, width/5, height - 40);
    
    textAlign(CENTER);
    textSize(40);
    fill(200, 0, 0);
    noStroke();
    text('its cash only mate', width/2, height/3)
      
    pop();
    fill(0, 0, 200);
    stroke(255);
    rect(width/2 -50, height/2 -25, 100, 35, 5);
    textSize(20);
    fill(255);
    textFont('Georgia');
    text('okay', width/2, height/2);
    push();
}

function story2_2()
{   
    background(0);
    
    //if statements to determine whether the item is found and then if the image should be displayed
    
    if(mouseX > width/1.6 && mouseX < width/1.6 + 400 && 
       mouseY > height/2 && mouseY < height/2 + 200)
    {    
        spareChange_found = true;
    }
    if(spareChange_found == true)
    {    
        image(img_spareChange, width/1.6, height/2, 400, 200);
        textSize(50);
    }
    if(spareChange_found == true && spareChange_action == true)
    {
        fill(200, 0, 0);
        noStroke();
        textAlign(CENTER);
        text('here you go mate', width/1.6 + 200, height/2 + 100);
    }
    
    //draw the five pound note
     if(mouseX > width/2.2 && mouseX < width/2.2 + 420 && 
       mouseY > height/20 && mouseY < height/20 + 230)
    {    
        fiver_found = true;
    }
    if(fiver_found == true)
    {    
        image(img_fiver, width/2.2, height/20, 420, 230);
    }
    if(fiver_found == true && fiver_action == true)
    {
        textSize(50);
        fill(200, 0, 0);
        noStroke();
        textAlign(CENTER);
        text('keep the change', width/2.2 + 210, height/20 + 115);
    }
    
    
    // to make the mask images appear and change whe you click on them 
    if(mouseX > width/50 && mouseX < width/50 + 400 && 
       mouseY > height/8 && mouseY < height/8 + 200)
    {    
        mask0_found = true;
    }
    if(mask0_found == true && mask0_action == false)
    {
        image(img_mask0, width/50, height/13, 400, 400);
    }
    if(mask0_found == true && mask0_action == true)
    {
        image(img_mask1, width/50, height/5, 400, 220);
    }
    
    
    // to draw the flame and the lighter
    if(mouseX > width/2 && mouseX < width/2 + 120 && 
       mouseY > height/1.7 && mouseY < height/1.7 + 230)
    {    
        lighter_found = true;
    }
    if(lighter_found == true)
    {    
       image(img_lighter, width/2, height/1.7, 120, 240);
    }
    if(lighter_found == true && lighter_action == true)
    {
        image(gif_flame, width/2.1, height/2.6, 100, 200);
        image(img_lighter, width/2, height/1.7, 120, 240);
    }
    
    
    if(mouseX > width/1.3 && mouseX < width/1.3 + 260 && 
       mouseY > height/1.3 && mouseY < height/1.3 + 180)
    {    
        loyaltyCard_found = true;
    }
    if(loyaltyCard_found == true)
    {    
       image(img_loyaltyCard, width/1.3, height/1.3, 260, 180);
    }
    
    
    if(mouseX > width/1.3 && mouseX < width/1.3 + 200 && 
       mouseY > height/30 && mouseY < height/30 + 340)
    {    
        santanderReceipt_found = true;
    }
    if(santanderReceipt_found == true)
    {    
       image(img_santanderReceipt, width/1.3, height/30, 200, 340);
    }
    
    
    if(mouseX > 0 && mouseX < 0 + 360 && 
       mouseY > height/2 && mouseY < height/2 + 300)
    {    
        crackedPhone_found = true;
    }
    if(crackedPhone_found == true)
    {    
       image(img_crackedPhone, -20, height/2, 460, 400);
    }
        
    
    if(mouseX > 0 && mouseX < 0 + 150 && 
       mouseY > 0 && mouseY < 0 + 150)
    {    
        airPod0_found = true;
    }
    if(airPod0_found == true)
    {    
       image(img_airPod0, 0, 0, 150, 150);
    }
    
    if(mouseX > width/1.7 && mouseX < width/1.7 + 150 && 
       mouseY > height/3 && mouseY < height/3 + 150)
    {    
        airPod1_found = true;
    }
    if(airPod1_found == true)
    {    
       image(img_airPod1, width/1.7, height/3, 150, 150);
    }
    
    
    if(mouseX > width/3.5 && mouseX < width/3.5 + 250 && 
       mouseY > 0 && mouseY < 0 + 250)
    {    
        cocoaButter_found = true;
    }
    if(cocoaButter_found == true)
    {    
       image(img_cocoaButter, width/3.5, 0, 250, 250);
    }
    
    
    // to draw chalk and to play gif from action
    if(mouseX > width/3.5 && mouseX < width/3.5 + 150 && 
       mouseY > height/1.3 && mouseY < height/1.3 + 150)
    {    
        chalk_found = true;
    }
    if(chalk_found == true && chalk_action == false)
    {    
       image(img_chalk, width/3.5, height/1.3, 150, 150);
    }
    if(chalk_found == true && chalk_action == true)
    {    
        image(gif_ronnie, 0, 0, width, height);
        isRonnie = true;
    }
    
    
    // switch from the parking ticket and the pop up ad
    if(mouseX > width/3 && mouseX < width/3 + 150 && 
       mouseY > height/3 && mouseY < height/3 + 250)
    {    
        parkingTicket_found = true;
    }
    if(parkingTicket_found == true && parkingTicket_action == false &&
       isRonnie == false)
    {    
       image(img_parkingTicket, width/3, height/3, 150, 250);
    }
    if(parkingTicket_found == true && parkingTicket_action == true)
    {
        image(img_parkingTicket, width/3, height/3, 150, 250);
        background(0, 200);
        image(img_loadPopUp4, width/2 - 500, height/2 - 300, 1000, 700);
    }
}

function story2_3()
{
    image(img_yamYam, 0, 0, width, height);
}
    
function optButtons_clicked()
{
    if(gameState == 1)
    {    
        if(mouseX > width/2.7 - 150 && mouseX < width/2.7 + 150 && 
           mouseY > height/2 - 35 && mouseY < height/2 + 15)
        {
            increaseGameStateOnce();
        }
        if(mouseX > width/1.6 - 150 && mouseX < width/1.6 + 150 && 
           mouseY > height/2 - 35 && mouseY < height/2 + 15)
        {
            increaseGameStateTwice();
        }
    }
    
    if(gameState == 5)
    {
        if(mouseX > width/2 - 200 && mouseX < width/2 + 200 && 
           mouseY > height/2 - 35 && mouseY < height/2 + 15)
        {
            increaseGameStateTwice();
        }
    }
    
    if(gameState == 8 || gameState == 10)
    {
        if(mouseX > width/2 - 200 && mouseX < width/2 + 200 && 
           mouseY > height/2 - 35 && mouseY < height/2 + 15)
        {
            gameState = 0;
        }
    }
    
    if(gameState == 10)
    {
        if(mouseX > width/1.25 - 25 && mouseX < width/1.25 + 25 &&
           mouseY > height/4.5 - 25 && mouseY < height/4.5 + 25)
        {
            virus_action = true;
        }
    }
}

function penaltyShot_clicked()
{
    if(mouseX > width/8 && mouseX < width/8 + 950 &&
       mouseY > height/11 && mouseY < height/11 + 250)
    {
        if(penalty_scored => 30)// random value so that there is a 70% chance of scoring if the shot is on target 
        {
            increaseGameStateFour();
        }
        else
        {
            increaseGameStateTwice();
        }
    }
    else
    {
        increaseGameStateTwice();
        saved_or_missed = true;
    }
}

function story1_0_objects_clicked()
{
    if(mouseX > width/3 && mouseX < width/3 + 300 && 
       mouseY > height/1.85 && mouseY < height/1.85 + 300)
    {
        if(justPitch_action == false)
        {
            justPitch_action = true;
        }
        else
        {
            justPitch_action = false;
        }
    }
    
    // messimessimessimesii
    if(mouseX > width/1.65 && mouseX < width/1.65 + 70 && 
        mouseY > height/1.38 && mouseY < height/1.38 + 50)
    {
        if(messi_action == false && story1_0_clicked == true)
        {
            messi_action = true;
        }
        else
        {
            messi_action = false;
        }
    }
  
    if(mouseX > width/1.5 && mouseX < width/1.5 + 50 &&
       mouseY > height/2.75 && mouseY < height/2.75 + 50)
    {
        increaseGameStateTwice();
    }
    
    if(mouseX > width/7.5 && mouseX < width/7.5 + 150 && 
       mouseY > height/20 && mouseY < height/20 + 250)
    {
        gameState += 10; 
    }
}

function story2_objects_clicked()
{
    // to pay with change
    if(mouseX > width/1.6 && mouseX < width/1.6 + 400 && 
       mouseY > height/2 && mouseY < height/2 + 200)
    {
        if(spareChange_action == false)
        {    
            spareChange_action = true;
        }
        else
        {
            increaseGameStateTwice(); // go to the next stage once payed
        }
    }
    
    // to pay with a note
    if(mouseX > width/2.2 && mouseX < width/2.2 + 420 && 
       mouseY > height/20 && mouseY < height/20 + 230)
    {
        if(fiver_action == false)
        {    
            fiver_action = true;
        }
        else
        {
            increaseGameStateTwice(); // go to the next stage once payed
        }
    }
    
    // to change the mask images
    if(mouseX > width/50 && mouseX < width/50 + 400 && 
       mouseY > height/6 && mouseY < height/6 + 250)
    {
        if(mask0_action == false)
        {    
            mask0_action = true;
        }
        else
        {
            mask0_action = false;
        }
    }
    
    // to turn the lighter on    
    if(mouseX > width/2 && mouseX < width/2 + 120 && 
       mouseY > height/1.7 && mouseY < height/1.7 + 230)
    {
        if(lighter_action == false)
        {    
            lighter_action = true;
        }
        else
        {
            lighter_action = false;
        }
        console.log(lighter_action);
    }
    
    // to load the pop up ad from the parking ticket
    if(mouseX > width/3 && mouseX < width/3 + 150 && 
       mouseY > height/3 && mouseY < height/3 + 250)
    {
        if(parkingTicket_action == false)
        {    
            parkingTicket_action = true;
        }
    }
    if(mouseX > 1065 && mouseX < 1110 && mouseY > 155 && mouseY < 205)
    {
        parkingTicket_action = false;
    }
    console.log(parkingTicket_action);
    
    // to play the ronnie gif    
    if(mouseX > width/3.5 && mouseX < width/3.5 + 150 && 
       mouseY > height/1.3 && mouseY < height/1.3 + 150)
    {
        if(chalk_action == false)
        {
            chalk_action = true;
            console.log(chalk_action);
        }
    }
    if(chalk_action == true && isRonnie == true)
    {
        chalk_action = false;
        isRonnie = false;
        console.log(chalk_action);
    }
}
// MOUSE OR KEY PRESSED FUNCTIONS
// ------------------------------

function mousePressed()
{
    if(gameState == 0)
    {
        increaseGameStateOnce();
    }
    else if(gameState == 1)
    {
        optButtons_clicked();
    }
    else if(gameState == 2)
    {
        story1_0_objects_clicked();
    }
    else if(gameState == 4)
    {
        increaseGameStateTwice();
    }
    else if(gameState == 6)
    {
        penaltyShot_clicked();
    }
    else if(gameState == 8 || gameState == 10)
    {
        optButtons_clicked();
    }
    else if(gameState == 12)
    {   
            increaseGameStateTwice();
    }
    else if(gameState == 14)
    {   
        if(mouseX < width/2 && mouseY > 20)
        {    
            gameState -= 4; // shot scored
        }
        else
        {
            saved_or_missed = true;
            gameState -= 6; // shot missed
        }
    }
    else if(gameState == 3 && story2_0() == true)
    {
        increaseGameStateTwice();
    }
    else if(gameState == 5)
    {
        optButtons_clicked()
    }
    else if(gameState == 7)
    {
        story2_objects_clicked();
    }   
    else if(gameState == 9)
    {
        gameState = 0;
        items_found();
    }
}