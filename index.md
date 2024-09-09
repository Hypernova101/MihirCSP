---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---


<h1>Home</h1>
<p><br /></p>

<h2>
  Unit 1: 
</h2>
<p>   </p>

<table>
  <tr>
    <th>Week</th>
    <th>Plans</th>
    <th>Hacks(Todo)</th>
    <th>Tangibles</th>
  </tr>

  

    
   
   

  
    
    


  

    

  
  

  
  <tr>
  <td> 0 </td> 
  <td>
   <!-- make new column -->
  </td>
  <td>
       <!-- remove delimiter -->
    
   <!-- make new column -->
  </td>
  <td>
       <!-- remove delimiter -->
    
  
      
  </td>
  </tr>
  

</table>

<h2>
  Unit 2: 
</h2>
<p>   </p>

<table>
  <tr>
    <th>Week</th>
    <th>Plans</th>
    <th>Hacks(Todo)</th>
    <th>Tangibles</th>
  </tr>

  

    
   
   

  
    
    


  

    

  
  

  
  <tr>
  <td> 0 </td> 
  <td>
   <!-- make new column -->
  </td>
  <td>
       <!-- remove delimiter -->
    
   <!-- make new column -->
  </td>
  <td>
       <!-- remove delimiter -->
    
  
      
  </td>
  </tr>
  

</table>


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



<br>
<br>

<div align="center">
  <a href="liverpool-fc/index.html"><button>Go to Liverpool FC Blog</button></a>
</div>
