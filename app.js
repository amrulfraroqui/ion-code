const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const addBtn = document.querySelector('#btn-add');
const itemList = document.querySelector('#item-list');
const totalExpenseOutput = document.querySelector('#total-expense');
const alertController = document.querySelector('ion-alert-controller')
let totalExpense = 0;

let clear = () => {
    inputReason.value = null;
    inputAmount.value = null;
}

addBtn.addEventListener('click', () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;
    if (enteredReason.trim().length <= 0 || enteredAmount < 0 || enteredAmount.trim().length <= 0) {

        alertController.create({
            header: "Invalid input",
            message: "Please fill the values",
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;

    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    itemList.appendChild(newItem);
    totalExpense += +enteredAmount;
    totalExpenseOutput.textContent = totalExpense;
    clear();
});

cancelBtn.addEventListener('click', clear);
