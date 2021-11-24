# Clean-It-Up
A website for improving Cleanliness.

## Description
Clean It Up is a web-based application that will allow users to report/request any sanitation-related task. This task will be completed by one of the Sanitation workers. Finally, after completion of the job and verification by the admin job will be marked closed.

![image](https://user-images.githubusercontent.com/56028103/143193023-8ef07ef2-aa40-4670-b2e4-683ae4e56aa1.png)

## Motivation
With the rising importance of Cleanliness and Sanitation after the launch of the Swachh Bharat Mission in India, existing methodologies cannot deal with this problem efficiently.
Tackling this problem is of utmost importance because with such a large population, if cleanliness and sanitation are not appropriately done, an outbreak of many diseases such as dengue, plague, etc. can take a severe hit on our population. Clean It Up will solve inefficient and lousy cleaning/garbage collection performed by authorities with no one to monitor them and manage them properly.

## Main Features
- Different Panels for User, Worker and Admin
- Login for User, Worker and Admin.
- Register for new Users and Workers.
- Upload the Image of cleanliness job along with description.
- Rate the work done by worker
- Jobs will be displayed along with descriptiona and image to worker for acceptance.
- Worker can choose option to leave accepted job.
- View and Edit profile funtionality.
- Admin can montor job uploaded as well as completed.
- Only verified Workers by admin will be able to accept jobs.

## Technologies and Packages Used

### 1. Frontend

1. React
2. Bootstrap
3. Google Maps API

### 2. Backend

1. Node
2. Express
3. MongoDB
4. Mongoose
5. JWT
6. Bcryptjs

## Local Setup

Clone the frontend and backend repositories, cd into them individually, and then follow the below mentioned steps for setting up backend and frontend seprately.

### 1. Frontend

1. Run `yarn install`.
2. Generate your Map API key using this [link](https://console.cloud.google.com/google/maps-apis/overview?pli=1) and replace it with the keys in index.html & Map.js files of frontend.
3. Change backend port in App.js file if you change it in backend, by default the backend is setup to run on port 3000.

### 2. Backend

1. Run `npm install`.
2. We used MongoDB Atlas for hosted database, you can have a local database if you want but we recommend using Atlas. If you are using Atlas replace your database link in keys.js file of backend.
3. Set your JWT secret in keys.js file of backend.

Run `npm start` in the Backend repo first and then in Frontend .

