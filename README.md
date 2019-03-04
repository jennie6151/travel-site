# Interactive Frontend Development Milestone Project:
### Building a single page application that relies heavily on one or more api

## License
This project is licensed under the MIT License - see the [license.txt](license.txt) file for details

## Author & contributor list
*Jennifer Dick*

## Table of contents
1. [Overview](#overview)
2. [Deployment](#deploy)
3. [Features](#features)
4. [Technology used](#tech)
5. [Testing](#testing)
6. [Versioning](#version)
7. [Acknowledgements and credits](#credits)

<a name="overview"></a>
## Overview
### What is this website for?
This is a site that calls on the Google Maps API and the Google Places API to allow users to search for their holiday and travel needs.

### What does this website do?
This website is motivated by the brief provided by [The Code Institute](https://codeinstitute.net/) and uses the criteria supplied. It was imperative that I create a site that helps users to:
* Select a destination country/city
* Find tourist attractions
* Find accommodation
* Find bars and restaurants
* I also added travel as a filter option as I felt this was an enhancing feature on a travel site.

### How does it work?
This website uses the **Google Maps api** and the **Google Places api** allowing users to search for their travel needs.

The site uses plain **HTML** and **CSS** to route users to search and filter destinations which, depending on their search style, controls which **JavaScript** to execute.

The **Google Maps api** and **Google Places api** relies on **JavaScript** and **JQuery** to search, filter and display the user results.

I applied **Google Places api: types** to the site so that the relevant place types could be filtered.

The site is styled with **Bootstrap** and I have made the site responsive so users can use this single page application whilst on the go.

<a name="deploy"></a>
## Deployment
1. Enable GitHub Pages on GitHub settings.
2. Select Master Branch
3. GitHub URL is then produced. Copy this.
4. If deploying to own infrastructure replace api key with your own on index.html.
5. Add copied URL to Google API Console. Both the Google Maps and Google Places API need to be enabled.
5.1 Go to Google Cloud Platform Console
5.2 Select project
5.3 Select 'APIs'
5.4 Select API under 'Enabled APIs'
5.5 Select 'Credentials'
5.6 Select relevent API key
5.7 Scroll to 'Accept requests from these HTTP referrers (web sites)' and add copied URL.

<a name="features"></a>
## Features
* Eye catching index page
* Large easy to see and use search box
* Large Google map - filling lower half of index page so site purpose is evident immediately
* Clear search results

### Features left to implement
* None

<a name="tech"></a>
## Technology used
* [Balsamiq](https://balsamiq.com/)
    * Used to create mock ups of the site which have been uploaded as PDF files
* **Html**, **CSS** and **JavaScript**
    * Base languages used to create the site
* [Cloud9](https://c9.io/login)
    * Code editor used to write above code
* [JQuery](https://jquery.com/)
    *
* [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/)
    * Web framework used to help style this single page application
* [Google maps api](https://developers.google.com/maps/documentation/)
* [Google places api](https://developers.google.com/places/web-service/intro)
* [Github](https://github.com/)
    * Platform used to host my versioning
* Other resources used: [Fontawesome v5.7.2](https://fontawesome.com/), [Googlefonts](https://fonts.google.com/)

<a name="testing"></a>
## Testing
* HTML code checked via a [HTML code validator](https://validator.w3.org/)
* CSS code checked via a [CSS code validator](https://jigsaw.w3.org/css-validator/)
* Asked colleagues, friends and family to check this site and access from their own devices; any small changes were made and committed.
* Used a [website response tool](https://www.responsinator.com) to test how well the website responded to different device sizes.
*  Checked every feature worked (and looked consistent) in:
    * Google Chrome
    * Internet Explorer 10
    * Microsoft Edge
    * Opera
*  Used incognito mode on **Google Chrome** to remove all cached data.

## User stories as part of testing
As a user I want to...
1. search 'Bath' and find Accommodation. Test performed and true.
2. search 'Bath' and find Accommodation and click on a result and it highlight on the map. Test performed and true.
3. search 'Bath' and find Accommodation and then change type to Restaurants and my search to be updated. Test performed and true.
4. search 'Bath' and find Accommodation and then type 'Bristol' and my search to be updated. Test performed and true.
5. search 'Sutterby' and find no results for any search. Test performed and true.

<a name="version"></a>
## Versioning
I used **Git** for versioning on this project. And hosted this on Github.

<a name="credits"></a>
## Acknowledgments/credits
* *Antonija Šimić* - mentor.
* *Paul Lewis* - colleague (Software Developer) who tested my finished site.
* Used the Google Maps Platform Documentation throughout the project for reference

#### *MIT © 2019 Jennifer Dick*