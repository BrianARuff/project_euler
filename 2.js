let p1 = 1;
let p2 = 2;
let result = 2;
let iterationCount = 0;

for(let i = 3; i < 4000000; i = (p1 + p2)){
  p1 = p2;
  p2 = i;
  if(i % 2 === 0) {
    result += i;
  }
  iterationCount += 1;
}

console.log(result);
console.log(iterationCount);