const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navigation_links')

hamburger.addEventListener('click', () =>(
    navlinks.style.display = 'flex'
));
// hamburger.addEventListener('click', () =>
// (
//     if(navlinks.style.transform === 'scaleY(1)') {
//         navlinks.style.transform = 'scaleY(0)';
//     } else {
//         navlinks.style.transform = 'scale'
//     }
// ))