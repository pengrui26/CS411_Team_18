# CS411_Team_18

Frontend: Hang Ji, Xinyu Chen
Backend: Pengrui Fan, Haocheng Liu

Overview of our project:
Github +: A Personalized Online food delivery  Recommendation Engine
--Designed and built a full-stack Spring Boot application for users to search available restruants nearby and their popular dished , then create a recommendations restruants lists.
--Then, call deepl apis to translate the recommendations to users' prefered languages. Because when we travel abroad, restaurants and menus are written in other languages, we need a means to translate it into a language we know.
--Retrieved real Github resources using Github API and get real time translation using  deepl apis with OpenFeign HTTP client.
--Implemented content-based recommendation algorithms for users by extracting order information from Github resources.
--Utilized Mangodb or MySQL for storing user-generated data, such as order history, and used Google Cloud Storage for storing multi-type files, like pictures related to restruants.
--Support register/login/logout with Spring Security.
--In Frontend, built a web page with user friendly UI using React and Ant Design.

