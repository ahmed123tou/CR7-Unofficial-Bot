const SECRET_CODE = "RONALDO-7X9Q-2026";

const verificationCard = document.getElementById("verificationCard");
const tokenCard = document.getElementById("tokenCard");
const dashboardCard = document.getElementById("dashboardCard");

const secretCode = document.getElementById("secretCode");
const botToken = document.getElementById("botToken");

const verifyButton = document.getElementById("verifyButton");
const connectButton = document.getElementById("connectButton");

const verifyError = document.getElementById("verifyError");
const tokenError = document.getElementById("tokenError");

verifyButton.addEventListener("click", () => {

const enteredCode = secretCode.value.trim();

if (enteredCode === SECRET_CODE) {

    verifyError.textContent = "";

    verificationCard.classList.add("hidden");
    tokenCard.classList.remove("hidden");

    botToken.focus();

} else {

    verifyError.textContent = "Incorrect secret code.";

}

});

secretCode.addEventListener("keydown", (event) => {

if (event.key === "Enter") {
    verifyButton.click();
}

});

connectButton.addEventListener("click", async () => {

const token = botToken.value.trim();

if (!token) {
    tokenError.textContent = "Enter your bot token.";
    return;
}

tokenError.textContent = "";

/*
    The real bot connection will be added later.

    IMPORTANT:
    The token is NOT stored in the HTML,
    CSS, or JavaScript.
*/

tokenCard.classList.add("hidden");
dashboardCard.classList.remove("hidden");

});

botToken.addEventListener("keydown", (event) => {

if (event.key === "Enter") {
    connectButton.click();
}

});
