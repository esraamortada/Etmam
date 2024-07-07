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




  
const imgs = ["imgs/Customizable Glass Partition Solutions.png", "imgs/Enhancing Natural Light.png", "imgs/Space Optimization.png"," imgs/Acoustic Control.png","imgs/Professional Installation.png"];
const texts = [
    "Customizable Glass Partition Solutions",
    " Enhancing Natural Light",
    "Space Optimization",
    "Acoustic Control",
    " Professional Installation"
    
];
const paragraphs = [
    `We offer a wide range of glass partition solutions that can be tailored to fit any space or style. From frosted or clear glass to engraved or colored glass, our partitions are available in various finishes and designs. Each partition is crafted with precision and is designed to seamlessly integrate with your existing interiors, providing not only functional division but also a visual enhancement to your environment. `,

    `One of the major benefits of our glass partition walls is their ability to enhance natural light distribution. By allowing light to flow freely between different areas, our glass partitions create a brighter, more inviting atmosphere while reducing the need for artificial lighting. This not only helps in energy conservation but also promotes a healthier, more vibrant workspace or living area. `,

 
    `Our glass partitions are ideal for optimizing space without the permanence of traditional walls. They provide the flexibility to adapt layouts over time as needs change, making them perfect for dynamic office environments or multipurpose residential areas. These partitions offer an effective way to define spaces while maintaining an open floor plan, allowing for easy communication and a cohesive feel throughout the area.  `,

      `Despite their sleek and open design, our glass partition walls can also be effective in noise management. We offer options with enhanced acoustic properties, helping to reduce sound transmission between divided spaces. This makes them particularly valuable in busy office settings or homes where separate noise zones are beneficial.  `,
      `Our team of experienced professionals ensures a smooth and efficient installation process, from initial design consultation through to the final setup. We handle every aspect of the installation with meticulous attention to detail, ensuring that each partition is perfectly aligned and securely mounted for both safety and durability. `

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
    console.log("Key pressed:", event.key);
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % imgs.length;
        updateContent();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
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
