fetch('https://naso.asraful-alom.com/status')
    .then(response => response.json())
    .then(data => {
        if (data.isNotify) {
            document.getElementById('button2').innerText = "Notification: true";
        } else {
            document.getElementById('button2').innerText = "Notification: false";
        }
        if (data.isOn) {
            document.getElementById('button1').innerText = "ON";
        }
        else {
            document.getElementById('button1').innerText = "OFF";
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


function featchOnOff() {
    fetch('https://naso.asraful-alom.com/togolNotify')
        .then(response => response.json())
        .then(data => {
            if (data.isOn) {
                document.getElementById('button1').innerText = "ON";
            }
            else {
                document.getElementById('button1').innerText = "OFF";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function featchNotifi(){
    fetch('https://naso.asraful-alom.com/togolOffOn')
        .then(response => response.json())
        .then(data => {
            if (data.isNotify) {
                document.getElementById('button2').innerText = "Notification: true";
            } else {
                document.getElementById('button2').innerText = "Notification: false";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


document.getElementById('button1').addEventListener('click', () => {
    featchOnOff();
});

document.getElementById('button2').addEventListener('click', () => {
    featchNotifi();
});
