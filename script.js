class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function distanceBtvPoints(p1, p2) {
  return Math.pow(
    (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y),
    0.5
  );
}

//  console.log(distanceBtvPoints(2, 4, 2, 4));

let point = new Point();

let points = [
  new Point(1, 3),
  new Point(2, 6),
  new Point(3, 5),
  new Point(2, 7),
  new Point(1, 6),
  new Point(10, 45),
  new Point(3, 34),
  new Point(4, 6),
  new Point(5, 6),
];

function min_dist() {
  let mindist = Infinity;
  let firstPoint = undefined;
  let secondPoint = undefined;


  for (let j = 0; j < points.length - 1; j++) {
    for (let i = j + 1; i < points.length; i++) {
      let newDist = distanceBtvPoints(points[j], points[i]);
        if(mindist > newDist){
            mindist = newDist;
            firstPoint = points[j];
            secondPoint = points[i];
        }   
      
    }
  }
  console.log(firstPoint, secondPoint);
  return mindist;

}


console.log(min_dist());