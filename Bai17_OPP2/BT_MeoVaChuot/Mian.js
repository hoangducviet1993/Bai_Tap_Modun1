let cat =new Cat("Tôm",25,100,100);
let rat= new Mouse("Rat",3,75,10);
console.log(cat.name);
console.log(cat.weight);
console.log(cat.speed);
console.log(rat.name);
console.log(rat.weight);
console.log(rat.health);
console.log(rat.speed);
if (cat.catch(rat) === true){
    cat.eat(rat);
    cat.setSpeed(rat.weight);
}
console.log(cat.name);
console.log(cat.weight);
console.log(cat.getSpeed());
console.log(rat.weight);
console.log(rat.die());