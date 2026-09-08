// ==========================================
// BANK ACCOUNT MANAGEMENT SYSTEM
// ==========================================


// Bank accounts

let accounts = [
    {
        accountNumber: 1001,
        name: "Arun",
        balance: 25000,
        transactions: []
    },
    {
        accountNumber: 1002,
        name: "Priya",
        balance: 40000,
        transactions: []
    },
    {
        accountNumber: 1003,
        name: "Rahul",
        balance: 15000,
        transactions: []
    }
];


// ==========================================
// 1. DISPLAY ALL ACCOUNTS
// ==========================================

function displayAllAccounts() {

    console.log("========== ALL ACCOUNTS ==========");

    for (let i = 0; i < accounts.length; i++) {

        console.log(
            "Account Number:", accounts[i].accountNumber,
            "| Name:", accounts[i].name,
            "| Balance: ₹" + accounts[i].balance
        );
    }

    console.log("==================================");
}


// ==========================================
// 2. FIND AN ACCOUNT
// ==========================================

function findAccount(accountNumber) {

    let account = accounts.find(function(item) {
        return item.accountNumber === accountNumber;
    });

    if (account) {
        console.log("Account Found:");
        console.log(account);
        return account;
    } 
    else {
        console.log("Account not found.");
        return null;
    }
}


// ==========================================
// 3. DEPOSIT MONEY
// ==========================================

function depositMoney(accountNumber, amount) {

    let account = findAccount(accountNumber);

    if (account) {

        if (amount > 0) {

            account.balance = account.balance + amount;

            account.transactions.push(
                "Deposited ₹" + amount
            );

            console.log(
                "₹" + amount +
                " deposited successfully."
            );

            console.log(
                "New Balance: ₹" + account.balance
            );

        } 
        else {

            console.log("Please enter a valid amount.");

        }
    }
}


// ==========================================
// 4. WITHDRAW MONEY
// ==========================================

function withdrawMoney(accountNumber, amount) {

    let account = findAccount(accountNumber);

    if (account) {

        if (amount <= 0) {

            console.log("Please enter a valid amount.");

        } 
        else if (amount > account.balance) {

            console.log("Insufficient balance.");

        } 
        else {

            account.balance = account.balance - amount;

            account.transactions.push(
                "Withdrawn ₹" + amount
            );

            console.log(
                "₹" + amount +
                " withdrawn successfully."
            );

            console.log(
                "Remaining Balance: ₹" + account.balance
            );
        }
    }
}


// ==========================================
// 5. CHECK BALANCE
// ==========================================

function checkBalance(accountNumber) {

    let account = findAccount(accountNumber);

    if (account) {

        console.log(
            account.name +
            "'s Balance: ₹" +
            account.balance
        );
    }
}


// ==========================================
// 6. ADD TRANSACTION
// ==========================================

function addTransaction(accountNumber, transaction) {

    let account = findAccount(accountNumber);

    if (account) {

        account.transactions.push(transaction);

        console.log("Transaction added successfully.");
    }
}


// ==========================================
// 7. DISPLAY TRANSACTION HISTORY
// ==========================================

function displayAccountStatement(accountNumber) {

    let account = findAccount(accountNumber);

    if (account) {

        console.log("========== ACCOUNT STATEMENT ==========");

        console.log("Account Number:", account.accountNumber);
        console.log("Name:", account.name);
        console.log("Current Balance: ₹" + account.balance);

        console.log("Transactions:");

        if (account.transactions.length === 0) {

            console.log("No transactions found.");

        } 
        else {

            for (let i = 0; i < account.transactions.length; i++) {

                console.log(
                    (i + 1) + ". " +
                    account.transactions[i]
                );
            }
        }

        console.log("=======================================");
    }
}


// ==========================================
// 8. CALCULATE TOTAL BANK BALANCE
// ==========================================

function calculateTotalBankBalance() {

    let total = 0;

    for (let i = 0; i < accounts.length; i++) {

        total = total + accounts[i].balance;
    }

    console.log(
        "Total Money in Bank: ₹" + total
    );

    return total;
}


// ==========================================
// 9. FIND ACCOUNTS WITH HIGH BALANCE
// ==========================================

function findHighBalanceAccounts(amount) {

    console.log(
        "========== ACCOUNTS ABOVE ₹" +
        amount +
        " =========="
    );

    let found = false;

    for (let i = 0; i < accounts.length; i++) {

        if (accounts[i].balance > amount) {

            console.log(
                accounts[i].name +
                " - ₹" +
                accounts[i].balance
            );

            found = true;
        }
    }

    if (!found) {

        console.log("No accounts found.");
    }
}


// ==========================================
// TEST THE PROGRAM
// ==========================================


// Display all accounts

console.log("\n--- DISPLAY ALL ACCOUNTS ---");

displayAllAccounts();


// Find an account

console.log("\n--- FIND ACCOUNT ---");

findAccount(1001);


// Deposit money

console.log("\n--- DEPOSIT MONEY ---");

depositMoney(1001, 5000);


// Check balance

console.log("\n--- CHECK BALANCE ---");

checkBalance(1001);


// Withdraw money

console.log("\n--- WITHDRAW MONEY ---");

withdrawMoney(1001, 3000);


// Try withdrawing more than balance

console.log("\n--- CHECK INSUFFICIENT BALANCE ---");

withdrawMoney(1003, 20000);


// Display account statement

console.log("\n--- ACCOUNT STATEMENT ---");

displayAccountStatement(1001);


// Calculate total bank balance

console.log("\n--- TOTAL BANK BALANCE ---");

calculateTotalBankBalance();


// Find accounts with balance above ₹20,000

console.log("\n--- HIGH BALANCE ACCOUNTS ---");

findHighBalanceAccounts(20000);