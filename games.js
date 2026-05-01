/*
    
  QUICK REFERENCE FOR URLS:
  Iframe: games/loader.html?url=[INSERT URL SITE]
  SWF:    games/loader.html?url=[INSERT FILE NAME].swf
  
*/

const proxy = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=400&fit=inside&output=webp`;

const GAMES_DATA = [
    {
        id: "0",
        title: "Parking Fury",
        image: proxy("https://www.coolmathgames.com/sites/default/files/ParkingFury_OG-logo.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/parking-fury/",
    },
    {
        id: "1",
        title: "Level Devil",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3242750/header.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/level-devil/"
    },
    {
        id: "2",
        title: "Hill Climb Racing",
        image: proxy("https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b87616bb88c0e3cb4c150c59fdc767fa/hill-climb-racing-lite.png"),
        url: "games/loader.html?url=https://zipygames.github.io/g/hill-climb-racing/main.html" 
    },
    {
        id: "3",
        title: "Poly Track",
        image: proxy("https://i.ytimg.com/vi/wXsG1d9TzdI/maxresdefault.jpg"),
        url: "games/loader.html?url=https://smapskajendfjshwbekf-prog.github.io/newcargame/"
    },
    {
        id: "4",
        title: "Geometry Dash",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/capsule_616x353.jpg?t=1775300400"),
        url: "games/loader.html?url=https://gamingshitposting.github.io/ext-bin-1/geometrylite.io/game/geometry-dash-full-version/index.html"
    },
    {
        id: "5",
        title: "Minecraft Mobile",
        image: proxy("https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/05/minecraft-2.jpg?w=1600&h=900&fit=crop"),
        url: "games/loader.html?url=https://irv77.github.io/EaglerPocketMobile/demo/"
    },
    {
        id: "6",
        title: "Subway Surfers",
        image: proxy("https://freefungames.dumbosdiary.com/wp-content/uploads/2024/02/subway-surfers-sanfrancisco.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/subway-surfers/"
    },
    {
        id: "7",
        title: "Dino Run DX",
        image: proxy("https://cdn15.idcgames.com/storage/image/1243/thumb_slider/default.jpg"),
        url: "games/loader.html?url=dino-run.swf"
    },
    {
        id: "8",
        title: "Bloons TD 5 (BTD 5)",
        image: proxy("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/306020/header.jpg?t=1770223235"),
        url: "games/loader.html?url=btd5.swf"
    },
    {
        id: "9",
        title: "Cuphead Mobile",
        image: proxy("https://miro.medium.com/1*2-5CpKRHjQUx6AF-LYKY1A.jpeg"),
        url: "games/loader.html?url=https://dwdvil.github.io/cuphead-cdv-web/"
    },
    {
        id: "10",
        title: "SAS: Zombie Assault 3",
        image: proxy("https://i.ibb.co/5hLrZ8Nt/sas3.png"),
        url: "games/loader.html?url=sas3.swf"
    },
    {
        id: "11",
        title: "Apes VS Helium",
        image: proxy("https://i.ytimg.com/vi/tCEGJgH4Nhc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyF9-K4-FBaWXDJ4zs12l1w_4CXA"),
        url: "games/loader.html?url=Apes_vs_Helium_Win.zip"
    }
];
