
// const dir= localStorage.getItem('languageDirection');
// console.log(dir);
// checkdir(dir);

function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");



    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0%";
    document.querySelector(".rotated-img").style.margin = "0 0 0 auto";

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


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";
    
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




const texts = [
    "Installation Services ",
    " System Upgrades",
    "Maintenance and Repairs ",
    "Energy Efficiency Consulting"
    
];
const paragraphs = [
    `Choosing the right air conditioning system can dramatically impact comfort and cost-efficiency. We offer expert installation services for a variety of air conditioning units, including split systems, central air, and ductless options. Our team works with you to assess your space and recommend the best system based on your needs, preferences, and budget. We ensure a seamless installation process that minimizes disruption and maximizes performance.  `,

    `As technology advances, upgrading your air conditioning system can lead to improved energy efficiency and lower utility bills. We provide professional upgrade services to help you transition to more modern and efficient systems. Our experts can retrofit your existing setup with the latest technology, ensuring it delivers optimal cooling and efficiency.  `,

 
    `Regular maintenance is crucial to the longevity and effectiveness of your air conditioning system. Our comprehensive maintenance services include routine inspections, cleaning, and the timely replacement of filters to ensure your system operates at peak efficiency. We also offer prompt and reliable repair services to address any issues, from minor fixes to major breakdowns, ensuring your system is back up and running smoothly with minimal downtime. `,

      `Optimizing your air conditioning for energy efficiency not only saves money but also contributes to a more sustainable environment. Our consultants specialize in energy efficiency and can provide you with customized advice on how to optimize your system for better performance and lower energy consumption. Whether it involves setting up programmable thermostats or integrating your AC with smart home systems, we can guide you through the best practices for energy management.  `

];




let currentIndex = 0;

function updateContent() {
    console.log("Updating content...");
  
    document.getElementById('our-services-h3').textContent = texts[currentIndex];
    document.getElementById('our-services-p').textContent = paragraphs[currentIndex];

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
        console.log("Slider clicked:", index);
        currentIndex = index;
        updateContent();
    });
});

const section = document.getElementById('our-services');
section.addEventListener("mouseenter",()=>{
    console.log("Mouse entered section");
    document.body.style.overflowY = "hidden";
})
section.addEventListener('mouseleave', () => {
    console.log("Mouse left section");
    document.body.style.overflowY = "auto"; 
});

section.addEventListener('wheel', (event) => {
    console.log("Wheel event detected");
    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % texts.length;
        updateContent();
    } else {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        updateContent();
    }
});

document.addEventListener('keydown', (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % texts.length;
        updateContent();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        updateContent();
    }
});