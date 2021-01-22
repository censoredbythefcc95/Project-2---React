# Steve's Weather Application - Overview

## Project Links

- [GitHub Link](https://github.com/censoredbythefcc95/Project-2---React.git)
- [Official Link](https://happy-golick-61a260.netlify.app/)

## Project Description

I will be building an application with React Router that will allow users to search weather information via zipcode or city. Users can input a desired ZIP Code or city, and the application will display the following elements:

- Current Temperature
- Visibility
- Sky Conditions
- Time last updated/etc

## Project Completion status

| Project Phase | Status/Notes | 
| --- | :---: |  
| Project Approval | Complete / Approved as of friday 1/15/2021 4:30PM EST| 
| Initial API Selection and Testing | Complete - Test fromweatherstack was successful. | 
| Rendering components to app.js | Complete - All components rendered with proper architecture. | 
| Determine and add State hooks | Complete - useState and Effect hooks in active use for handing state to MainDisplay. |
| Add additional hooks for context/states | Complete - No additional hooks needed at this time. |
| Pass information through props | Complete - Successfully passed API fetch through app.js. |
| CSS Styling | In Progress - Navbar complete. Working on colors and other component styling. |




## API

I will be implementing an open source API from Weatherstack to pull information regarding weather into this application. 



```
"location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-07 08:14",
        "localtime_epoch": 1567844040,
        "utc_offset": "-4.0"
```


## Wireframes

Here are the official wireframes for my weather application. The first link is the basic wireframe on the appearance of the application. The second link is the architecture framework for my React components.

- [Wireframe for Weather App](https://i.imgur.com/cnm9AeE.png)
- [React Architecture](https://docs.google.com/drawings/d/11FJsXy7JUS9SXzZjLXQqM6oizeMrJBlcIJNd5Bk4Pss/edit?usp=sharing)


### MVP/PostMVP - 5min

MVP - Project 2 Requirements per the GA Project Worksheet  

#### MVP EXAMPLE
- Be a working, interactive, React application.
- Include data from a third-party API
- Include React Router with at least 2 routes
- Have at least 5 separate components, using a readable file structure.
- Be built using Create React App.
- Built mobile first
- Implement responsive design using flexbox, grid, or another css framework.
- Use React Hooks
- Be deployed via Netlify.

#### PostMVP EXAMPLE

- Add styling to make the weather application look appealing to the user.
- Add additonal components if time permits.
- Add Javascript animations to the application. 

## Components
##### Project approved as of Friday 1/15/2021 at 4:30PM EST. Construction in progress.
##### Project has met MVP standards 1/22/2021. Styling and additional components pending. 
Initial components decided for Project. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| MainDisplay | This will hold the search bar and other components. | 
| Landing Text | Text that appears when user arrives on app. | 
| Search Bar | Allows user to input zip code or city to find the forecast. |
| Location | Renders location that user searched for. |
| Current Temperature | Renders current temperature for city selected. |
| High/Low | Renders additional information about weather for city of choice. |
| Footer | Contains footer text with creator.|


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initializing framework/app | H | 30mins| 20mins | 20mins |
| Testing API | H | 20mins| 20mins | 20mins |
| Building Components | H | 6hrs| 4.5hrs | 4.5hrs |
| API component | H | 5hrs| 3.5hrs | 3.5hrs |
| Rendering data pull from API | H | 5hrs| 4hrs | 4hrs |
| CSS Styling | M | 6hrs| 3hrs | hrs |
| Double-checking State | H | 5hrs| 3hrs | 3hrs |
| Total | H | 27.5hrs| hrs | hrs |


## Additional Libraries
I will probably use the following libraries and frameworks:

- React
- React Router
- SASS/SCSS
- Bootstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
const url = await fetch(url)
```