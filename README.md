# nodb

This is my no database project for devmountain. Here is the rubric and how I met each criterion.

## noDB Rubric
1. REQUIRED - One stateful component, not counting App.js

   *A stateful component is defined with class extends Component and must contain state. The state must be modified somewhere.*

   The following files in my project contain stateful components (other than App.js):

   + src/views/AddEvent.js
   + src/views/ModifyEvents.js
   + src/views/UpdateEvent.js

2. REQUIRED - One stateless functional component

   *A stateless functional component, or an SFC, is simply a function. Learn more here --> https://reactjs.org/docs/components-and-props.html*

   The following files in my project contain SFCs:

   + src/views/Day.js
   + src/views/DisplayEvent.js
   + src/views/Month.js
   + src/views/Week.js
   + src/views/WeekHeading.js
   + src/views/Year.js

3. REQUIRED - One GET endpoint in Express

   *A GET endpoint should return some data that you show on your website.*

   All of my Express endpoints are in my be/server.js file. I actually ended up using two get endpoints:
   
   + GET /all-events/
   + GET /events 

4. REQUIRED - One endpoint that uses req.body
   
   *To use req.body, you'll need a POST, PUT, or PATCH. If you use another HTTP verb, get it approved by your mentor first.*
   
   I have two endpoints that use req.body:
   
   + POST /events
   + PUT /events/:id
   
5. Each component above minimum
   
   *Define and use multiple components!*
   
   Since I have three stateful components and 6 SFCs where one of each was required, I should be good for 4 points here.
   
6. Use a single component more than once
   
   *This means if you define e.g. an <Icon> component, you rendered it in 2+ places in the website. You would receive 2 points for 2+ uses of <Icon>. If you also defined e.g. <ListItem> and rendered it 2+ times, you would receive another 2 points, for a total of the maximum 4 points. A good place to render ListItem components would be in a loop or .map().*
   
   I did this in a nested way. Each Week component contains 7 of the Day components. Each Month component contains 6 of the Week components. Each Year component contains 12 of the Month components. For example, on the year page it renders a total of 1 Year, 12 Months, 72 Weeks, and 504 Days rendered at once. Many of the weeks and days are actually redundant, but I did it this way because it was easier and it's a pretty common calendar format.
   
   I should be good for 4 points here.
   
7. URL parameter
   
   *URL parameters are like the :id in /api/books/:id.*
   
   Two of my endpoints take :id parameters: DELETE  /events/:id and PUT /events/:id
   
   I believe I should be good for 1 point here, or 2 if they count as separate parameters.
  
8. Query string parameter
   
   *Query string parameters are like the name (and associated value) in /api/books/search?name=harry.*
   
   My GET /events endpoint takes a query string parameter of id. That should be good for 1 point.
   
9. External web API, per endpoint used
   
   *API is a broad term, but we mean web requests using axios or similar. The simplest definition is axios is needed to obtain/mutate data. You get 2 points per endpoint. You could do different requests from a single API (not counting URL or query string parameters), or one or more requests from multiple APIs.*
   
   I did not use any external web APIs.
   
9. Full CRUD

   *Full CRUD means create, read, update, and delete, aka POST, GET, PUT/PATCH, DELETE from your own server.*
   
   I did implement all of these. The backend create, read, update, and delete functions are found in my be/events.js file. Their frontend counterparts are in my src/data/api.js file.
   
   That should be good for 4 points.
   
So by my count the total will be 14 or 15 additional points for a total of 30 or 31.
