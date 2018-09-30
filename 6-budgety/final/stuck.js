// Budget Controller
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        // to store percentage
        this.percentage = -1;
    };
    // Calculates percentage
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100)
        } else {this.percentage = -1;
        }
    };
    // return percentage
    Expense.prototype.getPercentage = function (){
        return this.percentage;
    }

    var Income = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var calculateTotal = function(type) {
        // get array, loop over, sum of call
        var sum = 0;
        data.allItems[type].forEach(function(current){
            sum = sum + current.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
        // not percentage:0 because -1 commonly used if value is nonexistent
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;
            // id = 6; cannot use data.allItems[type][id]
            // ids = [1 2 4 6 8]
            // index = 3
            ids = data.allItems[type].map(function(current) {
                // map returns new array
                return current.id;
            });
            // create copy of data.allItems array, find index of specific id #
            index = ids.indexOf(id);

            if (index !== -1) {
                // splice = used to remove elements
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function() {
            // sum of all inc and exp - since doing same things 2x, create function. private function. Above, var calculate total
            calculateTotal('exp');
            calculateTotal('inc');

            // calc budget: inc - exp
            data.budget = data.totals.inc - data.totals.exp;

            // calc percentage of income we spent
            // if so that it wont divide it theres a 0 exp
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
            // Calc expense % for each expense object in expense array
            /*
            a=20
            b=10
            c=40
            income = 100
            a = 20/100 = 20%
            */
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        
        // this time, not just loop over array and return something, this time want to store something - so map
        getPercentage: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });   
            return allPerc;                
        },

        getBudget: function() {
            // creating a method, only for returning from data structure, or module. Only retrieves/sets data.
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }

        },

        testing: function() {
            console.log(data);
        }
    };

})();

