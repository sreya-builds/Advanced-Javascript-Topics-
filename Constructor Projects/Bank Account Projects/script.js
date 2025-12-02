class BankAccount {
     constructor(name,balance){
        this.accountHolder = name;
        this.balance = balance;
     }

   deposit(amount){
    this.balance += amount;
    console.log(`${amount} deposited..`);
    console.log("Account Holder:",this.accountHolder);
    console.log(`New Balance: ${this.balance}`)
   }  
    
   withdraw(amount){
    this.balance -= amount;
    console.log(`${amount} withdrawn...`);
    console.log("Account Holder:",this.accountHolder);
    console.log(`New Balance: ${this.balance}`);
   }
}

newMem = new BankAccount("Ram Singh",4000);
newMem.deposit(2000);
newMem.withdraw(1000);

let holderE1 = document.getElementById("accountHolder");
let balanceE1 = document.getElementById("balance");
let amountInput = document.getElementById("amount");
let depositBtn= document.getElementById("deposit");
let withdrawBtn = document.getElementById("withdraw");

holderE1.textContent  = newMem.accountHolder;
balanceE1.textContent = newMem.balance;

depositBtn.addEventListener('click',function(){
    let amount = Number(amountInput.value);
    if(amount>0){
        newMem.deposit(amount);
        balanceE1.textContent = newMem.balance;   
     }
     amountInput.value = "";
})


withdrawBtn.addEventListener('click',function(){
    let amount = Number(amountInput.value);
    if(amount>0 && amount <= newMem.balance){
        newMem.withdraw(amount);
        balanceE1.textContent = newMem.balance;
    }
    amountInput.value = "";
})






