
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



function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");

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


  /*load function********************************************************************************************************************************/

const dataArray = [
    { 
      image: 'imgs/service1.png',
      title: 'Dois urna neque collicitudin blandit condimentum at',
      date: 'November 19, 2022',
      description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sit amet tincidunt mi. Integer sem nisi, consequat non..'
    },
   
  ];
  

  let lastIndex = 0;
  
 
  function createDiscoverCard(data) {
    const discoverCard = document.createElement('div');
    discoverCard.classList.add('discover-card');
    discoverCard.innerHTML = `
      <img src="${data.image}" alt="">
      <div class="inner-text">
        <h4>${data.title}</h4>
        <div class="date">
          <img src="imgs/date.svg" alt="">
          <p>${data.date}</p>
        </div>
        <p>${data.description}</p>
        <button>See More  <i class="fa-solid fa-chevron-
        
        i"></i></button>
      </div>
    `;
    return discoverCard;
  }
  
 
  function loadMoreCards() {
    // document.querySelector(".row:nth-child(2)").style.display ="block";
    const discoverProjectsContainer = document.getElementById('discoverProjectsContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    const itemsToLoad = dataArray.slice(lastIndex, lastIndex + 3); 
    itemsToLoad.forEach(item => {
      const newCard = createDiscoverCard(item);
      discoverProjectsContainer.appendChild(newCard);
    });
  
    lastIndex += itemsToLoad.length;
  
   
    if (lastIndex >= dataArray.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn.addEventListener('click', loadMoreCards);
  