/*
>>> Updating the Budget Budget Controller
*/
// BUDGET CONTROLLER
budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    data.total[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      var newItem;

      // Create new Id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id;
      } else {
        ID = 0;
      }

      // Create new item base on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return new element
      return newItem;
    },

    calculateBudget: function () {
      // Calculate total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");

      // Calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // Calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalIncome: data.totals.inc,
        totalExpenses: data.totals.exp,
        percentage: data.percentage,
      };
    },

    testing: function () {
      console.log(data);
    },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
      };
    },

    addListITem: function (obj, type) {
      var html, newHtml, element;
      // Create HTML string with placeholder text
      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description" >%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;

        html =
          '<div class="item clearfix" id="expense-%id%"><div div class="item__description" >%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    clearFields: function () {
      var fields, fieldsArray;

      fields = document.querySelectorAll(
        DOMStrings.inputDescription + "," + DOMStrings.inputValue
      );

      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach(function (current, index, array) {
        current.value = "";
      });

      fieldsArray[0].focus();
    },

    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        // for older browsers (event.which)
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    var input, newItem;
    //  1. Get the field input data
    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addListITem(newItem, input.type);

      //4. Clear the fields
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();

      // 6. Dispay the budget on the UI
    }
  };

  var updateBudget = function () {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    //2. Return the budget
    var budget = budgetCtrl.getBudget();

    //3. Display the budget on the UI
    console.log(budget);
  };

  return {
    init: function () {
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();