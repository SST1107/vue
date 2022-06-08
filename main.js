let pageData = {
    pageName:'Book a Cruise to the Moon',
    pageductDescription:'Cruise to the Moon in our luxurious shuttle. Watch the asteronauts working outside the International Space Station.',
    imageSrc:[
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:true
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from space"
};

const app = Vue.createApp({
    data(){
    return pageData;
    }
});
app.mount("#app");