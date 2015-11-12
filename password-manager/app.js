console.log("starting password-manager");

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123

function createAccount(account){
    var accounts = storage.getItemSync("accounts");
}

function getAccount(accountName){

}

