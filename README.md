# Grubhub +: Personalized Online Food Delivery Recommendation Engine

## Team Members
**Backend**:
- Pengrui Fan
- Haocheng Liu

**Frontend**:
- Hang Ji
- Xinyu Chen

## Project Overview
Grubhub + is a full-stack Spring Boot application designed to provide users with restaurant recommendations in their vicinity. Not only can users explore nearby restaurants and their popular dishes, but they can also receive restaurant recommendations tailored to their tastes. Moreover, for those traveling abroad, we've integrated DeepL APIs to translate restaurant menus into a user's preferred language. 

### Features
- **Search & Recommendations**: Easily search available restaurants nearby and get personalized recommendations based on user order history.
- **Language Translation**: Leverage DeepL APIs to translate restaurant details to users' preferred languages.
- **Real-time Grubhub Resources**: Fetch real-time resources using Grubhub API.
- **Content-Based Recommendation**: Implements content-based recommendation algorithms by extracting order information from Grubhub resources.
- **Data Storage**: Uses either MongoDB or MySQL for storing user-generated data, such as order histories, and Google Cloud Storage for storing multi-type files, like restaurant-related pictures.
- **User Authentication**: Integrated registration, login, and logout functionalities with Spring Security.
- **User-Friendly UI**: Engaging frontend design using React and Ant Design.

## Technical Stack
- **Backend**: Spring Boot, Spring Security
- **API Integration**: Grubhub API, DeepL APIs via OpenFeign HTTP client
- **Database**: MongoDB/MySQL, Google Cloud Storage
- **Frontend**: React, Ant Design



