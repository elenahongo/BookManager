This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Project structure

This project was developed along whit a fully-operational internal tool API using Express.js and SQLite.
The project structure is formed by eight components which interacts with the BookManager API. 

  Book:
  Base card component used to show book information and compose search results lists and customized lists

  BookList: 
  Base list component used to compose lists of books and compose search results lists and customized lists

  CreateBook:
  A toogle form to add books using the API and database

  CreateList:
  A droppable element to customize a list by select books and set a title  
  
  SearchResults:
  A component disposed to show all the books and to filter results by tag and list 
  
  FilterBar:
  A textbox component to filter by autodetectable tags
  
  Pagination:
  A pagination component to navigate through small lists of results 

### Steps to run the project

 To run the app, you’ll need to 
 ### `npm install` 
 the database file is included

  In the project directory, you can run:
  ### `npm start` 
  and 
  ### `node server.js`
  to initiate the server 
  Runs the app in the development mode.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### browser used for this test
Google Chrome Version 81.0.4044.138 (Official Build) (64-bit)

### Did you use a npm library to manage local data storage?

  I decided to build a full API to show my skills as Full Stack Developer. 
  This was accomplished with these packages: 
    Express Node module
    SQLite3
    cors
    morgan
    errorhandler
    body-parser

### Why do you think this option is the best vs alternatives?

 I have large experience using Express.js, it provides a robust set of features whit good middleware and wide popularity in the industry.

### Please explain why did you decide to use this UI Components vs alternatives?

  I have never used this library, although I have used Bootstrap, Fundation and Materialize, but I decided to follow your recommendation

### What other libraries you had to use to accomplish the project?

  Almost all the variations of Material UI
  
### What was the most difficult to accomplish? please share your experience.

  I didn't have enough time to accomplish which I would. Errorhandler and proper feedback during loadings or confirmation messages are missing.
  A complete test suit was also out of scope.

### How much time did you spend building this test?

  2 days
