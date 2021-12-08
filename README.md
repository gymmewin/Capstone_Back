# Capstone_Readme
P5 - Final Project - Capstone Tickets

Technologies Used:
------------------
* HTML
* CSS
* Bootstrap
* Javascript
* Postgres
* Express JS
* React JS
* Node JS
* Heroku
* GitHub

Approach Taken:
---------------
On the first day, I spent the whole day researching what languages and technologies were popular in my area and did informational interviews with recent grads to help me brainstorm for ideas for my final build. Once I got my idea approved, this was my approach taken...

1. First, I figured out all the things I wanted to accomplish and divided up the work between the days I had available, giving myself a few buffer days for the harder concepts.
2. I then listed out all the things I needed to do to accomplish for `MVP` and prioritized those items first. I began to research how to build a `PERN stack`.
3. After the initial research, I set up the `GitHub` repos for both my front end and back end. Then I set up the `Heroku`.
4. Build out the back end and test it locally. Then I built out the front end and tested it locally. Then I connected the two. After they were connected I deployed the app.
5. After MVP, I researched my stretch goals.

Issues Along The Way:
---------------------
1. When I was testing my front end, I was having trouble getting my add route to post to the database. I could post using `PSQL` but not using the app itself. I could console log the item I was attempting to create and it would console log correctly but it still wasn't getting added to the database. After spending a couple hours working through this on my own, then with a classmate, I had to get **Brendan** to help me. My error was the way I was using the `timestamp` property in my schema. The way I was trying to call one of timestamp methods was incorrect. Instead of using the `current_date` method, **Brendan** showed me a different timestamp method, `NOW()` to correct my issue.
2. Password encryption -  `compare` vs `compareSync` to get encrypted passwords to store properly in the database.
3. Displaying error messages when creating new user.
4. One-to-many relationships - Displaying only the items that belong to the current user.

Unsolved Problems:
------------------

Future Improvements:
-------------------

Link to my live site:
---------------------
https://capstone-tickets-frontend.herokuapp.com/
