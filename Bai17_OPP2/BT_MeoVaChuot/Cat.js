class Cat {
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

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    setSpeed(slow) {
        this.speed -= slow;
    }

    getSpeed() {
        return this.speed;
    }

    say(txt) {
        console.log("Meo Meo");
    }

    catch(Mouse) {
        if (this.speed > Mouse.speed) {
            console.log("Mèo Đã Bắt được chuột");
            return true;

        } else {
            console.log("Mèo Đã để chuột chạy mất");
            return false

        }
    }

    eat(Mouse) {
        if (Mouse.health > 0) {
            this.weight += Mouse.weight;
            Mouse.weight = 0
            Mouse.health = 0;
        } else {
            return "Chuột Đã chết Mèo Ném bỏ";
        }
    }
}
