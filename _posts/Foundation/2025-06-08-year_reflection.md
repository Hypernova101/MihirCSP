# Year Long Reflection

As AP Computer Science Principles wraps up, I'm reflecting on what has been a year full of learning. I coded full-stack apps, explored real-world data, created classroom tools, and studied for the AP exam with peer-taught lessons and individual plans. Here below is an overview of the keypoints of this experience — the code, the lessons, and the journey.

## 🧩 Major Projects Overview

| Project            | Description                                                 | Key Tech                               | My Role                        |
| ------------------ | ----------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| **Prism**          | Social platform with different activities to match users with similar profiles     | Flask, JS, Gemini API, GitHub Pages    | Created Random Chatroom, along with a Chat API/Model to store in the backend database |
| **SmartParkSD**    | Predict parking meter availability using real city data & Machine Learning     | Flask, Scikit-learn, Google Maps API   | Backend Engineer - served Machine Learning Model using APIs, integrated Machine Learning predictions onto map      |
| **Lesson Layouts** | Modular lesson templates with interactivity & customization | Jekyll, YAML, JavaScript, Socket.IO | Created live, multiplayer game using Socket.IO. Deployed on Flask backend for anyone to use.      |

---

## 🔷 Prism – A Platform for Meaningful Connections


Prism is a social platform designed to help users connect through profile-based games and shared interests. The highlight feature I built was the **Random Chatroom**, where users are placed into real-time conversations powered by **AI-generated prompts** tailored to their hobbies or likes.

This wasn’t just about creating a chat box — it involved designing a system of:
- **User groups** and **channel logic**
- AI-generated questions using the **Gemini 1.5 Flash API**
- A **full CRUD backend** built in Flask to handle message sending, editing, and deletion
- Frontend DOM updates based on backend response states
- Deployed frontend on **GitHub Pages** and backend behind **NGINX**

### 🤖 AI Prompt Generator  
```js
const prompt = await sendToGeminiAPI("F1", "Engineering");
// e.g., "What do you think of the engines in F1 cars?"
```

This function uses the Gemini 1.5 API to generate a custom conversation starter based on two shared interests. It's what powers the personalized prompts that make each random chatroom feel engaging and relevant.

---

### 📮 Backend Chat Creation

```python
@token_required()
def post(self):
    data = request.get_json()
    chat = Chat(
        message=data['message'],
        user_id=g.current_user.id,
        channel_id=data['channel_id']
    )
    chat.create()
    return jsonify(chat.read())
```

This API endpoint accepts chat messages from the frontend and stores them in the database. It ensures each message is tied to a specific user and channel and is protected by token authentication.

---

### 🧾 Chat Model – SQLAlchemy ORM

```python
class Chat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    _message = db.Column(db.String(255), nullable=False)
    _user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    _channel_id = db.Column(db.Integer, db.ForeignKey('channels.id'), nullable=False)
```

This is the backend model that defines how each message is stored. It connects messages to both users and channels and enables operations like reading, updating, and deleting messages through SQLAlchemy.

---

### 🧠 What I Learned

Working on Prism taught me how to build scalable systems that feel personal and interactive. I learned how to integrate AI to drive engagement, structure a real-time chat feature, and create a backend API that supports dynamic conversations — all while deploying across multiple platforms.

---

## 🚗 SmartParkSD – Predictive Parking with Real-Time Maps

SmartParkSD is a full-stack project that predicts **parking meter availability** using real city transaction data. The system connects a trained **machine learning model** to a responsive **Google Maps interface**, giving users real-time parking predictions based on location, time, and traffic data.

This was one of the most technically demanding projects — from designing the data pipeline to model training, API integration, and map overlays.

On the frontend, I integrated the Google Maps API with a dynamic prediction overlay. When a user clicks a marker:

### 🗺️ Interactive Parking Map

