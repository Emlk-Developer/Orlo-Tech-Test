# Orlo-Tech-Test
build RSS feed


## Project Overview
A straightforward project in theory, but involved several logical elements.
My approach was to split the project in two. In the first instance retrieve the data and style up the page. Secondly apply the filtering logic,
Before coding, I generated the components and created the folder structure as intuitively as possible hopefully allowing other Devs to follow along and know where everything is.


## Setup
I used the latest version of Angular 19.  Using Ng commands to build the project "npm start" will load the project (calls ng serve) .


## Technical Decisions
As the brief requested, I coded the project in Angular. This was my very first Angular project, I familiarised myself with the language through two Udemy courses. The first course covered frequently used parts, and the 2nd built a simple 'To do' list. I admittedly struggled and came up against a lot of  issues attempting to find the Angular equivalent to how I'd approach the project in React such as state management.
It seemed logical to keep the sidebar functionality within the sidebar component, but i still needed to pass the input value up to the parent app component to apply the filter 
on the actual articles. so there's a duplication of storing the input value. 
I'm not sure that was the best approach but seemed the cleanest in terms of readability

Initially when I saw the pipes available I thought I could utilise them more in handling the retrieved data but quickly learned they were not going to be the case.
I then read about creating state using services so explored that.

It was nice to explore Angular as I'd previously worked with Vue and mainly used React, so it felt like an accomplishment to have now explored a third mainstream JavaScript library.

Styling up the application came naturally and confidently carried out that task making the application responsive by default utilising display: grid. 
One of the Udemy course covered conditionally rendering classes using [ngClass] which i thought was a nice feature so implemented it on the feed cards


## Potential Improvements:
- Read more/read less button in the card to read the full feed description. - Toggle class to remove line clamp.

- Using 'slice' pipe in the Ngfor,  pass in a integer parameter from an input on the sidebar to show first 'nth' articles.

- Order the feeds to display specific categories first. 
