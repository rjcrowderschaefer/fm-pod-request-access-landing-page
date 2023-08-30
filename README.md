# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "This field cannot be blank"
  - The email is not formatted correctly should show "Oops! Please check your email"
- Receive a validation message when the form is successfully completed if:
  - The `Email address` field accepts a valid email address structure
  - A valid submission should show "Thank you! We've received your request."

### Screenshot

![Mobile](https://i.imgur.com/oFbChni.png)
![Tablet](https://i.imgur.com/56pxiEQ.png)
![Desktop](https://i.imgur.com/4BEGeH6.png)
![Desktop - "Request Access" active button](https://i.imgur.com/UFZVEeO.png)
![Desktop - Empty input error message](https://i.imgur.com/EU9KgTM.png)
![Desktop - Incorrect email format error message](https://i.imgur.com/WU8ZO5t.png)
![Desktop - Successful form submission message](https://i.imgur.com/Xsn73Sq.png)

### Links

- [GitHub Repo](https://github.com/rjcrowderschaefer/fm-pod-request-access-landing-page)
- [Live Site URL](https://main--helpful-nasturtium-92c491.netlify.app/)

## My process

I used a mobile first approach using CSS Grid to create the initial layout for the site. Once the mobile layout was complete, I moved on to the tablet layout and then the desktop layout adding breakpoint specific media queries to the CSS as necessary. I leveraged semantic HTML where possible, including header, article, aside and footer elements when building out the grid properties. I leveraged javascript for the form validation, including media query matching to manipulate where the messages display given that the locations differed from the mobile and tablet/desktop layouts.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- VanillaJS

### What I learned

I found myself stuck at two primary points during the development of this project. The first was working with the SVGs for the podcast companies -- specifically how to size the for the mobile layout. My previous exposure to working with SVGs was limited and I found it very challenging to resize them given that the standard use of width and height wasn't as straightforward as it is usually is. I ended up using viewBox with each SVG to ensure they filled the entire container and then sized the container accordingly depending on the logo width and design breakpoint. The second challenge I faced was implementing the validation and error messages using Javascript -- primirily how to adjust the location of the messages given the design breakpoint. The solution to this challenge led me to the matchMedia() javascript method which allowed me to create variables to align with the media query breakpoints in my CSS and write a function to target specific functionality (in this case where the messages are displayed) based on the screen width. This was a really cool discovery.

```html
<svg
              class="social-icon"
              id="pocket-icon"
              width="130"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 130 30"
            >
```
<!-- Leveraging the viewBox attribute with some of the SVGs in the HTML allowed me to achieve the correct sizing for each design breakpoint. -->

```css
body::before{
  content: "";
  background-image: url("./assets/mobile/image-host.jpg");
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.075;
  z-index: -1;
}
```
<!-- It was difficult finding the best way to include the semi-transparent background image on the mobile breakpoint to cover the entire screen without interferring with the other elements on the page. By adjusting the z-index of the body::before to -1 and the z-index of the body to 0 I was able to display the background image as expected while also allowing for interaction with the elements on the page (request access button, etc). -->

```js
function validate() {
    hideAllErrors();
    if (mediumMediaQuery.matches) {
        if (!email.value) {
            requiredError.style.display = 'block';
            email.style.marginBottom = '0px';
        } else if (!validateEmail(email.value)) {
            emailError.style.display = 'block';
            email.style.marginBottom = '0px';
        } else {
            validSubmission.style.display = 'block';
            email.style.marginBottom = '8px';
        }
    } else if (largeMediaQuery.matches) {
        if (!email.value) {
            requiredError.style.display = 'block';
            email.style.marginBottom = '0px';
        } else if (!validateEmail(email.value)) {
            emailError.style.display = 'block';
            email.style.marginBottom = '0px';
        } else {
            validSubmission.style.display = 'block';
            email.style.marginBottom = '8px';
        }
    } else {
        if (!email.value) {
            formContainer.style.position = 'relative';
            requiredError.style.display = 'block';
            requiredError.style.position = 'absolute';
            requiredError.style.top = '40%'
            email.style.marginBottom = '25px';
        } else if (!validateEmail(email.value)) {
            formContainer.style.position = 'relative';
            emailError.style.display = 'block';
            emailError.style.position = 'absolute';
            emailError.style.top = '40%'
            email.style.marginBottom = '25px';
        } else {
            validSubmission.style.display = 'block';
            email.style.marginBottom = '15px';
            validSubmission.style.marginTop = '10px';
        }
    }
}
```
<!-- It was really helpful to walk through the creation of this function step-by-step based on what I was trying to achieve. I was also introduced to the matchMedia() method which allowed me to implement the desired functionality based on the screen dimensions. -->

### Continued development

I developed this project to be as responsive as possible across all screen sizes. I'm becoming more familiar with this approach for screen widths but need to continue to focus on how to ensure the best look and feel for vertical responsiveness.

## Author

- LinkedIn - [RJ Crowder-Schaefer](https://www.linkedin.com/in/rjcrowderschaefer/)
- Frontend Mentor - [@rjcrowderschaefer](https://www.frontendmentor.io/profile/rjcrowderschaefer)
- GitHub - [@rjcrowderschaefer](https://github.com/rjcrowderschaefer)