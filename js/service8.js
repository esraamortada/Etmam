function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");



    document.querySelector(".footer .input input").classList.remove('arabic-footer');
    document.querySelector(".mini-nav").style.right = '0';
    document.querySelector(".mini-nav").style.left = 'unset';
    document.querySelector('.lang-img').src = "imgs/flag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent = "English (UK)";
    document.querySelector('.lang-img2').src = "imgs/flag.svg";

    document.querySelector(".select-text2").textContent = "English (UK)";

    document.querySelectorAll('.i').forEach((i) => {
        i.classList.remove("change-i2")
    });
    document.querySelector(".footer-img").classList.remove("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');







}


function change_style() {
    document.querySelector(".language").classList.add("right");




    document.querySelector(".footer .input input").classList.add('arabic-footer');
    document.querySelector(".mini-nav").style.right = 'unset';
    document.querySelector(".mini-nav").style.left = '0';
    // document.querySelector(".mini-nav .ul").style.position = 'absolute';

    document.querySelector('.lang-img').src = "imgs/saudiflag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent = "Arabic (KSA)";
    document.querySelector('.lang-img2').src = "imgs/saudiflag.svg";
    document.querySelector(".select-text2").textContent = "Arabic (KSA)";

  
    document.querySelectorAll('.i').forEach((i) => {
        i.classList.add("change-i2")
    });
    document.querySelector(".footer-img").classList.add("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');
    // document.querySelector(".rotated-img").style.margin = "0 auto 0 0";



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

///////////////////////////////////////////////////////////////////////////////////////////
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




  
const imgs = ["imgs/Tile Installation.png", "imgs/Marble Works.png", "imgs/Maintenance and Repair.png"," imgs/Parquet Flooring.png","imgs/Custom Design and Consulting.png"];
const texts = [
    "Tile Installation",
    "Marble Works",
    "Maintenance and Repair",
    "Parquet Flooring",
    "Custom Design and Consulting"
    
];
const paragraphs = [
    `Tiles offer versatility and beauty, making them a popular choice for both practical and aesthetic purposes in various settings. We provide expert tile installation services, including ceramic, porcelain, glass, and handmade tiles, ensuring that each piece is meticulously laid to create a flawless and enduring surface. Our team advises on the best materials and patterns to achieve a look that complements your space and meets your functional needs. `,

    `Marble is synonymous with luxury and timeless elegance. Our skilled artisans specialize in the custom fabrication and installation of marble flooring, walls, countertops, and decorative features. We source the finest marble slabs from around the world, offering a vast range of colors and veining options. Our attention to detail ensures that the natural beauty of the marble is highlighted in every cut and polish, providing a sophisticated and refined finish to any interior.`,

 
    `In addition to installation services, we provide maintenance and repair for all types of tile, marble, and parquet surfaces. From sealing and polishing marble to repairing cracked tiles or refinishing parquet floors, our maintenance services ensure that your investment remains in pristine condition, preserving its beauty and functionality for years to come.  `,

      `Quality finishes start with proper surface preparation. We take great care in preparing walls for painting or wallpapering, ensuring that every surface is smooth, clean, and ready for transformation. This includes patching holes, sanding rough areas, and applying primer where necessary. Proper preparation not only enhances the durability of the finish but also ensures the true beauty of the materials is showcased. `,
      `For areas that require more than just aesthetics, such as high moisture rooms or outdoor spaces, we offer protective and specialty coatings. These options include waterproofing, mold-resistant paints, and UV-protective coatings to ensure that your investment not only looks good but also withstands the test of time and elements.   `

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
section.addEventListener("mouseenter",()=>{
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
