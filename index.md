---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %} 

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }

  <style>
    .project-submenu {
      margin: 20px 0;
      padding: 15px;
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 8px;
      text-align: center;
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    .project-button {
      display: block;
      text-decoration: none;
      color: #333;
    }

    .project-button h2 {
      margin: 0;
      font-size: 24px;
      color: #007bff;
    }

    .project-button p {
      margin: 10px 0 0;
      font-size: 16px;
      color: #555;
    }

    .project-submenu:hover {
      background-color: #e9ecef;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .project-submenu:hover .project-button h2 {
      color: #0056b3;
    }
  </style>

<h1 align="center">Hi, I'm <span class="auto-type"></span></h1>


<br>

<div align="center">
<img align="center" style="border-radius: 4px; box-shadow: 0px 0px 30px #35bde7;" src="{{site.baseurl}}/images/Freeform.png" height="300px" alt="about"/>
<br>
<br>
<em>My about me picture</em>
</div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

<script>
    window.addEventListener("keydown", function(e) { if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) { e.preventDefault(); } }, false);
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}   
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }
    startWalkingLeft() {
      this.stopAnimate();
      this.animate(this.obj["WalkL"], -3);
    }

    startRunningLeft() {
      this.stopAnimate();
      this.animate(this.obj["Run1L"], -6);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "d") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowDown" || event.key === "s") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    } else if (event.key === "ArrowUp" || event.key === "w") {
      event.preventDefault();
      if (event.repeat) {
          mario.stopAnimate();
      } else {
          mario.startFlipping();
      }
    } else if (event.key === "ArrowLeft" || event.key === "a") {
      event.preventDefault();
      if (event.repeat) {
          mario.startCheering();
      } else {
          if (mario.currentSpeed === 0) {
          mario.startWalkingLeft();
        } else if (mario.currentSpeed === -3) {
          mario.startRunningLeft();
        } else if (mario.currentSpeed === 3) {
          mario.startWalkingLeft();
        } else if (mario.currentSpeed === 6) {
          mario.startWalkingLeft();
        }
      }
    }

  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

  console.log(mario_metadata)

  var typed = new Typed(".auto-type", {
        strings: ["Mihir", "a Coder", "a Gamer", "a Kopite"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
   })
</script>

<p align="center" style="color:white;">Hello! My name is Mihir Bapat. I am a Sophomore at Del Norte High School with heritage from India. The above picture is my Freeform picture. It covers the very things I find to be a part of myself. To start off, I am a massive sports fan. I like to watch and play Soccer and Cricket. I support Liverpool FC in Soccer, and the Mumbai Indians and team India in cricket. Finally, in my free time, I like to code, play the piano, and play Fortnite while listening to Spotify. </p>

<br>

<div align="center">
  <button id="factButton" style="background:red;">Get a Random Liverpool FC Fact</button>
</div>


<!-- Add an empty paragraph to display the fact -->
<p id="factDisplay" align="center" style="color:white; font-weight:bold;"></p>

<script>
  // Array of random Liverpool FC facts
  const liverpoolFacts = [
    "Liverpool FC was founded in 1892 and is one of England’s most successful football clubs.",
    "Anfield, Liverpool's home stadium, was originally the home of Everton FC.",
    "Liverpool has won six European Cups, more than any other English team.",
    "Bill Shankly, one of the most iconic managers in football history, led Liverpool from 1959 to 1974.",
    "The famous 'You'll Never Walk Alone' anthem has been sung at Anfield since the early 1960s.",
    "Liverpool's rivalry with Manchester United is one of the most intense in world football.",
    "In 2020, Liverpool won their first Premier League title after a 30-year wait."
  ];

  // Function to get a random fact
  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * liverpoolFacts.length);
    return liverpoolFacts[randomIndex];
  }

  // Event listener for the button
  document.getElementById('factButton').addEventListener('click', () => {
    const fact = getRandomFact();
    console.log(fact)
    document.getElementById('factDisplay').textContent = fact;
  });
</script>



<a href="liverpool-fc/index.html" class="project-button">
    <h2>Mini Project 1: Liverpool FC Blog</h2>
    <p>This is my first mini project Liverpool blog!</p>
</a>