📖 Project Overview

This project demonstrates containerization of a backend web application using Docker and Docker Compose.
A simple Node.js CRUD API is built and connected to MongoDB using a multi-container setup.


The project covers:
- Docker image creation
- Multi-container orchestration using Docker Compose
- Container lifecycle management
- Docker Hub image push & pull
- Linux CLI usage via WSL (Ubuntu)

🛠 Tech Stack
- Backend: Node.js (Express)
- Database: MongoDB
- Containerization: Docker
- Orchestration: Docker Compose
- Registry: Docker Hub
- OS: Windows + WSL (Ubuntu)

📂 Project Structure
    project-root/
    │
    ├── src/
    │   ├── routes/
    │   ├── controllers/
    │   ├── models/
    │   └── app.js
    │
    ├── Dockerfile
    ├── docker-compose.yml
    ├── package.json
    ├── package-lock.json
    └── README.md

⚙️ Prerequisites
- Docker 20.10+
- Docker Compose 5.0.1
- Git
- Linux CLI knowledge (Ubuntu via WSL)

🚀 Application Features
- Create user
- Read user(s)
- Update user
- Delete user
- MongoDB integration
- RESTful APIs

🐳 Docker Implementation

    1️⃣ Dockerfile
    The backend application is containerized using a Dockerfile that:
        Uses Node.js base image
        Installs dependencies
        Exposes application port
        Runs the server

    2️⃣ Docker Compose (Multi-Container Setup)

    docker-compose.yml defines two services:
        user-service → Node.js backend
        mongo → MongoDB official image
    Services communicate using Docker’s internal network.

    ▶️ Run Application Using Docker Compose
    docker-compose up -d

    Verify running containers:
        docker ps

    🔍 Docker Commands Used
        docker ps
        docker ps -a
        docker logs <container_id>
        docker inspect <container_id>
        docker stop <container_id>
        docker rm <container_id>
        docker images

    📦 Docker Hub Integration

        Built backend Docker image
        Pushed image to Docker Hub
        Pulled image to verify availability

        docker push <docker-hub-username>/<image-name>
        docker pull <docker-hub-username>/<image-name>
        docker run -d -p 3000:3000 <image-name>

    🧪 Verification
        Containers started successfully
        API endpoints tested
        MongoDB connection verified
        Logs inspected using Docker CLI

    🧠 CI/CD Note (Important)
        CI/CD pipeline is not included in this project because:
        The assignment focuses on Docker fundamentals
        No deployment target (cloud/server) was specified
        CI/CD is optional and out of scope for this learning objective

⭐ Bonus
    Database service (MongoDB) added
    Backend configured to interact with MongoDB using Docker Compose

✅ Assignment Completion Status
    ✔ All required assignment tasks completed
    ✔ Bonus question implemented
    ✔ Fully documented
    ✔ Linux CLI used via WSL