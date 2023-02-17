let balanceAmount = document.getElementById("balance-amount");
let depositeAmount = document.getElementById("deposite-amount");
let withdrawAmount = document.getElementById("withdraw-amount");
document.getElementById("deposit").addEventListener("click", function () {
  let depositInput = document.getElementById("deposit-input");
  depositeAmount.innerText =
    Number(depositeAmount.innerText) + Number(depositInput.value);
  balanceAmount.innerText =
    Number(balanceAmount.innerText) + Number(depositInput.value);
  depositInput.value = "";
});
document.getElementById("withdraw").addEventListener("click", function () {
  let withdrawInput = document.getElementById("withdraw-input");
  withdrawAmount.innerText =
    Number(withdrawAmount.innerText) + Number(withdrawInput.value);
  balanceAmount.innerText =
    Number(balanceAmount.innerText) - Number(withdrawInput.value);
  withdrawInput.value = "";
});