```js
const marker = new google.maps.Marker({
  position: place.geometry.location,
  map: map,
  icon: "http://maps.google.com/mapfiles/ms/icons/parkinglot.png",
  title: place.name
});

marker.addListener("click", async () => {
  const requestData = {
    pole_id: p.pole,
    day_of_week: new Date().getDay(),
    hour_of_day: new Date().getHours()
  };
  const res = await fetch(`${pythonURI}/api/parking/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData)
  });
  const data = await res.json();
  const percent = data.predicted_parking_availability_percent;
  new google.maps.InfoWindow({
    content: `🚗 Available: ${percent.toFixed(1)}%`,
    position: marker.getPosition()
  }).open(map, marker);
});
```

### 📌 What this segment does:

When a user clicks a parking marker, it:

* Sends a POST request with the current day/hour and meter ID.
* Gets back a prediction from the Flask backend.
* Dynamically shows a **color-coded availability message** right on the map.


---

### 🔌 Backend Prediction API

To power the real-time map interface, I built a Flask REST API that receives input from the frontend (like pole ID, day, and hour) and returns the model’s predicted availability percentage.

```python
@parking_api.route("/predict", methods=["POST"])
def predict_availability():
    data = request.get_json()
    required = ['pole_id', 'day_of_week', 'hour_of_day']
    if not all(k in data for k in required):
        return {"error": "Missing fields"}, 400

    probability = model_instance.predict(
        data['pole_id'], int(data['day_of_week']), int(data['hour_of_day'])
    )
    return jsonify({'predicted_parking_availability_percent': probability})
```

This endpoint connects the frontend markers directly to a trained ML model. When the client sends a POST request, it queries the model and returns a percentage that updates the Google Map live — no page reload required.

---

### 🧠 What I Learned

SmartParkSD taught me how to:

* Use real-world geospatial data to train and serve a predictive ML model
* Build RESTful APIs that serve live predictions based on user interaction
* Integrate Google Maps with intelligent overlays and dynamic data
* Balance model performance and API speed for real-time use

It was a project where everything came together: **data science, web development, and UX**.

---


## 🧠 Lesson Layout System

One of the most rewarding parts of my year was developing an interactive lesson layout system designed to enhance how students engage with computer science material. This system allowed teachers to create modular, visually engaging, and interactive pages using markdown and Jekyll layouts like `lesson.html`, and reusable includes (`video.html`, `hack.html`, `game.html`, etc.).

> 🏆 Favorite Project

### Multiplayer Quiz Game Using Socket.IO

To encourage review and collaboration to boost interactivity on lessons, I created a real-time multiplayer quiz component embedded in each lesson. Students join using their name and difficulty level, then compete to answer randomized questions the fastest.

We used **Socket.IO** on both the frontend and backend to handle:

* Real-time player joins
* Score tracking and broadcasting
* Leaderboard updates

Here’s a simplified look at the backend logic (Python):

```python
@socketio.on("player_score")
def handle_player_score(data):
    name = data.get("name")
    score = data.get("score", 0)
    for p in players:
        if p["name"] == name:
            p["score"] = score
            break
    leaderboard = sorted(players, key=lambda x: x["score"], reverse=True)
    emit("leaderboard_update", leaderboard, broadcast=True)
```

On the frontend, players emit their scores and receive leaderboard updates in real-time. This creates an engaging, game-like classroom experience:

```js
socket.on("leaderboard_update", (data) => {
  updateLeaderboardUI(data);
});
```

The leaderboard and progress bar update live, and teachers can watch students compete from anywhere.

This Socket.IO integration was deployed using an NGINX reverse proxy and secured with Let’s Encrypt certificates.

---

### 🧠 Flashcard System Using `flashcards.yml`

A big part of this system was the flashcard component, designed for **review and retention**. The cards are defined in a simple YAML file (`flashcards.yml`), and rendered using `flashcards.html`.

Here’s an example entry from the data file:

```yaml
cards:
  - term: Spaced Repetition
    definition: A technique used in the flashcard system to optimize review intervals based on retention.
```

The HTML file automatically reads the data using Liquid:

```
{% assign cards = include.cards | default: site.data.flashcards.cards %}
```

This allowed for shared cards across lessons, with real-time **progress tracking**, **review tagging**, and a **spaced repetition algorithm** to optimize learning.

### 🧠 What I Learned

I learned how to:

* Design reusable components using **Liquid templating**
* Source and render structured content from **YAML files**
* Use **JavaScript DOM logic** to manage flipping, progress, and review queues
* Build a review sidebar and progress bar entirely with client-side state

---

## 💼 Building Beyond the Classroom

Over this past year, I’ve focused heavily on building projects — from real-time chatrooms and AI-powered games to machine learning APIs and lesson tools. But in the real world, building is only half the story.

The other half is **showcasing** your work, telling your story, and putting your name out there.

That’s why I created a [LinkedIn profile](https://www.linkedin.com/in/mihir-bapat/). I want to begin building a professional presence that reflects the work I’ve done and the work I want to do. 

It’s a place where I’m organizing my experiences, listing skills, and sharing my projects publicly — not just for a grade, but for the world to see.

> 🧠 Coding taught me how to build. LinkedIn is where I start learning how to represent.