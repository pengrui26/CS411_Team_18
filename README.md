# Twitch +: A Personalized Twitch Resources Recommendation Engine with OpenAI support

## Team 18

### Demo Link:

- https://drive.google.com/file/d/1CUPy70EKACrKXNUac8LDpMgQqIgrDia0/view?usp=drive_link

**Backend**:

- Pengrui Fan
- Haocheng Liu

**Frontend**:

- Pengrui Fan
- Hang Ji
- Xinyu Chen

## Project Overview

Twitch + is a full-stack Spring Boot application for users to search Twitch resources (stream/video/clip) and get recommendations. We also add functions to support chating with Chatgpt.

### Features

- **Search & Recommendations**: Easily search Twitch resources and get personalized recommendations based on Top Games.
- **Real-time Twitch Resources**: Fetch real-time resources using Twitch API.
- **Data Storage**: Use MySQL for storing user-generated data, such as user informations.
- **User Authentication**: Achieved login with Github account by OAuth2.
- **User-Friendly UI**: Engaging frontend design using React and Ant Design.

## Technical Stack

- **Backend**: Spring Boot, Spring Security
- **API Integration**: Twitch API, OpenAI API via OpenFeign HTTP client
- **Database**: MySQL
- **Frontend**: React, Ant Design

## To do

- **Content-Based Recommendation**: Now we implements recommandation based on Top Games. In the future, we will implements content-based recommendation algorithms based on user's favorite items in database.
