# 👨‍💼 Employee Management System

A Full Stack CRUD web application to manage employee records, built with **Spring Boot** (backend) and **React.js** (frontend).

---

## 🚀 Tech Stack

### Backend
- Java (Spring Boot)
- Spring Data JPA (Hibernate ORM)
- REST API
- PostgreSQL

### Frontend
- React.js
- Bootstrap

---

## ✨ Features

- ➕ Add new employee
- ✏️ Edit existing employee details
- 🗑️ Delete employee
- 📋 View list of all employees

---

## 🗂️ Project Structure

```
employee-crud-fullstack/
├── employee-server/       # Spring Boot Backend
│   ├── src/
│   │   ├── main/java/     # Controllers, Services, Repositories, Models
│   │   └── resources/     # application.properties
│   └── pom.xml
│
└── employee-web/          # React JS Frontend
    ├── src/
    │   ├── components/    # React Components
    │   └── App.js
    ├── public/
    └── package.json
```

---

## ⚙️ How to Run Locally

### Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL installed and running

---

### 🔧 Backend Setup

```bash
cd employee-server
```

1. Open `src/main/resources/application.properties`
2. Update your PostgreSQL credentials:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/employeedb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Run the backend:

```bash
./mvnw spring-boot:run
```

Backend starts at: `http://localhost:8080`

---

### 🎨 Frontend Setup

```bash
cd employee-web
npm install
npm run dev
```

Frontend starts at: `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Add new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

---

## 📸 Screenshots

> _Add screenshots of your app here (optional but recommended)_

---

## 👨‍💻 Developer

**Harshal Patil**  
MCA Graduate | Java Full Stack Developer  
📍 Pune, India  
🔗 [LinkedIn](https://www.linkedin.com/in/harshal-patil-java)  
💻 [GitHub](https://github.com/Harshal005)
