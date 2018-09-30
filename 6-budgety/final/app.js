
// BUDGET CONTROLLER
var budgetController = (function() {
    // function constructors when want to instansiate lots of objects
    // remember - when calling func constructors, create var = new [function] = creates new object, pointing 'this' properties to new object
    var Expense = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // prototype better in this instance because object will inherit method

    // var allExpenses = [];
    // var allIncomes = [];
    // var totalExpenses = 0;
    // var totalIncome = 0;
    // Above not great, because better to have ALL data in 1 structure
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type,des,val) {
            var newItem, ID;
            // Create new ID
            // below is incase allItems has a []
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Create new item based on 'inc' or 'exp' type
            if (type === 'expense') {
                newItem = new Expense(ID,des,val);
            } else if (type === 'income') {
                newItem = new Income(ID,des,val);
            }
            // Push it into our data structure
            data.allItems[type].push(newItem);
            // Return new element
            return newItem; 
        },
        // testing: function() {
        //     console.log(data);
        // }
    };

})();

// UI CONTROLLER
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };
        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMStrings.inputType).value, 
                    // either 'inc' or 'exp'
                    description: document.querySelector(DOMStrings.inputDescription).value,
                    value: document.querySelector(DOMStrings.inputValue).value, 
                };
            },
            getDOMStrings: function() {
                return DOMStrings;
            }
        };
})();

// GLOBAL APP CONTROLLER
// Where tell other modules what to do
var controller = (function(budgetCtrl, UICtrl){
    var setupEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();
    // Above = importing the DOMStrings from UIController, for 'DOM.inputBtn'
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            // use 'event.which' because olders browsers use the prop
            ctrlAddItem();
            }
        // console.log(event);
        // above - check event log. In properties, check keyCode
        });
    // KeyPress event doesn't happen on specific element, but on global page/document     
    };

    var ctrlAddItem = function() {
        var input, newItem;
        // console.log('Button Clicked')
        // 1. Get the field input data
        input = UICtrl.getInput();
        
        // 2. Add the item to the budget controler
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget
    };
    // Return into an object, since we want it to be public
    return {
        init: function() {
            console.log('Application has started!!');
            setupEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();
// Above is only thing outside of the controllers, because without init, there are no event listeners. Without even listeners, there's no input, and app not running



















