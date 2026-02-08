# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/Star-Mdakane/space-tourism-website-tailwind.git)
- Live Site URL: [Add live site URL here](https://space-tourism-website-tailwind.vercel.app/)

## My process
1. I think I will use the JS method and test my fetch skills rather than using html heavily which would require loads of pages, I think 5 or 4 pages for each title page.
2. My approach will be to have 4 html pages and use 4 JS pages only. Having 1 JS page seems straightforwward so I want to learn using multiple JS pages also.
3. I first designed the home page using tailwind mobile first
- Problems encountered:
-Getting to display the background I mages. I thought my root was the html page whilst it was the css I output so it kept on giving me 404 till I checked te dev tools and network section.
-The nav underline I tried using after psuedo and failed till I went to group.
-The hover on the home image I tried using box shadow bbut to no avail, so I used a ring instead.
2. Moving on to the other pages
- After designing the main home page I will be using it's skeleton to design the base structures of the other 3 pages and take it from there.
4. Just redid the home page since it was off from the other pages. Though some weird screen sizes do not work but most of them do.
5. After a few days with my display breaking at certain breakpoints.
- Firstly it was the backround image. I had placed it on the main display div and it kept breaking at height about 850px and moved it to the bod tag which resolved the issue
- Then it was breaking at a width and I initially thought it was some strange screen sizes but found out it was breaking at large breakpoint. After a bit of troubleshooting I discovered that it was the nav which was breaking the display. I changed the width of the nav from a percentage value to auto which seems to have fixed the problem.
6. I dopn't know if technology was simple or I am getting used to this but I had no challenges and it took way less time to complete.
7. Next up was the script. First I tried to load fetch from home page js and that I would be able to use the functions inside that script but it is not possible, so I had to move the fetch to every single script.
8. I started with the destinations page, not hard but I had to remeber the find to return the array which has the Id of the link that I have clicked.
9. On the crew page the problem was that the image was a bg image instead of an image so I had trouble removing or replacing the string to add it to bg image, so I changed it.
10. On the tech page I Aalso had to change the image type but there was a little gotcha, where the image name on the json file changed.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://space-tourism-website-tailwind.vercel.app/)
- Frontend Mentor - [@Star-Mdakane](https://www.frontendmentor.io/profile/@Star-Mdakane)
- Twitter - [@KidStarMadrad](https://www.twitter.com/@KidStarMadrad)


