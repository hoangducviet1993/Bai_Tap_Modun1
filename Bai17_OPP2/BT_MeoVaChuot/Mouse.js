class Mouse{
    name;
    weight;
    speed;
    health

    constructor(name, weight, speed, health) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.health = health;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setWeight(weight){
        this.weight= weight;
    }
    getWeight() {
        return this.weight;
    }
    setSpeed(speed){
        this.speed= speed;
    }
    getSpeed(){
        return this.speed;
    }
    say(txt){
        console.log("Chít Chít");
    }
    die(){
        if (this.health===0){
            return "Chuột đã chết";
        }
    }
}