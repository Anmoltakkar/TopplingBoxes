const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var engine, world;
var box1,ground,box2;
var render;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,100,80,50);
    fill("white")
    ground = new Ground(200,390,400,20)



   /* var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1600,
          height: 700,
          wireframes: false
        }
      });
    Render.run(render);
    */
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
}