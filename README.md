📖 Project Overview

This project demonstrates containerization of a backend web application using Docker and Docker Compose.
A simple Node.js CRUD API is built and connected to MongoDB using a multi-container setup.

Steps to run the code in docker:
    - docker compose up --build 
        // this will build our images and run the container
        // Also if facing error while building remove nodemon and package-lock.json
    - docker ps -a 
        // Check our containers
    - docker logs container-id
        // check backend app if shows mongodb connected

    http://127.0.0.1:8080/
        // Hit this in browser and perform CRUD operation.

```===================================================================================
    Note: If it is not working because of any reason please reach out to me 
        Anil Sen (anil.sen@nagarro.com)
===================================================================================
```
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
```
project-root/
├── backend/
│   ├── Dockerfile
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── models/
│       ├── app.ts
│       └── server.ts
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   │   ├── index.html
│   │   └── style.css
│   └── src/
│       └── app.js
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

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

⭐ Bonus
    Database service (MongoDB) added
    Backend configured to interact with MongoDB using Docker Compose

✅ Assignment Completion Status
    ✔ All required assignment tasks completed
    ✔ Bonus question implemented
    ✔ Fully documented
    ✔ Linux CLI used via WSL


Advance Assignment:
    Additional Points to run advance level of assignment:
        1. Run this compose file -> docker compose up
        2. Listen the browser to http://localhost:8080/
        3. Perform CRUD operations.
        4. Go to browser listen on http://localhost:3100/ready - wsit for it to ready
        5. Got to browser again and open http://localhost:3001
        6. Explore the logs 

        If not working connect with me-> anil.sen@nagarro.com

    Points Which i have extendedas per assignment:
        1. Added nginx.conf
        2. Update docker file of backend to create secure, multistage, and small size fast build.
        3. Update compose file to add network, overlay network, swarm mode, replicas, restart, container privillage.

