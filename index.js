function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    
    interestRateValue = document.getElementById("interest-rate").value;

    MonthToPayValue = document.getElementById("months-to-pay").value;
    
    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthToPayValue;

    monthlyPayment = (loanAmountValue / MonthToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}