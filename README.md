#  Clean-It-Up
A website for improving Cleanliness.

## :memo: Description
Clean It Up is a web-based application that will allow users to report/request any sanitation-related task. This task will be completed by one of the Sanitation workers. Finally, after completion of the job and verification by the admin job will be marked closed.

![image](https://user-images.githubusercontent.com/56028103/143193023-8ef07ef2-aa40-4670-b2e4-683ae4e56aa1.png)

## :bulb: Motivation
With the rising importance of Cleanliness and Sanitation after the launch of the Swachh Bharat Mission in India, existing methodologies cannot deal with this problem efficiently.
Tackling this problem is of utmost importance because with such a large population, if cleanliness and sanitation are not appropriately done, an outbreak of many diseases such as dengue, plague, etc. can take a severe hit on our population. Clean It Up will solve inefficient and lousy cleaning/garbage collection performed by authorities with no one to monitor them and manage them properly.

## :bookmark_tabs: Main Features
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

## :ballot_box_with_check: Prerequisites
- Node.js (version 12+)
- npm (version 6+)
- MongoDB (version 4+)

## 🚀 Technologies and Packages Used

### 1. Frontend
1. React
2. React Bootstrap
3. React Router DOM
4. Axios

### 2. Backend
1. Node
2. Express
3. MongoDB
4. Mongoose
5. JWT
6. Bcryptjs


## :arrow_down: Local Setup
Clone the Clean It Up repository, and then follow the below mentioned steps for setting up backend and frontend seprately.


```bash
$ git clone https://github.com/sushantbasak/Clean-It-Up
# navigate to the project's directory
$ cd Clean-It-Up
# install the dependencies for client
$ cd frontend/ && npm install
# install server dependencies
$ cd server && npm install
# start frontend
$ npm start
# start backend
$ npm start
```


## :construction: Local Environment Variables

For running this project locally :truck:, you need to setup and define the environment variables for both the client as well as the server.

Create `.env` files in both `client` and `server` folder with the following variables:
- Client:
	- `NODE_ENV=development`
	- `REACT_APP_DEV_API_URL=http://localhost:8000/api/`
	
- Server:
	- `NODE_ENV=development`
  	- `PORT=8001`
	- `DB_URL=mongodb://127.0.0.1:27017/clean-it-up`
	- `SERVER_URL=http://localhost:8001`
	- `JWT_SECRET=hello-world`
	- `EXPIRESIN=365d`
	- `SALTROUND=8`


**Default Ports:**
- React (or Client) - 3000
- MongoDB (or Database) - 27017  

  
## Home Page
Home page is the landing page to the users and have User, Worker and Admin Panel with Login and Register functionality.

![image](https://user-images.githubusercontent.com/56028103/143225826-e447d27d-6731-46e3-908b-653ba338cf71.png)

## Register
New Users and Workers can register by filling the registration form displayed after clicking on Register functionality in User or Worker Panel.

![image](https://user-images.githubusercontent.com/56028103/143227156-e5922253-2cd4-413c-a6cd-49b237866962.png)

![image](https://user-images.githubusercontent.com/56028103/143227222-b1ff2d23-4b19-406d-bba8-93e68a1735af.png)

## Login Page
User, Worker and Admin can login by entering correct username and password on their respective login page.

![image](https://user-images.githubusercontent.com/56028103/143226333-b0bc6ff1-b516-4004-b96d-ac5006265135.png)

![image](https://user-images.githubusercontent.com/56028103/143226401-80f829d3-951f-4d31-9c52-64c445cc76ba.png)

![image](https://user-images.githubusercontent.com/56028103/143226484-2b6179df-a510-4a91-b838-abad94271f56.png)

## User Dashboard
User Dashboard have various functionalities like creating a new job post, showing previously created job post by the user and rating the work done by worker.

![image](https://user-images.githubusercontent.com/56028103/143228498-44a319d5-d4ec-491f-9ef0-527ef2470119.png)

## Worker Dashboard
Worker Dashboard have functionalities like viewing jobs, accepting job and leaving already accepted job.

![image](https://user-images.githubusercontent.com/56028103/143228935-b6c120fc-65ff-47b4-b63a-3c44b50429e1.png)

## Admin Dashboard
Admin dashboard have option to verify worker, delete fake jobs and review the jobs completed

![image](https://user-images.githubusercontent.com/56028103/143229166-fde52e7e-5e05-45d6-9c7c-e3ecfe6c7e24.png)

## Profile
User, Worker and Admin can view and edit their profile by clicking on profile option present on the Navbar.

![image](https://user-images.githubusercontent.com/56028103/143229422-5d1a2bd4-3f23-4fca-bee2-764cc9916c00.png)




