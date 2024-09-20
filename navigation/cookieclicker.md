---
layout: base
title: Cookie Clicker
permalink: /cookieclicker/
---

<style>
    body {
        text-align: center;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
    }

    .container {
        margin-top: 100px;
    }

    #cookie-container {
        margin: 20px;
    }

    #cookie {
        width: 150px;
        cursor: pointer;
        transition: transform 0.1s ease;
    }

    #cookie:active {
        transform: scale(0.9);
    }

    #counter {
        font-size: 24px;
        margin: 20px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        margin: 10px;
    }

    button:disabled {
        background-color: grey;
    }

    #auto-clicker-info, #multiplier-info, #golden-cookie-info {
        font-size: 18px;
        margin: 10px;
    }

</style>

<audio id="pointSound" src="{{site.baseurl}}/audio/cookie.mp3" preload="auto"></audio>

<body>
    <div class="container">
        <h1>Cookie Clicker</h1>
        <div id="cookie-container">
            <img id="cookie" src="{{site.baseurl}}/images/cc.png" alt="Cookie">
        </div>
        <div id="counter">Cookies: <span id="cookie-count">0</span></div>

        <h2>Shop</h2>
        <button id="buy-auto-clicker">Buy Grandma (10 cookies)</button>
        <button id="buy-multiplier">Buy Cookie Multiplier (50 cookies)</button>
        <button id="buy-golden-cookie">Buy Golden Cookie (100 cookies)</button>

        <div id="auto-clicker-info">Auto-Clickers: <span id="auto-clickers">0</span></div>
        <div id="multiplier-info">Cookie Multiplier: <span id="multiplier">1</span></div>
        <div id="golden-cookie-info">Golden Cookies: <span id="golden-cookies">0</span></div>
    </div>
</body>

<script>
    let cookieCount = 0;
    let autoClickers = 0;
    let cookieMultiplier = 1;
    let goldenCookies = 0;

    const cookieCountElement = document.getElementById("cookie-count");
    const autoClickerElement = document.getElementById("auto-clickers");
    const multiplierElement = document.getElementById("multiplier");
    const goldenCookieElement = document.getElementById("golden-cookies");

    const buyAutoClickerButton = document.getElementById("buy-auto-clicker");
    const buyMultiplierButton = document.getElementById("buy-multiplier");
    const buyGoldenCookieButton = document.getElementById("buy-golden-cookie");

    function playPointSound() {
        const pointSound = document.getElementById("pointSound");
        pointSound.play();
    }

    // Function to update cookie count display
    function updateCookieCount() {
        cookieCountElement.textContent = cookieCount;
    }

    // Function to update auto-clicker count display
    function updateAutoClickers() {
        autoClickerElement.textContent = autoClickers;
    }

    // Function to update multiplier display
    function updateMultiplier() {
        multiplierElement.textContent = cookieMultiplier;
    }

    // Function to update golden cookie display
    function updateGoldenCookies() {
        goldenCookieElement.textContent = goldenCookies;
    }

    // Cookie click event
    document.getElementById("cookie").addEventListener("click", () => {
        cookieCount += cookieMultiplier;
        updateCookieCount();
        playPointSound();
    });

    // Buy auto-clicker event
    buyAutoClickerButton.addEventListener("click", () => {
        if (cookieCount >= 10) {
            cookieCount -= 10;
            autoClickers++;
            updateCookieCount();
            updateAutoClickers();
        }
    });

    // Buy cookie multiplier event
    buyMultiplierButton.addEventListener("click", () => {
        if (cookieCount >= 50) {
            cookieCount -= 50;
            cookieMultiplier++;
            updateCookieCount();
            updateMultiplier();
        }
    });

    // Buy golden cookie event
    buyGoldenCookieButton.addEventListener("click", () => {
        if (cookieCount >= 100) {
            cookieCount -= 100;
            goldenCookies++;
            updateCookieCount();
            updateGoldenCookies();
            giveGoldenCookieBonus();
        }
    });

    // Function to give random bonus from golden cookie
    function giveGoldenCookieBonus() {
        const bonus = Math.floor(Math.random() * 100) + 50;  // Random bonus between 50 and 150
        cookieCount += bonus;
        updateCookieCount();
        alert("You got a golden cookie bonus of " + bonus + " cookies!");
    }

    // Auto-clicker functionality
    setInterval(() => {
        if (autoClickers > 0) {
            cookieCount += autoClickers;
            updateCookieCount();
        }
    }, 1000);

</script>
