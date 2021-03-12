const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1,ground2,ground3,line;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,550,1200,10);
    ground2 = new Ground(475,500,265,10);
    ground3 = new Ground(890,300,200,10);
    block1 = new Block(370,490,30,40,rgb(102,204,255));
    block2 = new Block(405,490,30,40,rgb(102,204,255));
    block3 = new Block(440,490,30,40,rgb(102,204,255));
    block4 = new Block(475,490,30,40,rgb(102,204,255));
    block5 = new Block(510,490,30,40,rgb(102,204,255));
    block6 = new Block(545,490,30,40,rgb(102,204,255));
    block7 = new Block(580,490,30,40,rgb(102,204,255));
    block8 = new Block(405,450,30,40,"pink");
    block9 = new Block(440,450,30,40,"pink");
    block10 = new Block(475,450,30,40,"pink");
    block11 = new Block(510,450,30,40,"pink");
    block12 = new Block(545,450,30,40,"pink");
    block13 = new Block(440,410,30,40,"blue");
    block14 = new Block(475,410,30,40,"blue");
    block15 = new Block(510,410,30,40,"blue");
    block16 = new Block(475,370,30,40,"orange");
    block17 = new Block(820,290,30,40,rgb(102,204,255));
    block18 = new Block(855,290,30,40,rgb(102,204,255));
    block19 = new Block(890,290,30,40,rgb(102,204,255));
    block20 = new Block(925,290,30,40,rgb(102,204,255));
    block21 = new Block(960,290,30,40,rgb(102,204,255));
    block22 = new Block(855,250,30,40,"pink");
    block23 = new Block(890,250,30,40,"pink");
    block24 = new Block(925,250,30,40,"pink");
    block25 = new Block(890,210,30,40,"orange");
    paper = new Paper(200,300,10);
    line1= new Line(paper.body,{x:200,y:200});
}
function draw(){
    background(0);
    fill("white")
    textSize(20);
    text("Drag The Hexagonal Stone And Release It,To Launch It Towards The Blocks",220,50)
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    paper.display();
    line1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    line1.fly();
}
function keyPressed(){
    if(keyCode == 32){
        line1.attach(paper.body);
    }
}