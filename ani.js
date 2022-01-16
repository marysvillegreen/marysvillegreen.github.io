// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.square');
  
//       if (entry.isIntersecting) {
//         square.classList.add('square-animation');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       square.classList.remove('square-animation');
//     });
//   });
  
//   observer.observe(document.querySelector('.square-wrapper'));

// Remove the transition class
const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));