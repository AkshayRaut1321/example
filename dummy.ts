import { Point } from './point'
let point = new Point(10, 20);
point.draw();


// var result;
// for(var i=0; i<10; i++){
//   result = result + i;
// }
// console.log('Loop ran 10 times and last value of i is : ' + i);

// enum Colors { Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Colors.Red;

// let message:string;
// message ='abc';
// let endsWithC = message.endsWith('c');
// // let startsWith = (message as string).startsWith('a');
// // console.log(typeof(endsWithC));

// var log = function(message){
//     console.log(message);
// }
// var logLambda = (message) => console.log(message);

// logLambda("Lambda called");

// let drawPoint = (point :{x:number, y:number}) =>{
//   //... draw a point from point.X and point.Y
// };
// drawPoint({ x:1, y:2});

// interface Point {
//   x:number,
//   y:number
// }
// let drawIPoint = (point : Point) =>{
//   //... draw a point from point.X and point.Y
// };
// drawIPoint({ x:1, y:2});

// interface CustomPoint {
//   x:number,
//   y:number,
//   draw : () => void
// };

// var firstPoint:CustomPoint;
// firstPoint = {x:1, y : 2, draw: () => {
//   //...
// }};

// class MyPoint {
//   x:number;
//   y:number;
//   draw() {

//   }
//   getDistance(anotherPoint : Point){

//   }
// }

// var newPoint:MyPoint;
// newPoint = new MyPoint();
// newPoint.x = 10;
// newPoint.y = 10;
// newPoint.draw();

// class MyNewPoint{
//   x:number;
//   y:number;

//   constructor(x:number, y:number){
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//    console.log('X:' + this.x + ', Y:' + this.y);
//   }
// }

// var myNewPoint = new MyNewPoint(10, 20);

// class MyNewPointOpt{
//   x:number;
//   y:number;

//   constructor(x?:number, y?:number){
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//    console.log('X:' + this.x + ', Y:' + this.y);
//   }
// }

// var myNewPointOpt = new MyNewPointOpt(10, 20);

// class MyNewPointAcc{
//   private x:number;
//   y:number;

//   constructor(x?:number, y?:number){
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//    console.log('X:' + this.x + ', Y:' + this.y);
//   }
// }

// var myNewPointAcc = new MyNewPointAcc(10, 20);

// class MyNewPointAccConst{
//   constructor(private x?:number, private y?:number){
//   }

//   draw() {
//    console.log('X:' + this.x + ', Y:' + this.y);
//   }
// }

// var myNewPointAccConst = new MyNewPointAccConst(10, 20);

// let newPointProps = new NewPointProps(10, 20);
// let x = newPointProps.X;
// newPointProps.X = 20;
// newPointProps.draw();
