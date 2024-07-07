
function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";
    
    document.querySelector(".footer .input input").classList.remove('arabic-footer');
    document.querySelector(".mini-nav").style.right='0';
    document.querySelector(".mini-nav").style.left='unset';
    document.querySelector('.lang-img').src ="imgs/flag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent="English (UK)";
    document.querySelector('.lang-img2').src ="imgs/flag.svg";

    document.querySelector(".select-text2").textContent="English (UK)";
    
   
    document.querySelectorAll('.i').forEach((i)=>{
        i.classList.remove("change-i2")
    });
    document.querySelector(".footer-img").classList.remove("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');
  





}


function change_style() {
    document.querySelector(".language").classList.add("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0";
    
    document.querySelector(".footer .input input").classList.add('arabic-footer');
    // document.querySelector(".rotated-img").style.margin = "0 auto 0 0";
    document.querySelector(".mini-nav").style.right='unset';
    document.querySelector(".mini-nav").style.left='0';
    document.querySelector('.lang-img').src ="imgs/saudiflag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent="اللغه العربيه";
    document.querySelector('.lang-img2').src ="imgs/saudiflag.svg";
    document.querySelector(".select-text2").textContent="اللغه العربيه";

   
    document.querySelectorAll('.i').forEach((i)=>{
        i.classList.add("change-i2")
    });
    document.querySelector(".footer-img").classList.add("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');
    // document.querySelector('body').classList.add("arabic");




}


function changeLang(direction) {
 
    localStorage.setItem('languageDirection', direction);

    
    fetch(`${direction}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load language file');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('home').textContent = data.home;
            document.getElementById('services').textContent = data.services;
            document.getElementById('blog').textContent = data.blog;
            document.getElementById('projects').textContent = data.projects;
            document.querySelectorAll('.contact').forEach((text)=>{
                text.textContent = data.contact;
            });
            document.querySelectorAll('.english').forEach((text)=>{
                text.textContent = data.english;
            });
            document.querySelectorAll('.arabic').forEach((text)=>{
                text.textContent = data.arabic;
            });
            

          
            document.body.dir = direction === 'ar' ? 'rtl' : 'ltr';

          
            if (direction === 'ar') {
                change_style();
            } else {
                 change_style_ltr();
            }
        })
        .catch(error => console.error('Error loading language:', error));
}


window.onload = function() {
    const direction = localStorage.getItem('languageDirection');
    if (direction) {
        changeLang(direction);
    } else {
        changeLang('en'); 
    }
};


/*subscribeee*/
const subscribe = document.getElementById('subscribe');

function saveEmail() {
    fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        body: JSON.stringify({
            "email": document.getElementById('mail').value,
        }),
        headers: {
            "Content-type": "application/json",
            "api-key": "",
        }
    })
    .then(response => {
        console.log(response.status);
        if (response.ok) {
            document.getElementById('subscribe-text').textContent = "Congratulations your email saved!!!!";
            setTimeout(() => { document.getElementById('subscribe-text').textContent = "" }, 3000);
        } else if (response.status === 400) { 
            document.getElementById('subscribe-text').textContent = "You already subscribed before";
            setTimeout(() => { document.getElementById('subscribe-text').textContent = "" }, 3000);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function reset2() {
    document.getElementById('mail').value = '';
}

subscribe.addEventListener('submit', (e) => {
    e.preventDefault();
    saveEmail();
    reset2();
});



function appear() {
    document.querySelector(".language").classList.toggle("display");
    document.querySelector("#icon").classList.toggle('change-i');
}
function appear_nav() {
    document.querySelector(".mini-nav").style.display = "block";
}
function hide_nav() {
    document.querySelector(".mini-nav").style.display = "none";
}
let activeFlag = false;
function appear_services() {
    document.querySelector(".nav-services").classList.toggle("display");

    activeFlag = !activeFlag;
    if (!activeFlag) {
        document.querySelector("#services").classList.remove("active");
    } else {
        document.querySelector("#services").classList.add("active");
    }
}
function appear_menu_services() {
    document.querySelector(".inner-ul").classList.toggle("display");
    document.querySelector("#i2").classList.toggle("change-i");
}
function appear_menu_projects() {

    document.querySelector(".inner-ul2").classList.toggle("display");
    document.querySelector("#i3").classList.toggle("change-i");

}
function mini_nav_language() {

    document.querySelector(".mini-nav-language").classList.toggle("display");
    document.querySelector("#icon2").classList.toggle('change-i');
}


function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});





const main = document.querySelector('main');
main.addEventListener('click', () => {

    document.querySelector(".language").classList.remove("display");
})
const header = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".language").classList.remove("display");
})

const main2 = document.querySelector('main');
main2.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
    document.querySelector("#services").classList.remove("active");
    activeFlag = !activeFlag
})
const header2 = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
    document.querySelector("#services").classList.remove("active");
    activeFlag = !activeFlag

})



function generateJSON() {
    const elements = document.body.querySelectorAll("*");
    const translation = {};
   
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key) {
        translation[key] = element.textContent.trim();
      }
    });
   
    console.log(JSON.stringify(translation, null, 2));
  }
   
  document.addEventListener("DOMContentLoaded", generateJSON);

//   const imgs = ["imgs/unsplash_IH7wPsjwomc.svg", "imgs/about.svg", "imgs/about.svg","imgs/about.svg"];
//   const texts = [
//       "Design Customization",
//       "Second Content",
//       "Third Content",
//       "f Content"
//   ];
//   const paragraphs = [
//     "Design Customization",
//     "Second Content",
//     "Third Content",
//     "f Content"
// ];
  
//   let currentIndex = 0;
  
//   function updateContent() {
//       document.getElementById('approach-image').src = imgs[currentIndex];
//       document.getElementById('approach-h3').textContent = texts[currentIndex];
//       document.getElementById('approach-p').textContent = paragraphs[currentIndex];
  
//       // Change background color of sliders
//       const sliders = document.querySelectorAll('.slider');
//       sliders.forEach((slider, index) => {
//           if (index === currentIndex) {
//               slider.style.backgroundColor = '#f00'; // Change to desired color
//           } else {
//               slider.style.backgroundColor = ''; // Reset to default color
//           }
//       });
//   }
  
//   document.querySelectorAll('.slider').forEach((slider, index) => {
//       slider.addEventListener('click', () => {
//           currentIndex = index;
//           updateContent();
//       });
//   });
  
//   const section = document.getElementById('our-Approatch');
//   section.addEventListener('scroll', () => {
//       if (section.scrollLeft === (section.scrollWidth - section.clientWidth)) {
//           currentIndex = (currentIndex + 1) % imgs.length;
//           updateContent();
//       }
//   });
  
//   document.addEventListener('keydown', (event) => {
//       if (event.key === 'ArrowRight') {
//           currentIndex = (currentIndex + 1) % imgs.length;
//           updateContent();
//       } else if (event.key === 'ArrowLeft') {
//           currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//           updateContent();
//       }
//   });
  
// const imgs = ["imgs/unsplash_IH7wPsjwomc.svg", "imgs/second-image.svg", "imgs/third-image.svg"];
// const texts = [
//     "Design Customization",
//     "Second Content",
//     "Third Content"
// ];

// let currentIndex = 0;

// function updateContent() {
//     document.getElementById('approach-image').src = imgs[currentIndex];
//     document.getElementById('approach-h3').textContent = texts[currentIndex];

//     // Change background color of sliders
//     const sliders = document.querySelectorAll('.slider');
//     sliders.forEach((slider, index) => {
//         if (index === currentIndex) {
//             slider.style.backgroundColor = '#f00'; // Change to desired color
//         } else {
//             slider.style.backgroundColor = ''; // Reset to default color
//         }
//     });
// }

// document.querySelectorAll('.slider').forEach((slider, index) => {
//     slider.addEventListener('click', () => {
//         currentIndex = index;
//         updateContent();
//     });
// });

// const section = document.getElementById('our-Approatch');
// section.addEventListener('wheel', (event) => {
//     // Check if scrolled vertically
//     if (event.deltaY > 0) {
//         // Scrolled down
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else {
//         // Scrolled up
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     }
// });

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowDown') {
//         // Pressed down arrow
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowUp') {
//         // Pressed up arrow
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     }
// });
// const imgs = ["imgs/unsplash_IH7wPsjwomc.svg", "imgs/second-image.svg", "imgs/third-image.svg"];
// const texts = [
//     "Design Customization",
//     "Second Content",
//     "Third Content"
// ];

// let currentIndex = 0;

// function updateContent() {
//     document.getElementById('approach-image').src = imgs[currentIndex];
//     document.getElementById('approach-h3').textContent = texts[currentIndex];

//     // Change background color of sliders
//     const sliders = document.querySelectorAll('.slider');
//     sliders.forEach((slider, index) => {
//         if (index === currentIndex) {
//             slider.style.backgroundColor = '#f00'; // Change to desired color
//         } else {
//             slider.style.backgroundColor = ''; // Reset to default color
//         }
//     });
// }

// document.querySelectorAll('.slider').forEach((slider, index) => {
//     slider.addEventListener('click', () => {
//         currentIndex = index;
//         updateContent();
//     });
// });

// const section = document.getElementById('our-Approatch');
// section.addEventListener('wheel', (event) => {
//     // Check if scrolled vertically
//     if (event.deltaY > 0) {
//         // Scrolled down
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else {
//         // Scrolled up
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     }
// });

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowDown') {
//         // Pressed down arrow
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowUp') {
//         // Pressed up arrow
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowLeft') {
//         // Pressed left arrow
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowRight') {
//         // Pressed right arrow
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     }
// });

// document.getElementById('left').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//     updateContent();
// });

// document.getElementById('right').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % imgs.length;
//     updateContent();
// });

//  const imgs = ["imgs/ourProcess1.svg", "imgs/ourProcess2.svg", "imgs/ourProcess3.svg"," imgs/ourProcess4.svg"];
// const texts = [
//     "Design Customization",
//     "Material Selection",
//     "Craftsmanship and Manufacturing ",
//     "Delivery and Installation"
    
// ];
// const paragraphs = [
//     `We Begin Our Process By Understanding Your Vision And Requirements. Whether You're Looking For A Statement Piece To Complete A Room Or Need Functional
//      Furniture That Maximizes Space, Our Designers Work Closely With You To Conceptualize Designs That Blend Seamlessly With Your Interior. We Consider Everything From 
//      Style And Size To Materials And Ergonomics, Ensuring The Final Product Is Exactly What You Envisioned.`,

//     `Quality starts with the right materials, which is why we source only the best woods, metals, fabrics, and finishes. 
//     We provide a wide selection of options to choose from, helping you pick materials that not only look great but are also durable and sustainable. 
//     Whether you prefer the natural beauty of hardwood, the modern touch of metal, or the comfort of luxurious fabrics, we make sure our materials meet 
//     the highest standards of quality and sustainability. `,

 
//     `With a perfect design and the best materials selected, our skilled artisans take over.
//      Combining traditional craftsmanship with modern techniques, our team meticulously constructs each piece of furniture.
//       Attention to detail is paramount, and we pride ourselves on creating furniture that not only looks beautiful but stands the test of time. `,
//       `The final step in our process is delivering the finished product to your doorstep. We handle all aspects of delivery and installation, ensuring that 
//       each piece is set up in its intended space and properly integrated into your environment. Our team ensures 
//       a smooth installation process, leaving you with a space that’s ready to enjoy. `,

//       `The final step in our process is delivering the finished product to your doorstep. We handle all aspects of delivery and installation, 
//       ensuring that each piece is set up in its intended space and properly integrated into your environment. 
//       Our team ensures a smooth installation process, leaving you with a space that’s ready to enjoy. `

// ];


// let currentIndex = 0;

// function updateContent() {
//     document.getElementById('approach-image').src = imgs[currentIndex];
//     document.getElementById('approach-h3').textContent = texts[currentIndex];
//     document.getElementById('approach-p').textContent = paragraphs[currentIndex];

   
//     const sliders = document.querySelectorAll('.slider');
//     sliders.forEach((slider, index) => {
//         if (index === currentIndex) {
//             slider.style.backgroundColor = '#f00'; 
//         } else {
//             slider.style.backgroundColor = ''; 
//         }
//     });
// }

// document.querySelectorAll('.slider').forEach((slider, index) => {
//     slider.addEventListener('click', () => {
//         currentIndex = index;
//         updateContent();
//     });
// });

// const section = document.getElementById('our-Approatch');
// section.addEventListener('scroll', () => {
   
//     if (section.scrollLeft === 0) {

//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     } else if (section.scrollLeft === (section.scrollWidth - section.clientWidth)) {

//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     }
// });

// document.getElementById('left').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//     updateContent();
// });

// document.getElementById('right').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % imgs.length;
//     updateContent();
// });
// let currentIndex = 0;

// function updateContent() {
//     document.getElementById('approach-image').src = imgs[currentIndex];
//     document.getElementById('approach-h3').textContent = texts[currentIndex];

//     // Change background color of sliders
//     const sliders = document.querySelectorAll('.slider');
//     sliders.forEach((slider, index) => {
//         if (index === currentIndex) {
//             slider.style.backgroundColor = '#f00'; // Change to desired color
//         } else {
//             slider.style.backgroundColor = ''; // Reset to default color
//         }
//     });
// }

// document.querySelectorAll('.slider').forEach((slider, index) => {
//     slider.addEventListener('click', () => {
//         currentIndex = index;
//         updateContent();
//     });
// });

// const section = document.getElementById('our-Approatch');
// section.addEventListener('wheel', (event) => {
//     // Check if scrolled vertically
//     if (event.deltaY > 0) {
//         // Scrolled down
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else {
//         // Scrolled up
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     }
// });

// let currentIndex = 0;

// function updateContent() {
//     document.getElementById('approach-image').src = imgs[currentIndex];
//     document.getElementById('approach-h3').textContent = texts[currentIndex];
//     document.getElementById('approach-p').textContent = paragraphs[currentIndex];

    
//     const sliders = document.querySelectorAll('.slider');
//     sliders.forEach((slider, index) => {
//         if (index === currentIndex) {
//             slider.style.backgroundColor = '#CADEDD'; 
//         } else {
//             slider.style.backgroundColor = ''; 
//         }
//     });
// }

// document.querySelectorAll('.slider').forEach((slider, index) => {
//     slider.addEventListener('click', () => {
//         currentIndex = index;
//         updateContent();
//     });
// });

// const section = document.getElementById('our-Approatch');
// section.addEventListener('wheel', (event) => {

//     if (event.deltaY > 0) {
       
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else {
   
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     }
// });

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowDown') {
   
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowUp') {
      
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowLeft') {
     
//         currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//         updateContent();
//     } else if (event.key === 'ArrowRight') {
      
//         currentIndex = (currentIndex + 1) % imgs.length;
//         updateContent();
//     }
// });

// document.getElementById('left').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
//     updateContent();
// });

// document.getElementById('right').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % imgs.length;
//     updateContent();
// });



/*active discover linkssssss*/
 const discovrLinks = document.querySelectorAll(".discover-nav-item");
 discovrLinks.forEach((discoverLink)=>{
    discoverLink.addEventListener("click",function(){
        
        discovrLinks.forEach((discoverLink)=>{
            discoverLink.classList.remove("nav-active");

        });
        this.classList.add("nav-active");
    });
    
  
 });
