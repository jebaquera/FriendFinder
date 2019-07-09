# Friend Finder - Node and Express Servers

### App Overview
This activity required the building of a compatibility-based "Friend Finder" application (functionality is much like a dating app). This full-stack site takes in results from the survey that the user takes and submits. Based on these user inputs, the app will then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

- - -
### Technical Specifications
Express was implemented to handle routing. The app was deployed Heroku so users could complete and submit the survey.
NPM dependencies:
   * body-parser v1.19.0,
   * express v4.16.3

- - -
### Git Hub File Organization
* A repository named `FriendFinder` was created in Git Hub. The following folder structure was followed to facilitate the organization of directories:

  ```
  FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - .gitignore
    - composer.json
    - package-lock.json
    - package.json
    - README.md
    - server.js
  ```

- - -
### Instructions for Using the Application
1. The "Friend Finder" survey includes ten questions. Each question asks the user to select their answer based on a scale of 1 to 5. The range going from "1 (Strongly  Disagree)" to "5 (Strongly Agree)" for how much the user disagrees or agrees with a question.

2. The `server.js` file includes the required basic npm packages: `express` and `path`. Reference Technical Specifications section above for details and version numbers.

3. The `htmlRoutes.js` file inside the `routing` folder contains two routes:

   * A GET Route to `/survey` that displays the survey page.
   * A default, catch-all route that leads to `home.html` that displays the home page.

4. The `apiRoutes.js` file inside the `routing` folder contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects roughly follows the format below.

```json
{
  "name":"Ahmed",
  "image":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "responses":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Once a user complete the survey, the user's most compatible friend will be identified using the following parameters:

   * Each user's results are converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, the difference between current user's scores against those from other users are compared.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

- - -
