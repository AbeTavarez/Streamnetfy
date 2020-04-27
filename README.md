# Streamnetfy <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

> I plan to use the TV Maze API to create a website for people to search about TV shows.
>
> The user will be able to search and see all the information available about the shows and where to watch them.
>
> I'll be using Axios and Jest to build my app.

<br>

### Overview

_**Streamnetfy** is a website that can help you to find a new tv show for you to watch and where to watch it._
_Get show rating, gender, images, network, show summary and more._
_Dive into millions of shows info and find your next favorite show._
_All in one place with a very user friendly design._

<br>

### Wireframes

> Wireframes section desktop, tablet and mobile views.

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1588016434/Screen_Shot_2020-04-27_at_3.17.46_PM_aizegs.png)

- Desktop Landing

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1588016430/Screen_Shot_2020-04-27_at_3.25.53_PM_kgyyyp.png)

- iPad / Table

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1588016428/Screen_Shot_2020-04-27_at_3.39.09_PM_kjnxf9.png)

- iPhone / Mobile

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1588016437/Screen_Shot_2020-04-27_at_2.55.17_PM_irm0qv.png)

- Wireframe

<br>

### MVP

> The Minimum Viable Product

_**Streamnetfy** MVP user should be able to see random tv shows display in the main page and also user should have the ability to search for tv shows and see all information about the show that is available._

<br>

#### Goals

- _Find a reliable APi._
- _Create a website to retrive data from API and display data to the user using React and other libraries._
- _Allow the user to search for shows and see all the info available to them._
- _Apply CSS or other CSS libraries to styled the site and media queries for different devices._

<br>

#### Libraries

> Supporting libraries and their role in the project.

|   Library    | Description                                       |
| :----------: | :------------------------------------------------ |
| React Router | _Allow single page site to have multiples paths._ |
|    Axios     | _Helps to create Api calls easier._               |
|     Jest     | _App testing TDD._                                |

<br>

#### Data

> API(s), and sample URL queries.

|   API   | Quality Docs? | Website              | Sample Query                                 |
| :-----: | :-----------: | :------------------- | :------------------------------------------- |
| TV Maze |      yes      | _www.tvmaze.com/api_ | _http://api.tvmaze.com/search/shows?q=girls_ |

<br>

![Postman](https://res.cloudinary.com/abetavarez/image/upload/v1588009559/Screen_Shot_2020-04-27_at_1.16.51_PM_su5h0p.png)

- Mobile Resource Index

<br>

#### Component Hierarchy

> React components and the data architecture.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Search.jsx
      |__ Show.jsx
      |__ About.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Further depth regarding your components.

| Component  |    Type    | state | props | Description                                                       |
| :--------: | :--------: | :---: | :---: | :---------------------------------------------------------------- |
|   Header   | functional |   n   |   n   | _The header will contain the navigation and logo._                |
| Navigation | functional |   n   |   n   | _The navigation will provide a link to each of the pages._        |
|   Search   | functional |   n   |   n   | _The search will allow user to search._                           |
|  TV Shows  |   class    |   y   |   n   | _The tv shows will render the tv shows using tv show in flexbox._ |
|  TV Show   | functional |   n   |   y   | _The tv show will render the show info via props._                |
|   About    | functional |   n   |   n   | _The about will contain info about the developer etc._            |
|   Footer   | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._  |

<br>

#### Component Estimates

> Estimate the time necessary to build out each of the components as described above.

| Task       | Priority | Estimated Time | Time Invested | Actual Time |
| ---------- | :------: | :------------: | :-----------: | :---------: |
| Header     |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Navegation |    H     |     4 hrs      |     0 hrs     |     TBD     |
| Search     |    H     |     4 hrs      |     0 hrs     |     TBD     |
| TV Shows   |    H     |     6 hrs      |     0 hrs     |     TBD     |
| TV Show    |    H     |     8 hrs      |     0 hrs     |     TBD     |
| About      |    L     |     3 hrs      |     0 hrs     |     TBD     |
| Footer     |    H     |     3 hrs      |     0 hrs     |     TBD     |
| TOTAL      |          |     31 hrs     |     0 hrs     |     TBD     |

<br>

#### Helper Functions

> Document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

> Ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Add user account and auth capabilities._
- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

---

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
