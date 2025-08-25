const validPin = 1234;
const transactionsData = [];

// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get inner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

//  function to set innertext
function setInnerText(value) {
  console.log(value);
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function for toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function for toggle card
function handleCardToggle(id) {
  const formCard = document.getElementsByClassName("form-card");

  for (const btn of formCard) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874F20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874F20d]");
}

// Add Money card features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // alert("Add Money button clicked!");
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    const pinNumber = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");
    if (amount <= 0) {
      alert("Ivalid amount.");
      return;
    }

    if (accountNumber.length !== 11) {
      alert("Account number must be 11 digits long.");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please provide a valid PIN.");
      return;
    }

    const totalBalance = availableBalance + amount;

    setInnerText(totalBalance);

    const data ={
      name:"Add Money",
      date :new Date ().toLocaleTimeString()
    }
    transactionsData.push(data);
  });

// cash out money card features
document
  .getElementById("withdraw-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueNumber("withdraw-amount");

    const availableBalance = getInnerText("available-balance");

    if (amount <= 0 || amount > availableBalance) {
      alert("Insufficient amount.");
      return;
    }

    const totalBalance = availableBalance - amount;

    setInnerText(totalBalance);

    const data ={
      name:"Cash Out",
      date :new Date ().toLocaleTimeString()
    }
    transactionsData.push(data);
  });

 
  // transactions features 
  document.getElementById("transactions-card").addEventListener("click", function () {
    const transactionsContainer = document.getElementById("transactions-container");

    transactionsContainer.innerHTML = "";

    for (const data of transactionsData) {
      const div = document.createElement("div")
      div.innerHTML = `
        <div
            class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
          >
            <div class="flex items-center gap-2">
              <div class="p-3 rounded-full bg-[#f2f2f2]">
                <img src="assets/wallet1.png" alt="" class="mx-auto" />
              </div>
              <div>
                <h2>${data.name}</h2>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
      `
      

      transactionsContainer.appendChild(div);
    }
  });


//TOGGLING FEATURES
// add money card toggle
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    handleToggle("add-money-parent");

    handleCardToggle("add-money-card");
  });

// cash out card toggle
document.getElementById("cash-out-card").addEventListener("click", function () {
  handleToggle("cash-out-parent");

  handleCardToggle("cash-out-card");
});

// transfer money card toggle
document.getElementById("transfer-card").addEventListener("click", function () {
  handleToggle("transfer-parent");

  handleCardToggle("transfer-card");
});

// Get Bonus Card Toggle
document.getElementById("bonus-card").addEventListener("click", function () {
  handleToggle("get-bonus-parent");

  handleCardToggle("bonus-card");
});

// Pay Bill Card Toggle
document.getElementById("bill-card").addEventListener("click", function () {
  handleToggle("pay-bill-parent");

  handleCardToggle("bill-card");
});

// Transactions Card Toggle
document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");

    handleCardToggle("transactions-card");
  });
