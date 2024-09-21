// Fetch initial status and update UI
fetch('https://naso.asraful-alom.com/status')
    .then(response => response.json())
    .then(data => {
        updateStatusUI(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Update the UI based on the fetched status data
function updateStatusUI(data) {
    document.getElementById('button2').innerText = `Notification: ${data.isNotify}`;
    document.getElementById('button1').innerText = data.isOn ? "ON" : "OFF";
}

// Toggle On/Off and update UI
function fetchOnOff() {
    fetch('https://naso.asraful-alom.com/togolNotify')
        .then(response => response.json())
        .then(data => {
            document.getElementById('button1').innerText = data.isOn ? "ON" : "OFF";

            if (data.isOn) {
                sendDataToThingSpeak(240, 0.1, 26.02);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Toggle Notification and update UI
function fetchNotification() {
    fetch('https://naso.asraful-alom.com/togolOffOn')
        .then(response => response.json())
        .then(data => {
            document.getElementById('button2').innerText = `Notification: ${data.isNotify}`;
            if (data.isNotify) {
                sendDataToThingSpeak(240, 0.1, 120);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to send data to ThingSpeak
function sendDataToThingSpeak(field1, field2, field3) {
    const url = `http://api.thingspeak.com/update?api_key=W72PXH57KWC4X0OL&field1=${field1}&field2=${field2}&field3=${field3}`;
    fetch(url)
        .then(res => res.json())
        .catch(error => {
            console.error('Error sending data to ThingSpeak:', error);
        });
}

// Event listeners for buttons
document.getElementById('button1').addEventListener('click', fetchOnOff);
document.getElementById('button2').addEventListener('click', fetchNotification);
