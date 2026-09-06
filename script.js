
const startBot = document.getElementById("startBot");
const stopBot = document.getElementById("stopBot");

const statusText = document.getElementById("statusText");
const dot = document.querySelector(".dot");

const serverCount = document.getElementById("serverCount");
const userCount = document.getElementById("userCount");
const ping = document.getElementById("ping");


function setStatus(online) {

    if (online) {
        statusText.textContent = "Bot Online";
        dot.style.background = "#2ecc71";
    } else {
        statusText.textContent = "Bot Offline";
        dot.style.background = "#e74c3c";
    }

}


startBot.addEventListener("click", async () => {

    try {

        const response = await fetch("/api/bot/start", {
            method: "POST"
        });

        const data = await response.json();

        if (data.success) {
            setStatus(true);
        }

    } catch (error) {

        console.error(error);

        alert("Backend is not connected yet.");

    }

});


stopBot.addEventListener("click", async () => {

    try {

        const response = await fetch("/api/bot/stop", {
            method: "POST"
        });

        const data = await response.json();

        if (data.success) {
            setStatus(false);
        }

    } catch (error) {

        console.error(error);

        alert("Backend is not connected yet.");

    }

});
