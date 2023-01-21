// Get the user's login information
const loginInfo = {
    email: "user@example.com",
    password: "password123"
  };
  
  // Convert the login information to a JSON string
  const loginInfoString = JSON.stringify(loginInfo);
  
  // Create a QR code using the login information
  const qr = new QRCode(document.getElementById("qr"), {
    text: loginInfoString,
    width: 150,
    height: 150
  });