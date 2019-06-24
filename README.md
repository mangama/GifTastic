# GifTastic

Overview

IThis project aims to use the GIPHY API to make a dynamic web page that populates with gifs of my choice. To finish this task, I must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

I started by fooling around with the GIPHY API and made se sure that I read about these GIPHY parameters: q, limit, rating.
Like many APIs, GIPHY requires developers to use a key to access their API data. I created a GIPHY account and then obtained an API Key by creating an app. 
Made sure to switch the protocol in the query URL from http to https, or the app could have not worked properly when deployed to Github Pages.


Instructions

- I started by creating an array of strings, each one related to a topic that interested me and saved it to a variable called topics.

- The app takes the topics in this array and create buttons in your HTML.

- Triedusing a loop that appends a button for each string in the array.

- Made sure that when the user clicks on a button, the page grabs only 10 static, non-animated gif images from the GIPHY API and place them on the page.
- Then when the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
- Under every gif, its rating (PG, G, so on) displays.

- Made a button to allow a user to add new buttons.

Deployment: https://mangama.github.io/GifTastic/






