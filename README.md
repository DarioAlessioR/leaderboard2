![](https://img.shields.io/badge/Microverse-blueviolet)

# Project Name: 



## Requirements:

-- Phase 1:

- Set up a new project with webpack that is based on the webpack exercise you have already completed.
- Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (<div> or <ul> element). The index.html file must be set as a template using the HTML Webpack Plugin.
- Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
description [string].
completed [bool].
index: [number].
- Write a function to iterate over the tasks array and populate an HTML list item element for each task.
On page load render the dynamically created list of tasks in the dedicated placeholder. The list should appear in order of the index values for each task.
- Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.
- All your source files (index.html, index.js and style.css) must be located in /src directory and your distribution files will be generated by webpack and served by webpack dev server from /dist folder.

-- Phase 2:

- Remove all hardcoded items from the tasks array.
- Create a new JavaScript file for the new functionality.
- Implement a function for adding a new task (add a new element to the array).
- Implement a function for deleting a task (remove an element from the array).
- Implement a function for editing each task descriptions.

By default new tasks should have the property completed set to false and the property index set to the value of the
new array length (i.e. if you're adding a 5th task to the list, the index of that task should equal to 5).
Deleting a task should update all remaining items' indexes, so they represent the current list order and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) should set to 1).

All changes to the To Do List should be saved in local storage.

-- Phase 3:

- Add a new JavaScript file and import it as a module:
it will contain methods related to the status updates (completed: true / false).
- Add event listener to the checkbox (change).
- Update items object's value for completed key upon user actions.
- Implement a function for the "Clear all completed" button (use filter() method).
- Store the updated array of items in local storage, so the user gets the correct list values after the page reloads.


## Built With:

- Major languages: Javascript, HTML, CSS
- Frameworks: webpack, Jest
- Technologies used: VSC, Github

## Live Demo (if available)

"Not available"

## Getting Started:

- Please run: npm run build and then npm start to see project displayed in your browser.
- Populate the list with test cases.
- CLick the upload button (right end of input field) to save content
- Click each activity test to edit and change it
- Click three dots icon to activate trash can icon
- Click trash icon to delete activity
- Click checkbox to change status of activity from pending to completed
- Click "Clear all completed" tab to delete activities marked with checkbox 

### Prerequisites

"Not available"

### Setup

"Not available"

### Install

"Not available"

### Usage

"Not available"

### Run tests

run: npm test

### Deployment

https://darioalessior.github.io/todolist2/dist/

## Authors

👤 **Author1**

- Dario Alessio

GitHub: https://github.com/DarioAlessioR

Slack: https://microverse-students.slack.com/team/U039GCFRK9B

LinkedIn: https://www.linkedin.com/in/dario-alessio-3a3b7911b


👤 **Author2**

- Mauricio Gallegos

 GitHub: https://github.com/maury18
 
 Twitter: https://twitter.com/MauryRodrguez6
 
 LinkedIn:https://www.linkedin.com/in/mauricio-gallegos-rodr%C3%ADguez-380a96183/

👤 **Author3**

- Frederick Ankomah

 https://github.com/KingKowa


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.