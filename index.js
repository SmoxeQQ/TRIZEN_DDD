const images = [
    "https://i.postimg.cc/ZqsXJzyD/Frame-16.png",
    "https://i.postimg.cc/4dzmhGRB/Frame-15.png",
    "https://i.postimg.cc/T2JKdT9P/Frame-1-1.png",
    "https://i.postimg.cc/T2JKdT9P/Frame-1-1.png",
    "https://i.postimg.cc/d0nwdfZ8/Frame-17-2x.png",
    "https://i.postimg.cc/rFQp5K6d/Frame-18-2x.png"
];

const randomIndex = Math.floor(Math.random() * images.length);

document.getElementById('random-image').src = images[randomIndex];
