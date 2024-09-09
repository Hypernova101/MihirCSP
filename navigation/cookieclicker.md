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

    #auto-clicker-info {
        font-size: 18px;
        margin: 10px;
    }

</style>


<body>
    <div class="container">
        <h1>Cookie Clicker</h1>
        <div id="cookie-container">
            <img id="cookie" src="{{site.baseurl}}/images/cc.png" alt="Cookie">
        </div>
        <div id="counter">Cookies: <span id="cookie-count">0</span></div>
        <button id="buy-auto-clicker">Buy Auto-Clicker (10 cookies)</button>
        <div id="auto-clicker-info">Auto-Clickers: <span id="auto-clickers">0</span></div>
    </div>
</body>

<script>
    let cookieCount = 0;
    let autoClickers = 0;
    const cookieCountElement = document.getElementById("cookie-count");
    const autoClickerElement = document.getElementById("auto-clickers");
    const buyAutoClickerButton = document.getElementById("buy-auto-clicker");

    // Function to update cookie count display
    function updateCookieCount() {
        cookieCountElement.textContent = cookieCount;
    }

    // Function to update auto-clicker count display
    function updateAutoClickers() {
        autoClickerElement.textContent = autoClickers;
    }

    // Cookie click event
    document.getElementById("cookie").addEventListener("click", () => {
        cookieCount++;
        updateCookieCount();
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

    // Auto-clicker functionality
    setInterval(() => {
        if (autoClickers > 0) {
            cookieCount += autoClickers;
            updateCookieCount();
        }
    }, 1000);

</script>