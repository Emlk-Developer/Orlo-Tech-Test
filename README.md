# OrloTechTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

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

-------------------------------------------------------------------

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
