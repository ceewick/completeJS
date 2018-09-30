/*
Course = Udemy - The Complete JavaScript Course by 
https://www.udemy.com/the-complete-javascript-course/

Chapter = Budgety App


To Do = 

- Add event Handler (click to input data/item)
- Get input values (from form)
- Add the new item to data structure
- Add the new item to the UI
- Calculate budget
- Update the UI

Stucturing our code with modules
Modules:
- Important aspect of any robust application's architecture
- Keep the units of code for a project cleanly seperated and organized
- Encapsulate some data into privact and expose other data publicly

Modules for this project = 
** look at ToDo - some tasks are UI and some are more logic
-UI Module
--Get input values
--Add the new item to the UI
--Update the UI

-Data Module
-- Add the new item to our data Structure
-- Calculate budget

- Controller Module
-- Add event handler
*/

/* **** Implementing a Modular Pattern ****
- How to use the module pattern
- More about private/public data, encapsulation, and seperation of concerns

Data Encapsulation = Hide data details, only expose public interface (API)

Module Patterns = Closures and IIFE
- Iffy = anonymous function, wrapped in parenthesis
*/
// Below = first Module
var budgetController = (function() {
    // IIFE - Immediately Invoked Function Expression - private, in closure
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            //console.log(add(b));
            // change above to return, so other function can access
            return (add(b));
        }
    }
})();
// in ^^ - cannot acess add, or a - they are private
// you CAN access publicTest, because object (publicTest) is returned and assigned to budgetController
// works because of closures - inner function has access to outter functions - notice the function was immediately closed

// Module
var UIController = (function(){


})();

// Seperation of concerns = each part of application should only worry about themselves (not other modules) (unless connected)

// App Controller - combines other modules / controller
var controller = (function(budgetCtrl, UICtrl){
    // 
    // Using seperate variables above because would become a little less independent (a change in module name, would have to change everywhere)
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublicMethod: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);

/*
EventBubbling - when an event is fired, then the exact same event is triggered on parent elements. Ex - even fired on button, also paragraph, main section -> all the way up to the DOM Tree (bubbles up). Target element is where it happens/originates - stored as prop in event obj. 
Event delegation - if event bubbles up in dom, and we know where fired, we can simply attach event to parent element. We can simply attach to parent element because event bubbles up. 
Use case for event delegation:
1) Have an element with lots of child elements that we're interested in. In this case, instead of adding to all 
2) When want eventHandler attached to an element that's not in DOM when page loaded
-- ours in both: Have a lot of exp/inc that's not in DOM when we load our page (so no way to attach event), and we have a lot of items

DOM Traversing
*/
