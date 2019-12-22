/* 
EDVIN AGINGER WIE19S
*/ 

// sätt upp variablar som behövs globalt 
let prodName;
let prodPrice;
let timer;
const budgetContainer = document.querySelector("#budgetNum");
const options = document.querySelector("#options");
const income = document.querySelector(".income");
const cost = document.querySelector(".cost");
const button = document.querySelector(".btn");
let difference;
let diff;
button.addEventListener("click", calcItems);
let budget = 100;

// Skicka ut hur mycket du har som budget
budgetContainer.append(budget);


// Animerar uppräkning och nedräkning av budget
function animateValue(id, start, end, duration) {

    // Hämtar elementet som är en ID
    let obj = document.getElementById(id);
    // checkar början och slut (start & end)
    let range = end - start;

    // inte under 50ms för det är för fort
    let minTimer = 50;

    // Räknar ut hur många steg beroende på hur stort avståndet mellan talen är.
    let stepTime = Math.abs(Math.floor(duration / range));

    // En checker som ser till att det aldrig går under 50ms
    stepTime = Math.max(stepTime, minTimer);
    
    // Räknar ut tiden för animationen
    // om duration = 1000 och tiden är 12:00, så är det 1000ms + 12:00 = endTime
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;
  
    function run() {
        let now = new Date().getTime();
        let remaining = Math.max((endTime - now) / duration, 0);
        let value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}


// Funktionen som kallas på när knappen trycks ned
function calcItems() {
    prodNameDiv = document.querySelector("#name");
    prodPriceDiv = document.querySelector("#price");
    prodName = prodNameDiv.value;
    prodPrice = prodPriceDiv.value;
    let optionValue = options.options[options.selectedIndex].value;

        // --Om det är PLUS--
    if (optionValue === "+") {

        // om värdet är 0 så skriv inget
        if (prodPrice == 0) {
            console.log("Price not defined");
            prodPriceDiv.classList.add("input-error");

            if (prodName == "") {
                prodNameDiv.classList.add("input-error");
            } else {
                prodNameDiv.classList.remove("input-error");
            }
            return;
        } else {
            console.log("Price DEFINED");
            prodPriceDiv.classList.remove("input-error"); 
        }
        
        // om inget är skrivet
        if (prodName == "") {
            console.log("Name is not defined");
            prodNameDiv.classList.add("input-error");
            return;

        // om något är skrivet
        } else {
            console.log("Name DEFINED");
            prodNameDiv.classList.remove("input-error");
            
        }

        // skapa div som värdet ska appendas in inuti
        const incomeDiv = document.createElement("div");
        incomeDiv.className = "income-div";
        incomeDiv.innerHTML = 
        prodName + " " + prodPrice;

        // append div till parent
        income.append(incomeDiv);

        // konvert till number och sätt ihop kostnad/inkomst + budgeten
        prodPriceConv = Number(prodPrice);
        let newBudgetConv = budget + prodPriceConv;
        newBudget = Number(newBudgetConv);
        budget = newBudget;
        difference = budget - prodPrice;
        diff = Number(difference);
        // Valde att inte använda difference då problem uppstod 
        // då man tog - hann inte riktigt lösa det.
        animateValue("budgetNum", 0, budget, 800);
        console.log("budget: " + budget);
        console.log("difference: " + diff);
        
        // --Om det är minus--
    } else {
        // Om värdet är 0 så skriv inget
        if (prodPrice == 0) {
            console.log("Price not defined");
            prodPriceDiv.classList.add("input-error");

            if (prodName == "") {
                prodNameDiv.classList.add("input-error");
            } else {
                prodNameDiv.classList.remove("input-error");
            }
            
            return;

        // om värdet är > 0
        }else {
            console.log("Price DEFINED");
            prodPriceDiv.classList.remove("input-error");
        }
        // Om inget är skrivet
        if (prodName == "") {
            console.log("Name is not defined");
            prodNameDiv.classList.add("input-error");
            return;
        
        // Om något är skrivet
        } else {
            console.log("Name DEFINED");
            prodNameDiv.classList.remove("input-error");
        }

        // Skapa div för att kasta in värden inuti
        const costDiv = document.createElement("div");
        costDiv.className = "cost-div";
        costDiv.innerHTML = 
        prodName + " " + prodPrice;

        cost.append(costDiv);

        prodPriceConv = Number(prodPrice);
        let newBudgetConv = budget - prodPriceConv;
        newBudget = Number(newBudgetConv);
        budget = newBudget;
        difference = prodPrice - budget;
        diff = Number(difference);
        animateValue("budgetNum", 0, budget, 800);
        console.log("budget: " + budget);
        console.log("difference: " + diff);
    }
}