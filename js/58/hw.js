(function () {
    'use strict';
    const checkingAccount = {
        balance: 100,
        performTransaction: function deposit(amount) {
            return this.balance += amount; 
        }
    };

    const savingsAccount = {
        balance: 500,
        performTransaction: function deposit(amount) {
            return this.balance += amount;
        }
    };

    console.log('Regular this', checkingAccount.performTransaction(10),  savingsAccount.performTransaction(10)); 
  
    //////////////////////////////////////////////////////////////

    const checking2 = {
        balance: 200,
        performTransaction: transaction
    };

    const savings2 = {
        balance: 800,
        performTransaction: transaction
    };

    function transaction(amount) {
        /*jshint -W040*/
        return this.balance += amount;
        /*jshint +W040*/
    }

    const cpt = checking2.performTransaction;

    const spt = savings2.performTransaction;

    console.log('call', cpt.call(checking2, 20),spt.call(savings2, 20));
    
    console.log('apply', cpt.apply(checking2, [20]), spt.apply(savings2, [20]));
    
    console.log('bind', cpt.bind(checking2, 20)(), spt.bind(savings2, 20)());
  
}());