// Generate twinkling lights dynamically
const mainContent = document.querySelector(".main-content");

function createTwinklingLights() {
    for (let i = 0; i <100; i++) {  // Number of twinkling lights
        const light = document.createElement("div");
        light.classList.add("light");

        // Random positioning
        light.style.top = `${Math.random() * 100}vh`;
        light.style.left = `${Math.random() * 100}vw`;
        light.style.right = `${Math.random() * 100}vw`;
        light.style.bottom = `${Math.random() * 100}vw`;
        
        // Random color from a festive palette
        const colors = ["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
        light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random blink delay
        light.style.animationDelay = `${Math.random() * 2}s`;

        mainContent.appendChild(light);
    }
}

// Call function to create twinkling lights
createTwinklingLights();
