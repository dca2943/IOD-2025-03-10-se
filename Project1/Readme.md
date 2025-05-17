User Login Flow

1.  User opens the app.
2.  Login screen appears
    – User creates an Account by creating a new username and new password. Or User enters their username and logs into the app.
3.  User dashboard loads
    – User can access saved itineraries, or plan their NEXT trip.
4.  Plan Trip Screen: Destination Selection, Date Selection, and Travel Party Details.
    – User types in a location. If unsure, the user can opt for a random suggestion.
    – User chooses their travel month.
    – User selects the number of travelers
5.  API Call to Server:
    Based on selections entered by user, the tool sends a request to server.
    Server processes the data, fetches an itinerary, and returns relevant results to the user.
6.  Displaying Itinerary:
    The generated itinerary is displayed to the user.
7.  Saving Itinerary:
    Users can save an itinerary for future reference under their account.

Project Requirements:
Frontend Implementation
index.html (Login/Sign up)
itinerary.html (Users dashboard to view saved itineraries)
destination.html (Type destination or randomize, select travel date, and # of travel party)
About.html (About us/Mission)
script.js (Handles frontend logic)
styles.css (Styles the HTML elements)

Backend & Data Processing
users.json (User accounts)
itineraries.json (Saved itineraries)
server.js (Node backend)
