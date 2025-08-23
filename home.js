document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // alert("Add Money button clicked!");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amountToAdd = parseInt (document.getElementById("amount-to-add").value);
    const pinNumber = document.getElementById("pin-number").value;
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    console.log(availableBalance);

    const totalBalance = availableBalance + amountToAdd;
    document.getElementById("available-balance").innerText = totalBalance;
  });
