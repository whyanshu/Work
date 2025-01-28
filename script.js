const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears. ✨",
    "Do you have a name, or can I call you mine? 😘",
    "I'm lost. Can you give me directions to your heart? ❤️",
    "Are you a bank loan? Because you have my interest. 😉",
    "If beauty were time, you’d be an eternity. ⏳",
    "Is your name Google? Because you have everything I’ve been searching for. 🔍",
    "Are you WiFi? Because I feel a connection. ❤️",
    "Are you made of copper and tellurium? Because you’re Cu-Te. 🔬"
];

function newPickupLine() {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    document.getElementById("pickup-line").textContent = pickupLines[randomIndex];
}