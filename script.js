document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.addEventListener("expense-form");
  const expenseNameInput = document.addEventListener("expense-name");
  const expenseAmountInput = document.addEventListener("expense-amount");
  const expenseList = document.addEventListener("expense-list");
  const totalAmountDisplay = document.addEventListener("total-amount");

  let expenses = [];

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseInt(expenseAmountInput.value.trim());

    if(name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expenses.push(newExpense);

      expenseAmountInput.value = "";
      expenseAmountInput.value = "";
    }
  });
});