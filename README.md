<div align="center">

  <img src="/public/logo.png" alt="logo" width="200" height="auto" />

  <h1>Full Stack Movie Application with NEXT.JS 13!</h1>

  <p>
Full Stack Movie Application with NEXT.JS 13!(Next.js 13, mongodb, node js, NextAuth.js v4, Tailwind CSS, framer-motion, TMDB Api, Google Authentication, primary information about a movies, Users can Add Bookmark in favorite actors and movies)
  </p>

<!-- Badges -->

<a href="https://jj-movie-night.vercel.app/" target="_blank">![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)</a>
![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/github/forks/https:/jeffjiang13/movie-night.svg)
![](https://img.shields.io/github/stars/https:/jeffjiang13/movie-night.svg)
![](https://img.shields.io/github/issues/https:/jeffjiang13/movie-night)
![](https://img.shields.io/github/last-commit/jeffjiang13/movie-night)

<h4>
    <a href="https://jj-movie-night.vercel.app/">View Demo</a>
</h4>
</div>

<br />

<!-- Table of Contents -->

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)


## :star2: About the Project




## <a href="https://jj-movie-night.vercel.app/" target="_blank">LIVE DEMO 💥</a>

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://www.themoviedb.org">The Movie Database (TMDB)</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">Node Js</a></li>
    <li><a href="https://expressjs.com/">express</a></li>
    <li><a href="https://www.mongodb.com/">mongoDB</a></li>
  </ul>
</details>

<br />

<table>
    <tr>
        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/183096870-fdf58e59-d78c-44f4-bd1c-f9033c16d907.png" alt="Google" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="" width="30" height="30" /></a>
        </td>
                                <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/181918664-569af962-756c-438c-b350-294f042e6f61.png" alt="" width="30" height="30" /></a>
        </td>
                                            <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/204170976-0e5c6e2a-2b41-483d-adbd-d5d1e40b8d15.png" alt="" width="30" height="30" /></a>
        </td>
    </tr>
</table>


### :gear: Installation

Install my-project with npm

```bash
npx create-next-app@latest my-project --typescript
```

```
cd my-project
```

Install dependencies

### :test_tube: Install Tailwind CSS with Next.js

#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
