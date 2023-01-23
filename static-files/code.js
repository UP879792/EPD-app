console.log("QR code library loaded");
function generateQR() {
  console.log("generateQR function called")
  var name = document.getElementById('name').value;
  var bloodType = document.getElementById('bloodType').value;
  var NHSNumber = document.getElementById('NHSNumber').value;
  let data = "- Name: " + name +   " || - Blood Type: " + bloodType +   " || - NHS Number: " + NHSNumber ;
  console.log("Data passed to QR code library: " + data);
  const loginInfoString = JSON.stringify(data);
  console.log("loginInfoString passed to QR code library: " + loginInfoString);
  var qrcode = new QRCode(document.getElementById('qrcode'), {
      text: loginInfoString,
      width: 100,
      height: 100,
      FormData:data
  });
  if (data) { // check if the data is not empty
    qrcode.makeCode(data); 
  } else {
    console.log("No usable data found");
  }  
  event.preventDefault();
}



// Get the user's login information
const loginInfo = {
    email: "user@example.com",
    password: "password123"
  };
  
  // Convert the login information to a JSON string
  const loginInfoString = JSON.stringify(loginInfo);
  
  // Create a QR code using the login information
  // const qr = new QRCode(document.getElementById("qr"), {
  //   text: loginInfoString,
  //   width: 150,
  //   height: 150
  // });