console.log("starting password-manager");

var storage = require('node-persist');
storage.initSync();

var accounts = [];

// account.name Facebook
// account.username User12!
// account.password Password123

function createAccount(account){
    var accounts = storage.getItemSync("accounts");
    if(typeof accounts === "undefined"){
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync("accounts", accounts);

    return accounts;
}

function getAccount(accountName){
    // var accounts use getItemSync
    var accounts = storage.getItemSync("accounts");
    var matchedAccount;

    accounts.forEach(function(account){
        if(account.name === accountName){
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

//createAccount({
//    name : 'Facebook',
//    username : 'someemail@gmmai.com',
//    password : 'Password123!'
//});

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
