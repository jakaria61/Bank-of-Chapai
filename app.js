
const login = document.getElementById('loginHide');
const transaction = document.getElementById('transaction');
transaction.style.display = 'none';
 function hideLogin() {
    login.style.display = 'none';
    transaction.style.display='block';
    
}


function handleDeposite() {
    var value = document.getElementById('deposite-value').value;
    var setDepostite = document.getElementById('deposit-amount').innerText;
    var amount = parseInt(value) + parseInt(setDepostite);

    document.getElementById('deposit-amount').innerText = amount;
    var total = document.getElementById('total-balance').innerText;
    var totalBalance = parseInt(total) + parseInt(value);
    document.getElementById('total-balance').innerText = totalBalance;
    document.getElementById('deposite-value').value = '';
}
function handlewithdraw(){
    var value = document.getElementById('withdraw-value').value;
    var setwithdraw = document.getElementById('withdraw-amount').innerText;
    var amount = parseInt(value) + parseInt(setwithdraw);

    document.getElementById('withdraw-amount').innerText = amount;
    var total = document.getElementById('total-balance').innerText;
    var totalBalance = parseInt(total) - parseInt(value);
    document.getElementById('total-balance').innerText = totalBalance;
    document.getElementById('withdraw-value').value = '';
    
}

