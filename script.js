const marriedTaxRate = {
  1: 450000,
  2: 100000,
  3: 200000,
  4: 1250000,
  5: 2000000,
};
const unmarriedTaxRate = {
  1: 400000,
  2: 100000,
  3: 200000,
  4: 1300000,
  5: 2000000,
};
const taxRate = {
  1: 0.01,
  2: 0.1,
  3: 0.2,
  4: 0.3,
  5: 0.36,
};
function taxCalculation() {
  const status = document.querySelector('input[name="status"]:checked').value;
  const monthlyIncome = document.getElementById("monthlyIncome").value;
  if (!monthlyIncome) {
    return alert("Put monthly income");
  }
  if (!status) {
    return alert("Select your marital status");
  }
  const yearlyIncome = monthlyIncome * 12;

  //take marriedTaxRate if it doesnot lie within if condition
  let taxBracket = marriedTaxRate;
  if (status === "unmarried") {
    taxBracket = unmarriedTaxRate;
  }

  let yearlyTax = 0,
    remainingIncome = yearlyIncome;

  for (let i = 1; i <= 5; i++) {
    if (remainingIncome <= taxBracket[i] || i == 5) {
      yearlyTax = yearlyTax + taxRate[i] * remainingIncome;
      break;
    } else {
      yearlyTax = yearlyTax + taxRate[i] * taxBracket[i];
      remainingIncome = remainingIncome - taxBracket[i];
    }
  }
  document.getElementById("yearlyIncome").value = yearlyIncome;
  document.getElementById("yearlyTax").value = yearlyTax;
  document.getElementById("monthlyTax").value = yearlyTax / 12;
}
