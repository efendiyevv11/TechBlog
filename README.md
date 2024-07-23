# Tech Blog

A basic website for posting and viewing blog entries.

## Overview

This project is a simple blogging platform with both backend and frontend components. The backend is built using Spring Boot, while the frontend is created with HTML, CSS, and JavaScript.

## Features

### Backend

The backend is developed using Spring Boot and includes the following components:

1. **Model**: Contains the data model for the blog posts.
    - `Post.java`

2. **Repository**: Handles operations with MongoDB.
    - `PostRepository.java`

3. **Service**: Contains the logic for managing posts.
    - `PostService.java`

4. **Controller**: Exposes RESTful endpoints for interacting with the blog posts.
    - `PostController.java`

### Frontend

The frontend provides a minimalistic interface where users can:
- Add a new blog post.
- View all added blog posts under the "Added Posts" section.

### Current Problems

Due to lack of time, the JavaScript code for fetching data between the backend and frontend is not fully functional. As a result:
- The frontend does not display posts fetched from the backend.
