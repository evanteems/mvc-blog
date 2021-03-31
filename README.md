# mvc-blog

# Table-of-Contents
   1.[Description](#description)
   2.[Installation](#installation)
   3.[Usage](#usage)
   4.[License](#license)
   5.[Contribution](#contribution)
   6.[Questions](#questions)

# Description
This is a basic Blog site CMS-style that was creared using the following: Model, View, and Controller paradigm. This localhost site is currently hosted on the [Heroku](https://dashboard.heroku.com/apps/mvc-b) site in the deployment and can locally ran using the files provided in the github repository. To learn howe to locally run this server, continue reading to the [Installation](#install) and [Usage](#usage) sections/

This appllication was created using the following: Node.js, express (for the server), and sequelize to connect to the mysql database entitled "tech_blog_db". All user, post, and comment data will be stored in "tect_blog_db". This live app is currently deployed on Heroku, using the JAWSDB ass on to store data. All passwords have been encrypted using 'bcrypt' Node.js packages. The HTML views templates are generated using Handlebars.js

# Installation

1. Navigate to the Github repository (https://github.com/evanteems/mvc-blog) from your web browser and click the green dropdown menu thats says "CODE". Copy the SSH ket to you clipboard and navigate to your terminal
2. From your terminal navigate to your desktop, then write the following "git clone" then paste the repository from your termainal then press enter. This repositroy will be put in you desktop titled "mvc-blog" containing all the necessaruy files to help you get started. All you need our the modules/dependencies to get it fully functioning!
3. This application requires Node.js to use this properly, so you will have to install node form your computer. Node_modules to operate, edit, and.or run the server locally. Once you have sucessfully installed Node, navigate to the root of the selected project. For a quick and easy solution, click the top tab thats called "terminal" and select the option "Open in Integrated Terminal".
4. Type the following command to install the proper node_modules: "npm install".
5. "node_modules" should have downloaded fresh and new files sucessfully! Now you need the dependencies. the following dependencies that yoo will need to properly install are "bcrypt", "express", "express-session", "express-handlebars", "connect-session-sequelize", "mysql2", "dotenv", and "sequelize". To get these to install please write the following: "npm install <package-name>" to install all the missing packages.
6. Now that you have sucessfully cloned the repository and downloaded Node.js and all it's necessary modules/dependencies, you are ready to run this server locally! Move onto the [Usage](#usage) section to properly run the seeds and the database!

# Usage
Users that wish to use this site are allowed to view the homepage and current blog posts, but they are not allowed to create or interact with other blog posts until they have signed in. Click the "login" button on the navbar will take you to the user to a page that ask them to either log in or create a new user account. Once the user has created said account or an existing users information id ented, you will be signed in sucessfully. Now you will be able to create and edit posts! After a couple of hours the session will end, which logs you out 

If you wish to run this server locally, you must first vreate and seed your MySQL database. But before you create and seed such database, you will need to create a .env file

To create this file you will need to right click the directory and click "add new file". Name your new file ".env" and populate this file with the following information:

DB_NAME=tech_blog_db

DB_USER=<your mysql username>
    
DB_PW=<your mysql password>
    
Once your .env file has been created and populated, you will now be able to run the source command using MySQL. Log into mysql by typing in the following code in your terminal "mysql -u <your mysql usermane -p>". Enter your password (if you dont just press enter again). Once you have logged into your mysql write the following command "source db/schema.sql". When this finishes you will no longer need mysql. So go aheads and type "quit;" in the terminal and it should log you out.
    
Now that your database and tables have been created, the next thing that you need to do is run the seeds to populate the mock info. In the terminal of your root directory, run this command "npm run seeds".

After the database has been sucessfully seeded with informationd you are now able to edit, view, and make new posts using your local server. To start this server type locally, run the following command "npm run start" in your intergrated terminal. Now navigate to your browser and type (https://localhost:3001/). This will take you the homepage that at first glance will display other peoples blogs.

Here are some screenchots to demonstrate the functionality of the rendered page:


The Home Page:
![Screenshot (10)](https://user-images.githubusercontent.com/74634325/113138109-37343b00-91da-11eb-8e25-b9be0b744f4a.png)
The Login Page:
![Screenshot (11)](https://user-images.githubusercontent.com/74634325/113138165-45825700-91da-11eb-8455-0923498a39ec.png)
The Signup Page
![Screenshot (12)](https://user-images.githubusercontent.com/74634325/113138200-5337dc80-91da-11eb-9f8c-73b492a66bad.png)
Logged in with new Post:
![Screenshot (13)](https://user-images.githubusercontent.com/74634325/113138335-85493e80-91da-11eb-8b6c-200e288dd318.png)


# License
MIT license Copyright

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software with restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS:, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE

# Contribution
Expanding more on the project is definitely a must. Fixing a couple of bugs here and there and fixing the styling would make this look a little better and more page friendly. But before contributing please read the entire README.md file for my github. My github will be added in the final section of the README.md in [Questions](#questions).

# Questions
For more questions or concerns regarding this projector any collaborations in the future, please contact the author of this Github repo at (https://github.com/evanteems).
