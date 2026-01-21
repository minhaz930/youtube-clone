const videos = [
    {
        url: "https://www.youtube.com/embed/OlZIKb3NXUY?si=s7gGmY82Q0K-T7Gi",
        title: "Baghdadh Ka Lalchi in Hindi 2010 | HD 720p",
        views: "1.5M views . 3 months ago",
    },
     
    {
        url: "https://www.youtube.com/embed/Fx19vq5KHus?si=P0F8up6Gs-L0RKWb",
        title: "Sultan Bollywood Movie 2017 | HD 720p",
        views: "290M views . 2 years ago",
    }, 

    {
        url: "https://www.youtube.com/embed/tPXYWRGNl7s?si=fnPa1FqhKHTuFKqw",
        title: "Tezz Bollywood Movie 2010 | HD 720p",
        views: "300M views . 10 years ago",
    }, 

    {
        url: "https://www.youtube.com/embed/lM8h5Mm6ODo?si=abuQiUjI5C_HIwGz",
        title: "Jailer Hindi Movie 2010 | HD 720p",
        views: "290M views . 2 years ago",
    }, 

    {
        url: "https://www.youtube.com/embed/iqD891ttQow?si=UxwvbHZ60wl2z4EL",
        title: "Tezz Movie | HD 720p",
        views: "100K views • 3 months ago",
    }, 

    {
        url: "https://www.youtube.com/embed/o2i_EqiROAY?si=TO40ax1XMehaeXz",
        title: "Shootout at Wadala | HD 720p",
        views: "100K views • 3 months ago",
    }, 

    {
        url: "https://www.youtube.com/embed/XT_NLVdq4X8?si=7nU8MwMB1fiy0O4r",
        title: "Dishoom Movie | HD 720p",
        views: "100K views • 3 months ago",
    }, 

    {
        url: "https://www.youtube.com/embed/-vMWizSogLQ?si=5GCrLdCHA_RRb9gM",
        title: "Kick Movie | HD 720p",
        views: "100K views • 3 months ago",
    },

 
    {
        url: "https://www.youtube.com/embed/-vMWizSogLQ?si=5GCrLdCHA_RRb9gM",
        title: "Kick Movie | HD 720p",
        views: "100K views • 3 months ago",
    },

   {
    
        url: "https://www.youtube.com/embed/smLNCbYNQP4?si=6RXnVHg0h8Xlq0mv",
        title: "Entertainment Movie | HD 720p",
        views: "100K views • 3 months ago",
    },     
      
    {
        url: "https://www.youtube.com/embed/Fx19vq5KHus?si=P0F8up6Gs-L0RKWb",
        title: "Sultan Bollywood Movie 2017 | HD 720p",
        views: "100K views • 3 months ago",
    },     
      
    {
        url: "https://www.youtube.com/embed/XT_NLVdq4X8?si=7nU8MwMB1fiy0O4r",
        title: "Dishoom Movie | HD 720p",
        views: "100K views • 3 months ago",
    },     
      
    {
        url: "https://www.youtube.com/embed/XT_NLVdq4X8?si=7nU8MwMB1fiy0O4r",
        title: "Dishoom Movie | HD 720p",
        views: "100K views • 3 months ago",
    },      

];

const container = document.querySelector(".card-container");
container.innerHTML = " ";

videos.forEach(video =>{
    container.innerHTML += ` 
    <div class="card">
    <iframe src ="${video.url}" allowfullscreen></iframe>
    <p>${video.title}</p>
    <p>${video.views}</p>
</div>
`;
});


const scrollBox = document.getElementById("scrollBox");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

rightBtn.addEventListener("click", () => {
    scrollBox.scrollLeft += 200;
});

leftBtn.addEventListener("click", () => {
    scrollBox.scrollleft -= 200;
});

