//login button functionality
document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobile = 12345678910; // Example mobile number
  const pin = 1234; // Example PIN
  const mobileValue = document.getElementById("mobile").value;
  const mobileValueConverted = parseInt(mobileValue);

  const pinValue = document.getElementById("pin").value;
  const pinValueConverted = parseInt(pinValue);

  console.log(mobileValueConverted, pinValueConverted);

  if (mobileValueConverted === mobile && pinValueConverted === pin) {
    window.location.href = "home.html"; // Redirect to home page
  } else {
    alert("Invalid Credentials");
  }
});
