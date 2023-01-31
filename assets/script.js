const menuItems=[
    {
        id: 1,
        item: "food item1",
        oneliner:"cappucino",
        img:"src/images/cappucino.webp",
        hotel: "Ben cafeteria",
        desc: "Best cappucino in the city"
    },
    {
        id: 2,
        item: "food item2",
        oneliner:"black coffee",
        img:"src/images/blackcoffee.webp",
        hotel: "Universal cafe",
        desc: "Hyderabad's best black coffee"
    },
    {
        id: 3,
        item: "food item3",
        oneliner:"affogato",
        img:"src/images/affogato.webp",
        hotel: "Baveferia",
        desc: "Affogato here!"

    },
    {
        id: 4,
        item: "food item4",
        oneliner:"espresso",
        img:"src/images/espresso.jpeg",
        hotel: "European coffee",
        desc: "Espresso from french!"
    },
    {
        id: 5,
        item: "food item5",
        oneliner:"latte",
        img:"src/images/latte.jpeg",
        hotel: "Great indian coffee",
        desc: "Lovely latte!"
    },
    {
        id: 6,
        item: "food item6",
        oneliner:"mocha",
        img:"src/images/mocha.webp",
        hotel: "Diversity cafe",
        desc: "Enjoy the yummy mocha😍"
    },

]
const item = document.getElementById('item');
const oneliner = document.getElementById('oneliner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc= document.getElementById('desc');
const prev = document.getElementById('prev');
const random= document.getElementById('random');
const next= document.getElementById('next');


let currentMenu = 0;
window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentMenu);
});
const allMenu=()=>{
    let menu= menuItems[currentMenu]
    item.textContent=menu.item;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
}

//random
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length)
    //console.log(currentMenu)
    allMenu(currentMenu);
});

//previous btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;

    }
    allMenu(currentMenu)

});

//next btn
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
});
