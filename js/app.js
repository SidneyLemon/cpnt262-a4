// SAVINGS CALCULATOR

const savingPercentage = 0.20;

const calculateSavings = function(payCheck, savingPercentage) {
  
  const savingsAmount = payCheck * savingPercentage;
  const savings = `${savingPercentage * 100}%`


return(`${savings} of $${payCheck} is $${savingsAmount}.`);

}


{
const payCheck = 1000;
const savings = calculateSavings(payCheck, savingPercentage);

console.log(savings);
}

{
const payCheck = 2000;
const savings = calculateSavings(payCheck, savingPercentage);
  
console.log(savings);
}

{
const payCheck = 3000;
const savings = calculateSavings(payCheck, savingPercentage);
    
console.log(savings);
}
  
