# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   Add their email and submit the form
-   See a success message with their email after successfully submitting the form
-   See form validation messages if:
    -   The field is left empty
    -   The email address is not formatted correctly
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screen%20Shot%202024-01-28%20at%2005.48.00.png)
![](./assets/images/Screen%20Shot%202024-01-28%20at%2005.49.10.png)

### Links

-   Solution URL: [git@github.com:blackie11/newsletter-sign-up.git]
-   Live Site URL: [https://newsletter-sign-up-roan.vercel.app/]

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS
-   SCSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow

### What I learned

How to properly validate form and also manipulate the DOM to throw an error if the email input is empty and the email is spelled incorretly.
How to pass a callback function and also using javascript to change the style of an HTML dom element by toggling the classList.

```scss
.success-message {
    background-color: $white;
    max-width: 400px;
    display: none;
    border-radius: 5px;
    padding-top: 2rem;
    padding-inline: 15px;
    padding-bottom: 2rem;

    .success-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 2rem;
    }
}
```

```js
if (!isValidEmail(emailValue)) {
    const input = document.querySelector("#email");
    const label = document.querySelector(".email-address");
    const error = document.createElement("span");

    error.innerText = `Valid email required`;
    error.classList.add("error");
    label.appendChild(error);
    input.style.backgroundColor = " #ff634732";
    input.style.border = "1px solid #ff6347";
    e.preventDefault(); // Prevent form submission
} else {
    document.querySelector(".container").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
    e.preventDefault();
}
```

### Continued development

I want to develop more on more to use GRID display in CSS and also how to manipulate the DOM with adding any HTML element on my index file but by creating element

### Useful resources

-   [resource 1](https://necolas.github.io/normalize.css/8.0.1/normalize.css) - This helped me in resetting my document styles. I really liked this pattern and will use it going forward.
-   [resource 2](https://chat.openai.com) - This is an amazing AI tool which helped me finally understand how to validate a form. I'd recommend it to anyone still learning this concept.

## Author

-   Website - [Ahiakwo Great Clement](https://www.your-site.com)
-   Frontend Mentor - [@blackie11](https://www.frontendmentor.io/profile/blackie11)
-   Twitter - [@GreatAhiakwo](https://www.twitter.com/GreatAhiakwo)

## Acknowledgments

I want to say a big thank you to me for finding the movitation t start this small project and also finish it .
i want also say a big thank you to chibuike who encouraged me all throught out this short jounrey.
