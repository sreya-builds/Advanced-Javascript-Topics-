class Kitaab{
    constructor(name,author,price,publisher){
        this.name = name;
        this.author = author;
        this.price = price;
        this.publisher = publisher;
    }

    pannaPalto(){}
    boomarkLagao(){}
    padhLo(){}
}
let newBook1 = new Kitaab("Moral Stories","Ruskin Bond",200,"Penguin");
let newBook2 = new Kitaab("Science","NCERT",300,"NCERT Publications");
let newBook3 = new Kitaab("Maths","R D Sharma",400,"Dhanpat Rai");
let newBook4 = new Kitaab("History","Arjun Dev",250,"NCERT Publications");

class Cafe{
    constructor(){
        this.menu = ["Coffee","Pasta","Pizza","Sandwich"];
        this.prices = 3000;
        this.services = "Dine-in";

}
 khanaPina(){}
 orderkaro(){}
}

let newCafe1 = new Cafe();
let newCafe2 = new Cafe();