// UI CONTROLLER
var UIController = (function(){
    // have them all here, incase anything changes in HTML, you have 1 place to make changes
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        // notice = only unsing first word of <div class="container clearfix">
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num,type) {
        var numSplit, int, dec, type;
        /*
        + or - before number
        exactly 2 decimal points
        comma seperating the thousands 
        Ex: 2310.4567 -> + 2,310.46
        */

        // calculate absolute part of number. Removes sign
        num = Math.abs(num);
        // toFixed = method of number prototype. Returns rounded string
        num = num.toFixed(2);
        // put in ','
        numSplit = num.split('.') 
        
        int = numSplit[0];
        if (int.length > 3) {
            // substring - allows to only take part of string. Start position 0, and read 1 el
            // int = int.substr(0,1)+','+int.substr(1,3);
            int = int.substr(0,int.length - 3)+','+int.substr(int.length-3, 3);
        };

        dec = numSplit[1];

        return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;
    };

    // stil private, but made accessible to rest of module
    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

        return {
            getInput: function() {
                return {
                    type: document.querySelector(DOMStrings.inputType).value, 
                    // either 'inc' or 'exp'
                    description: document.querySelector(DOMStrings.inputDescription).value,
                    // value: document.querySelector(DOMStrings.inputValue).value, 
                    // Change input to be number w parseFloat
                    value: parseFloat(document.querySelector(DOMStrings.inputValue).value), 
                };
            },

            addListItem: function(obj, type) {
                var html, newHTML, element;
                // Create HTML string w placeholder text
                if (type === 'inc') {
                    element = DOMStrings.incomeContainer;
                    html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
     
                } else if (type === 'exp') {
                    element = DOMStrings.expensesContainer;
                    html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }

                // Replace placehold text w actual data
                newHTML = html.replace('%id%', obj.id);
                newHTML = newHTML.replace('%description%', obj.description);
                newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));
                
                // Insert HTML into DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
            },
            
            deleteListItem: function(selectorID) {
                // go up in DOM so can then remove child. Cant delete element, only child
                // See DOM manipulation guide in resources
                var el = document.getElementById(selectorID);

                document.getElementById(selectorID).parentNode.removeChild(el);
            }, 

            // Clear Form after unput
            // slice returns copy of array that it's called on. Trick = Pass a list into it, and it returns an array. Takes an array, but if use Array prototype
            clearFields: function() {
                var fields, fieldsArr;
                fields = document.querySelectorAll(DOMStrings.inputDescription+ ', ' + DOMStrings.inputValue);
            // can now loop over array and clear. 
                fieldsArr = Array.prototype.slice.call(fields)

            // instead of loop with 'for', use forEach in array. Callback function can take up to 3 args - current element/value, index #, entire array
                fieldsArr.forEach(function(current, index, array){
                    current.value = '';
                });
            // Puts cursor back at input field
                fieldsArr[0].focus();
            },

            displayBudget: function(obj) {
                // obj where all data is stored, which is object returned from getBudget()
                var type;

                obj.budget > 0 ? type = 'inc' : type = 'exp';

                document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
                document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
                document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
               
                // document.querySelector(DOMStrings.percentageLabel).textContent = formatNumber(obj.percentage, 'exp');

                if (obj.percentage > 0) {
                    document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
                } else {
                    document.querySelector(DOMStrings.percentageLabel).textContent = '----'; 
                }
            },

            displayPercentages: function(percentages) {
                var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);
                // above returns node list

                // moved below to make accessible to rest of module (above)
                // var nodeListForEach = function(list, callback) {
                //     // for loop, each iteration will call callback function. Can reuse for whenever iterate over nodelist
                //     for (var i = 0; i < list.length; i++) {
                //         // below is current and index
                //         callback(list[i], i);
                //     }
                // };

                nodeListForEach(fields, function(current, index) {
                    if (percentages[index] > 0) {
                        current.textContent = percentages[index] + '%';
                    } else {
                        current.textContent = '';
                    }
                });

            },

            displayMonth: function() {
                var now, year, month, months;
                // if Date blank, stores date of today

                now = new Date();
                // var christmas = new Date(2016,11,25);
            
                month = now.getMonth();
                // month returns 0-based month, Jan = 0
                months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            
                year = now.getFullYear();
                
                // add to UI
                document.querySelector(DOMStrings.dateLabel).textContent = months[month]+' '+year;

            },

            changedType: function() {
            // this toggles CSS. When change to exp, red outline
                var  fields = document.querySelectorAll(
                    DOMStrings.inputType +','
                    + DOMStrings.inputDescription +','
                    + DOMStrings.inputValue
                );

                nodeListForEach(fields, function(cur){
                    cur.classList.toggle('red-focus');
                });
                
                document.querySelector(DOMStrings.inputBtn).classList.toggle('red');

            },

            getDOMStrings: function() {
                return DOMStrings;
            },
        };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
            }
        });
        // Event delegation
        // <div class="container clearfix">
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        // Everytime type changes -/+, changes color
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    // called each time enter new item into CtrlAddItem
    var updateBudget = function() {
        // 5. Calculate the budget
        // notice budgetController.testing() - totals were not updated before put into global app controller
        budgetCtrl.calculateBudget();

        // 6. Return Budget
        var budget = budgetCtrl.getBudget();

        // 7. Display the budget
        // console.log(budget);
        UICtrl.displayBudget(budget);

    };

    var updatePercentages = function() {
        // 1. Calc percentages
        budgetCtrl.calculatePercentages();

        // 2. Read them from BudgetController
        var percentages = budgetCtrl.getPercentage();
        // 3. Update the UI with new %
        UICtrl.displayPercentages(percentages);
    };

    // called each time there's input
    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();
        
        // if statement so user cannot input blank/incorrect values
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {

        // 2. Add the item to the budget controler
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

        // 4. Clear the fields
            UICtrl.clearFields();
// moving below steps to seperate function, they belong together (DRY). in updateBudget
        // 5. Calculate the budget
        // 6. Display the budget

        // 5. Calculate and update budget
            updateBudget();

        // 6. Calc and update percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type;
        // target = know where fired
        // console.log(event.target);
        // to get to <div class="item clearfix" id="income-0">
        // Go to that because it's node for entire item, with unique id 
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            // inc-1 = containers type and unique ID
            splitID = itemID.split('-');
            type = splitID[0];
            // can use parseInt (vs parseFloat) since no decimals
            ID = parseInt(splitID[1]);

        // 1. Delete item from data structure
            budgetCtrl.deleteItem(type, ID);

        // 2. Delete item from UI
            UICtrl.deleteListItem(itemID);

        // 3. Update and show new budget
            updateBudget();
        }
    };

//  Above = EventBubbling - when an event is fired, then the exact same event is triggered on parent elements. Ex - even fired on button, also paragraph, main section -> all the way up to the DOM Tree (bubbles up). Target element is where it happens/originates - stored as prop in event obj. 
// Event delegation - if event bubbles up in dom, and we know where fired, we can simply attach event to parent element. We can simply attach to parent element because event bubbles up. 
// Use case for event delegation:
// 1) Have an element with lots of child elements that we're interested in. In this case, instead of adding to all 
// 2) When want eventHandler attached to an element that's not in DOM when page loaded
// -- ours in both: Have a lot of exp/inc that's not in DOM when we load our page (so no way to attach event), and we have a lot of items

    return {
        init: function() {
            console.log('Application has started!!');
            UICtrl.displayMonth();
            // removes placeholder values on load
            UICtrl.displayBudget({
                    budget: 0,
                    totalInc: 0,
                    totalExp: 0,
                    percentage: -1
            });
            setupEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();
