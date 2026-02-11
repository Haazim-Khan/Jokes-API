# 🎭 Jokes REST API

A simple RESTful API that provides categorized jokes.  
Built using **Node.js** and **Express.js**.

🌍 **Live API URL:**  
https://jokes-api-t9b8.onrender.com

---

## 📌 Available Joke Categories

The API supports the following 10 types:

- programming  
- agriculture  
- school  
- general  
- food  
- sports  
- music  
- science  
- technology  
- finance  

---

# 📖 API Endpoints

---

## 1️⃣ Get a Random Joke

**Endpoint**
```
GET /random
```

**Example**
```
https://jokes-api-t9b8.onrender.com/random
```

**Response (200)**
```json
{
  "id": 12,
  "type": "general",
  "setup": "Why can’t your nose be 12 inches long?",
  "description": "Because then it would be a foot."
}
```

---

## 2️⃣ Get Joke by ID

**Endpoint**
```
GET /random/:id
```

**Example**
```
https://jokes-api-t9b8.onrender.com/random/5
```

**Responses**
- 200 → Returns joke
- 400 → Invalid ID
- 404 → Joke not found

---

## 3️⃣ Filter Jokes by Type

**Endpoint**
```
GET /filter?type=programming
```

**Example**
```
https://jokes-api-t9b8.onrender.com/filter?type=programming
```

**Responses**
- 200 → Returns array of jokes
- 400 → Type query missing
- 404 → No jokes found for this type

---

## 4️⃣ Add New Joke

**Endpoint**
```
POST /set
```

**Body (JSON)**
```json
{
  "type": "programming",
  "setup": "Why do programmers prefer dark mode?",
  "description": "Because light attracts bugs."
}
```

**Responses**
- 201 → Returns created joke
- 400 → Missing required fields

---

## 5️⃣ Update Entire Joke (PUT)

**Endpoint**
```
PUT /update/:id
```

**Body (JSON)**
```json
{
  "type": "general",
  "setup": "Updated setup",
  "description": "Updated description"
}
```

**Responses**
- 200 → Returns updated joke
- 400 → Invalid input
- 404 → Joke not found

---

## 6️⃣ Partially Update Joke (PATCH)

**Endpoint**
```
PATCH /upgrade/:id
```

**Body (JSON)**
```json
{
  "setup": "New setup only"
}
```

**Responses**
- 200 → Returns updated joke
- 400 → Invalid ID
- 404 → Joke not found

---

## 7️⃣ Delete Joke

**Endpoint**
```
DELETE /delete/:id
```

**Responses**
- 200 → Returns deleted joke
- 400 → Invalid ID
- 404 → Joke not found

---

# 🛠 Tech Stack

- Node.js
- Express.js
- Render (Deployment)

---

# ⚠️ Important Notes

- All IDs must be numeric.
- POST and PUT requests require a JSON body.
- PUT requires all fields.
- PATCH allows partial updates.

---

# 👨‍💻 Author

Haazim
