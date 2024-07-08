# Journal-Backend
This project is used to provide CRUD APIs to the Journal application in the frontend. It has been deployed in render through this [link](https://journal-backend-4g3d.onrender.com). You can also choose to install the project as follows:

## Setting up and running the backend
### 1. Prerequisites
* Ensure Node.js is installed in your machine.

### 2. Installation
* Clone the repository:
#     
    git clone https://github.com/naim-2/Journal-Backend
    cd Journal-Backend
* Install the dependencies:
#
    npm install

### 3. Running the Server
* Run the following commands to start the server:
#
    npx tsc
    npx ts-node-dev src/index.ts

## API Documentation
### 1. Registering a new user
* Endpoint: /api/auth/register
* Method: POST
* Request body:
{
  "username": "string",
  "email": "string",
  "password": "string"
}
* Response: User registered
* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/681466d3-22dc-4737-980a-6a76d7b0bd2a)

### 2. Logging in as a registered user
* Endpoint: /api/auth/login
* Method: POST
* Request body:
{
  "email": "string",
  "password": "string"
}
* Response: {
  "token": "string"
}
* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/bc6cdb69-0665-4f09-bd6e-1d3aed2d206d)

### 3. Updating username and/or password
* Endpoint: /api/user
* Method: PUT
* Header:
{
  "Authorization": "Bearer <your_jwt_token>"
}
* Request body (at least username or password must be included as not null):
{
  "email": "string",
  "username": "string",
  "password": "string"
}
* Response: User updated successfully
* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/ac6efe5a-d3fa-42ac-a829-f54bb34ad6b5)

### 4. Adding new journal
* Endpoint: /api/journal
* Method: POST
* Header:
{
  "Authorization": "Bearer <your_jwt_token>"
}
* Request body:
{
  "title": "string",
  "content": "string",
  "category": "string",
  "date": "string (YYYY-MM-DD)"
}
* Response:
{
  "id": "number",
  "title": "string",
  "content": "string",
  "category": "string",
  "date": "string (YYYY-MM-DD)"
}

* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/37b55440-6d54-4ddf-b754-ea0d13fef0b2)

### 5. Getting all journals
* Endpoint: /api/journal
* Method: GET
* Header:
{
  "Authorization": "Bearer <your_jwt_token>"
}
* Response:
[{
  "id": "number",
  "title": "string",
  "content": "string",
  "category": "string",
  "date": "string (YYYY-MM-DD)"
},
{
  "id": "number",
  "title": "string",
  "content": "string",
  "category": "string",
  "date": "string (YYYY-MM-DD)"
}]
* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/b6ca23a1-b7c6-42ce-a6e9-7ee4916a430b)

### 6. Editing existing journal
* Endpoint: /api/journal
* Method: PUT
* Header:
{
  "Authorization": "Bearer <your_jwt_token>"
}
* Request body:
{
  "id": "number",
  "title": "string",
  "content": "string",
  "category": "string",
  "date": "string (YYYY-MM-DD)"
}
* Response:
{
  "id": "number",
  "title": "string",
  "content": "string",
  "category": "string",
  "date": "string (YYYY-MM-DD)"
}
* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/c5407c8c-7e5b-4d20-b964-bac787d36065)

### 7. Deleting a journal
* Endpoint: /api/journal
* Method: DELETE
* Header:
{
  "Authorization": "Bearer <your_jwt_token>"
}
* Request body:
{
  "id": "number"
}
* Response:
{
  "id": "number"
}
* Screenshot:
![image](https://github.com/naim-2/Journal-Backend/assets/121217709/e3d4abcc-1278-4b41-a053-8f55ff1630dd)

