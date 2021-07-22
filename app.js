function Robot(){

    var self = this;

    self.work = function () {
        console.log("I'm robot")
    }
}
function CoffeRobot(){
    Robot.call(this);
    var self = this;
    self.work = function () {
        console.log("I'm CoffeRobot - I make coffee");
    }
}
function RobotDancer(){
    Robot.call(this);
    var self = this;
    self.work = function () {
        console.log("I'm RobotDancer - I am dancing");
    }
}
function RobotCoocker(){

    var self = this;
    self.work = function () {
        console.log("I'm RobotCoocker - I cook");
    }
}





var robot = new Robot();
robot.work();
var coffeRobot = new CoffeRobot();
coffeRobot.work();
var robotDancer = new RobotDancer();
robotDancer.work();
var robotCoocker = new RobotCoocker();
robotCoocker.work();


let robots = [20];
robots[0] = robot;
robots[1] = coffeRobot;
robots[2] = robotDancer;
robots[3] = robotCoocker;


for (let i = 0; i <robots.length ; i++) {
    robots[i].work();
}


