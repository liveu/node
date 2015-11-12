console.log("starting password-manager");

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123

function createAccount(account){
    var accounts = storage.getItemSync("accounts");
    //if accounts is undefined (use typeof)
    //      set accounts = []

    // push on new account
    // return account
}

function getAccount(accountName){
    // var accounts use getItemSync
}

