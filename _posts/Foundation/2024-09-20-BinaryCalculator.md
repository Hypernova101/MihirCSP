---
toc: false
comments: false
layout: post
title: Binary Calculator
description: Calculator for Binary Colors
type: tangibles
courses: { compsci: {week: 3} }
---

<style>
    .container {
        text-align: center;
        margin-top: 20px;
    }

    h1 {
        color: #333;
    }

    .color-display {
        width: 200px;
        height: 200px;
        background-color: rgb(0, 0, 0);
        margin-bottom: 20px;
        border: 2px solid #000;
    }

    .channel {
        margin: 10px 0;
    }

    .binary-display {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .bit {
        width: 40px;
        height: 40px;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .bit.off {
        background-color: #ddd;
        color: #000;
    }

    .bit.on {
        background-color: #4CAF50;
        color: #fff;
    }

    .result {
        font-size: 16px;
        color: #333;
    }

    .color-info {
        font-size: 16px;
        margin-top: 10px;
    }
    .center-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px; /* You can adjust this height as needed */
    }

</style>


<div class="container">
    <h1>Interactive RGB Binary Calculator</h1>
    <br>
    <div class="center-container">
        <div class="color-display" id="color-display"></div>
    </div>
        <div class="channel">
            <h3>Red Channel</h3>
            <div class="binary-display" id="red-bits">
                <div class="bit off" data-value="128">0</div>
                <div class="bit off" data-value="64">0</div>
                <div class="bit off" data-value="32">0</div>
                <div class="bit off" data-value="16">0</div>
                <div class="bit off" data-value="8">0</div>
                <div class="bit off" data-value="4">0</div>
                <div class="bit off" data-value="2">0</div>
                <div class="bit off" data-value="1">0</div>
            </div>
        </div>
        <div class="channel">
            <h3>Green Channel</h3>
            <div class="binary-display" id="green-bits">
                <div class="bit off" data-value="128">0</div>
                <div class="bit off" data-value="64">0</div>
                <div class="bit off" data-value="32">0</div>
                <div class="bit off" data-value="16">0</div>
                <div class="bit off" data-value="8">0</div>
                <div class="bit off" data-value="4">0</div>
                <div class="bit off" data-value="2">0</div>
                <div class="bit off" data-value="1">0</div>
            </div>
        </div>
        <div class="channel">
            <h3>Blue Channel</h3>
            <div class="binary-display" id="blue-bits">
                <div class="bit off" data-value="128">0</div>
                <div class="bit off" data-value="64">0</div>
                <div class="bit off" data-value="32">0</div>
                <div class="bit off" data-value="16">0</div>
                <div class="bit off" data-value="8">0</div>
                <div class="bit off" data-value="4">0</div>
                <div class="bit off" data-value="2">0</div>
                <div class="bit off" data-value="1">0</div>
            </div>
        </div>
        <div class="color-info">
            RGB Value: <span id="rgb-value">rgb(0, 0, 0)</span>
        </div>
    </div>

<script>
        const colorDisplay = document.getElementById('color-display');
        const rgbValueDisplay = document.getElementById('rgb-value');

        const redBits = document.querySelectorAll('#red-bits .bit');
        const greenBits = document.querySelectorAll('#green-bits .bit');
        const blueBits = document.querySelectorAll('#blue-bits .bit');

        function updateRGB() {
            let red = calculateChannelValue(redBits);
            let green = calculateChannelValue(greenBits);
            let blue = calculateChannelValue(blueBits);

            const rgbColor = `rgb(${red}, ${green}, ${blue})`;
            colorDisplay.style.backgroundColor = rgbColor;
            rgbValueDisplay.textContent = rgbColor;
        }

        function calculateChannelValue(bits) {
            let channelValue = 0;
            bits.forEach(bit => {
                if (bit.classList.contains('on')) {
                    channelValue += parseInt(bit.getAttribute('data-value'), 10);
                }
            });
            return channelValue;
        }

        function toggleBit(bit) {
            bit.classList.toggle('on');
            bit.classList.toggle('off');
            bit.textContent = bit.classList.contains('on') ? '1' : '0';
            updateRGB();
        }

        // Event listeners for all bits
        redBits.forEach(bit => bit.addEventListener('click', () => toggleBit(bit)));
        greenBits.forEach(bit => bit.addEventListener('click', () => toggleBit(bit)));
        blueBits.forEach(bit => bit.addEventListener('click', () => toggleBit(bit)));

        // Initialize with the default color
        updateRGB();
    </script>