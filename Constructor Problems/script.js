//question1 
class newStudent {
    constructor(name,age,course,marks){
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }
    display(){
        console.log("Student Name:", this.name);
        console.log("Age:",this.age);
        console.log("Course:",this.course);
        console.log("Marks:",this.marks);        
    }

}
newStu = new newStudent("John Doe", 20, "Computer Science", 85);
newStu2 = new newStudent("Jane Smith", 22, "Mathematics", 90);
newStu.display();
newStu2.display();

//question2
class newCar{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;

    }
    accelerate(amount){
      this.speed += amount;
      console.log(`${this.brand} accelerated by ${amount} km/h`);
      console.log(`Current Speed:${this.speed}km/h`);
      
      
    }
    brake(amount){
        this.speed -= amount;
        console.log(`${this.brand} slowed down bt ${amount} km/h`);
        console.log(`Current Speed:${this.speed}km/h`);
    }
}
newGaddi = new newCar("Maruti Suzuki",50);
newGaddi.accelerate(60);
newGaddi.brake(30);

//question 3

class newDress{
    constructor(product,price,discountPercent){
        this.product = product;
        this.price = price;
        this.discountPercent = discountPercent;

}
  priceDiscount(){
    var discountAmount = (this.price * this.discountPercent)/100;
    var finalPrice = this.price-discountAmount;
    console.log(`Product: ${this.product}`);
    console.log(`Original Price: ${this.price}`);
     console.log(`Discount: ${this.discountPercent}%`);
    console.log(`You save: ${discountAmount}`);
    console.log(`Final Price: ${finalPrice}`);

  }
}
newCloth = new newDress("Jumpsuit",5000,30);
newCloth.priceDiscount();
