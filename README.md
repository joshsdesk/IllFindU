# 🏆 Candidate Search App

A **React + TypeScript** application that allows users to search for potential candidates using the **GitHub API**, save profiles, and manage a list of saved candidates.

## 🚀 Features
- 🔍 **Fetch Random GitHub Users** – Browse randomly selected public GitHub profiles.
- ✅ **Save Candidates** – Add candidates to a saved list for later review.
- ❌ **Reject Candidates** – Skip candidates without saving them.
- 💜 **Saved Candidates Page** – View and manage all accepted candidates.
- 🛢 **Remove Candidates** – Delete saved candidates from the list.
- 🌐 **404 Page** – Handles invalid routes with a friendly error message.
- 🎨 **Dark Mode UI** – Styled with a professional dark theme.

---

## 🛠 How It Works
### **🔎 Candidate Search Page**
- **On load**, a random **GitHub user** is displayed.
- Clicking **`+` (Accept Candidate)** → Saves the candidate and loads a new one.
- Clicking **`-` (Reject Candidate)** → Skips the candidate and loads a new one.

### **📂 Saved Candidates Page**
- Displays a **list of accepted candidates**.
- Clicking **"Remove"** deletes a candidate from the list.
- The list is **stored in local storage**, so it remains after refreshing.

### **🚨 404 Page**
- If the user visits an unknown route, they are redirected to a **friendly error page**.

---

## 🖥️ Live Demo
🔗 **[Deployed App on Render](#)**  
_(Replace `#` with the actual deployed link after deployment.)_

---

## 🖼️ Screenshots
🎯 Candidate Search Page  |

![Candidate Search Screenshot](./src/assets/images/Candidate%20Search.png)

| 🎯 Candidate Search Page  |

![Saved Candidates Screenshot](./src/assets/images/Saved%20Candidate.png)

---

## 🛠 Installation & Setup
To run the app locally:

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/candidate-search.git
cd candidate-search
```

### **2.Install Dependencies**
```sh
npm install
```

### **3. Create a `.env` File**
Create a `.env` file in the project root and add:
```
VITE_GITHUB_TOKEN=your_github_pat_here
```
🚨 **DO NOT** share or commit this token! It is used to authenticate GitHub API requests.

### **4. Start the Development Server**
```sh
npm run dev
```
The app will open at **http://localhost:5173/**.

---

## 🛀 Deployment
### **Deploy to Render**
1. Push your latest code to **GitHub**.
2. Go to **[Render](https://dashboard.render.com/)** and create a **new web service**.
3. Select your GitHub repository.
4. Add the **build command**:
   ```sh
   npm install && npm run build
   ```
5. Add **`VITE_GITHUB_TOKEN`** as an **environment variable** in Render.
6. Click **Deploy** and wait for it to go live!

---

## 📂 API Reference
This app uses the **GitHub REST API** to fetch user data:
- `GET https://api.github.com/users?per_page=10&page={random_page}` → Gets a random set of public GitHub users.
- `GET https://api.github.com/user/{id}` → Fetches details for a specific GitHub user.

📚 More info: [GitHub API Docs](https://docs.github.com/en/rest/users/users)

---

## 💡 Future Enhancements
- 🔎 **Search for specific skills or keywords**.
- 📊 **Filter saved candidates by company, location, or followers**.
- 📝 **Sort saved candidates alphabetically**.
- 👽 **User authentication (OAuth)** to save profiles across devices.

---

## 👥 Contributing
Want to improve this project? **Fork it**, create a branch, and submit a **Pull Request**!

---

## 📜 License
This project is licensed under the **MIT License**.


