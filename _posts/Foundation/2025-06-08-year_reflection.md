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

