// 
var typed = new Typed('#element', {
    strings: ['<i>Web </i> developer.', '&amp;  Web desiger.', 'Video editor', ''],
    typeSpeed: 60,
});

// Download resume
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../Resume.pdf'; // Correct relative path to the file on your server
    link.download = 'Resume.pdf'; // Specify the file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('nav ul a');

// window.onscroll = () => {git 
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100; // Adjusted offset for better activation timing
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active'); // Fixed classList and correct variable name
//                 document.querySelector('nav a[href="#' + id + '"]').classList.add('active'); // Corrected query selector
//             });
//         }
//     });
// };



