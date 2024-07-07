
// const dir= localStorage.getItem('languageDirection');
// console.log(dir);
// checkdir(dir);

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
            "api-key": "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",
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

// function checkdir(direction) {
//     if (direction === 'ar') {
//         change_style();

//     }
//     else {
//         change_style_ltr();
//     }
// }




const imgs = ["imgs/Custom Gypsum Designs.png", "imgs/Gypsum Ceiling Works.png", "imgs/Wall Features and Partitions.png"," imgs/Decorative Moldings and Trims.png","imgs/Durable and Sustainable Solutions.png"];
const texts = [
    "Custom Gypsum Designs ",
    " Gypsum Ceiling Works",
    "Wall Features and Partitions",
    "Decorative Moldings and Trims",
    "Durable and Sustainable Solutions"
    
];
const paragraphs = [
    `Our custom gypsum designs are crafted to meet the unique needs and visions of our clients. Whether you are looking for elaborate ceiling medallions, intricate cornices, or modern geometric wall panels, our team of skilled artisans can bring any idea to life. We work closely with you from the initial design concept to the final installation, ensuring every detail reflects your personal style and the character of your space.  `,

    `Gypsum ceilings are a centerpiece of our decorative offerings. From simple, elegant flat designs to complex, multi-level and coffered ceilings, we provide a range of options that can dramatically change the height, depth, and overall ambiance of a room. Our designs are not only visually appealing but also provide practical solutions for acoustics, lighting, and energy efficiency. `,

 
    `Gypsum wall features and partitions offer a versatile way to redefine living spaces. We design and install decorative wall panels, room dividers, and accent features that add character and functionality to any room. Our gypsum partitions are particularly popular for their ability to add architectural interest or define different areas within an open-plan space, all while maintaining a flow that is both natural and stylish. `,

      `Detailing with decorative moldings and trims can subtly enhance the sophistication of your rooms. Our range of gypsum moldings includes crown moldings, baseboards, chair rails, and more, each designed to frame and accentuate your walls, ceilings, and doors. These elements are meticulously crafted to blend seamlessly with your existing décor or to stand out as bold design statements.  `,
      `At Etmam, we are committed not only to beauty but also to durability and sustainability. Our gypsum products are made with high-quality materials that ensure longevity and are environmentally friendly. We focus on creating designs that are timeless and easy to maintain, providing lasting value to your property. `

];


let currentIndex = 0;

function updateContent() {
    document.getElementById('approach-image').src = imgs[currentIndex];
    document.getElementById('approach-h3').textContent = texts[currentIndex];
    document.getElementById('approach-p').textContent = paragraphs[currentIndex];

    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slider, index) => {
        if (index === currentIndex) {
            slider.style.backgroundColor = '#CADEDD';
        } else {
            slider.style.backgroundColor = '';
        }
    });
}

document.querySelectorAll('.slider').forEach((slider, index) => {
    slider.addEventListener('click', () => {
        currentIndex = index;
        updateContent();
    });
});

const section = document.getElementById('our-Approatch');
section.addEventListener("mouseenter", () => {
    console.log("hhhhhhhh");
    document.body.style.overflowY = "hidden";
})
section.addEventListener('mouseleave', () => {
    document.body.style.overflowY = "auto";
});

section.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % imgs.length;
        updateContent();
    } else {
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        updateContent();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {

        currentIndex = (currentIndex + 1) % imgs.length;
        updateContent();
    } else if (event.key === 'ArrowUp') {

        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        updateContent();
    } else if (event.key === 'ArrowLeft') {

        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        updateContent();
    } else if (event.key === 'ArrowRight') {

        currentIndex = (currentIndex + 1) % imgs.length;
        updateContent();
    }
});
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
