// Get the image element and its container
var image = document.getElementById("myImage");
var container = document.querySelector(".zoom-img");

// Set the initial zoom level and position
var zoomLevel = 1;
var posX = 0;
var posY = 0;

// Add event listener for mouseover to zoom in
container.addEventListener("mouseover", function (event) {
  zoomLevel = 2; // Increase the zoom level (adjust as needed)
  updateImagePosition();
});

// Add event listener for mouseout to zoom out
container.addEventListener("mouseout", function (event) {
  zoomLevel = 1; // Reset the zoom level
  posX = 0; // Reset the X position
  posY = 0; // Reset the Y position
  updateImagePosition();
});

// Add event listener for mousemove to handle panning
container.addEventListener("mousemove", function (event) {
  // Calculate the position of the mouse within the container
  var rect = container.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  // Calculate the new image position based on the mouse position
  posX = (container.offsetWidth / 2 - x) * (zoomLevel - 1);
  posY = (container.offsetHeight / 2 - y) * (zoomLevel - 1);

  // Update the image position
  updateImagePosition();
});

// Function to update the image position and zoom level
function updateImagePosition() {
  image.style.transform =
    "scale(" + zoomLevel + ") translate(" + posX + "px, " + posY + "px)";
}
// JavaScript for retrieving and displaying product data
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

// Dummy product data for demonstration
const products = [
  {
    id: "1",
    name: "Manchester City Home Jersey 2022/23",
    price: 29.99,
    images: ["img/Products/mci.jpg"],
    desc: "Our 2022/23 Home kit features the retro jersey elements from the era of Colin Bell,executed in a sophisticated modern silhouette. The club crest is back in the centre, as are burgundy trims on the sleeve cuffs, shorts and socks. The crown logo inside the neckline pays tribute to Colin the King.",
  },
  {
    id: "2",
    name: "TOTTENHAM Home Jersey Season 2022/23",
    price: 24.99,
    images: ["img/Products/tot.jpg"],
    desc: "The Nike Tottenham Hotspur 22-23 home kit was officially unveiled by the club earlier this morning. It will be available exclusively through the Spurs and Nike stores until 13 June, when it will be available in more places.The new shirt is Tottenham's sixth since Nike became the club's kit supplier in 2017.AIA continue as main sponsor, with used car sales company Cinch as sleeve sponsor.",
    imagesbs: ["img/Products/tot.jpg", "img/Backside/tot.jpg"],
  },
  {
    id: "3",
    name: "AC MILAN x KOCHÉ Jersey Season 2022/23",
    price: 29.99,
    images: ["img/Products/acm.jpg"],
    desc: "The A.C. MILAN x KOCHÉ collab fuses the identities of these two icons – the Parisian fashion label's ambitious and distinctive style and A.C. Milan's footballing heritage – to create a capsule collection that celebrates sports and couture,soccer and fashion. We witness the spectacle in this replica jersey.",
    imagesbs: ["img/Products/acm.jpg", "img/Backside/milan.jpg"],
  },
  {
    id: "4",
    name: "FC Barcelona Home Jersey 2022/23",
    price: 34.99,
    images: ["img/Products/fcb.jpg"],
    desc: "The FC Barcelona 2022-23 home shirt introduces a stylish look, adding dark blue to the traditional Blaugrana stripes.The sleeves and collar of the Barcelona 22-23 jersey are solid navy, while the front features quite wide striping in navy, royal blue and red.",
    imagesbs: ["img/Products/fcb.jpg", "img/Backside/barBackSide.jpg"],
  },
  {
    id: "5",
    name: "Fenerbahçe SK Home Jersey 2022/23",
    price: 99.99,
    images: ["img/Products/fen.jpg"],
    desc: "The 2022/23 Fenerbahçe S.K. Home kit takes inspiration from the very place that inspired the club's name in 1907: Fener for lighthouse and bahçe for garden. The jersey features white outlines on the yellow and navy stripes.",
    imagesbs: ["img/Products/fen.jpg", "img/Backside/fenBack.jpg"],
  },
  {
    id: "6",
    name: "Paris Saint Germain Home Jersey 2022/23",
    price: 29.99,
    images: ["img/Products/psg.jpg"],
    desc: "Our 2022/23 Home kit features the retro jersey elements from the era of Colin Bell,executed in a sophisticated modern silhouette. The club crest is back in the centre, as are burgundy trims on the sleeve cuffs, shorts and socks. The crown logo inside the neckline pays tribute to Colin the King.",
    imagesbs: ["img/Products/psg.jpg", "img/Backside/psgBackside.jpg"],
  },
  {
    id: "7",
    name: "Chelsea FC Home Jersey 2022/23",
    price: 24.99,
    images: ["img/Products/chel.jpg"],
    desc: "Standing out to the Chelsea 21-22 home shirt, the Nike Chelsea FC 2022-23 home jersey is all blue with a white/turquoise henley neckline. The Graphic on the henley's neckline is the infamous Chelsea's Lion Rampant Logo that appeared in the current Chelsea FC logo. According to Angelo Trofa - Anglo-Italian artist and part of the team behind this kit design, the graphic is also a tribute to legendary Ted Drake who became one of the most attributes of English Soccer Mythology and History by re-inventing the nickname of Chelsea itself from the old one called 'Pensioners' - 'The Blues'",
    imagesbs: ["img/Products/chel.jpg", "img/Backside/ProductsSection/chelsea.jpg"],
  },
  {
    id: "8",
    name: "Liverpool FC Third Jersey 2020/21",
    price: 22.99,
    images: ["img/Products/liv.jpg"],
    desc: "Our 2022/23 Home kit features the retro jersey elements from the era of Colin Bell,executed in a sophisticated modern silhouette. The club crest is back in the centre, as are burgundy trims on the sleeve cuffs, shorts and socks. The crown logo inside the neckline pays tribute to Colin the King.",
    imagesbs: ["img/Products/liv.jpg", "img/Backside/ProductsSection/liv.jpg"],
  },
  {
    id: "9",
    name: "Paris Saint Germain Fourth Jersey 2021/22",
    price: 22.99,
    images: ["img/Products/psga.jpg"],
    desc: "The Jordan PSG 2021-22 fourth shirt combines the main colors white, 'Midnight Navy' and red.",
    imagesbs: ["img/Products/psga.jpg", "img/Backside/ProductsSection/psg.jpg"],
  },
  {
    id: "10",
    name: "Manchester City Third Jersey 2022/23",
    price: 29.99,
    images: ["img/Products/city.jpg"],
    desc: "The lime green main body is contrasted with black hoops that blur at the edges, which pay tribute to the Manchester worker bee. The bee has long become a symbol that is synonymous with the Mancunian character.The City badge is teamed with the PUMA cat logo on the hoop in line with the upper chest to finish off the vibrant look.",
    imagesbs: ["img/Products/city.jpg", "img/Backside/ProductsSection/city.jpg"],
  },
  {
    id: "11",
    name: "Olympique Marseille Home Jersey 2022/23",
    price: 25.99,
    images: ["img/Products/mar.jpg"],
    desc: "The Puma Marseille 2022-2023 special shirt is white with a light blue star graphic on the upper section. The star is positioned off centre so that the club crest, and the small gold star above it more precisely, lies in the middle of it. The club badge and all other logo applications are silver.",
    imagesbs: ["img/Products/mar.jpg", "img/Backside/ProductsSection/mar.jpg"],
  },
  {
    id: "12",
    name: "Croatia Away Jersey",
    price: 35.99,
    images: ["img/Products/cro.jpg"],
    desc: "The Croatia away kit 2022 is a great combination of dark blue and turquoise designed to resemble the ebbs and flows of the Adriatic Sea, which lines Croatia's coast.",
    imagesbs: ["img/Products/cro.jpg", "img/Backside/ProductsSection/cro.jpg"],
  },
  {
    id: "13",
    name: "Brazil Away Jersey",
    price: 30.99,
    images: ["img/Products/bra.jpg"],
    desc: "The away jersey has a vibrant pattern of jaguar spots on the sleeves. The color combination of blue and green adds to the tropical feel, perfect to represent the beaches and jungles of Brazil. On the 20th anniversary of Brazil's fifth and last world cup win, join A Selecao in this predatory print. - Heat press badge.",
    imagesbs: ["img/Products/bra.jpg", "img/Backside/ProductsSection/brazil.jpg"],
  },
  {
    id: "14",
    name: "France Home Jersey",
    price: 29.99,
    images: ["img/Products/fra.jpg"],
    desc: "In terms of design, the France 2022 World Cup home shirt goes for an understated look, apart from a subtle pattern on the sleeve cuffs and collar, with the former also featuring the French flag. The pattern includes oak leafs and olive branches to signify strength, solidarity and peace.",
    imagesbs: ["img/Products/fra.jpg", "img/Backside/ProductsSection/france.jpg"],
  },
  {
    id: "15",
    name: "Netherlands Home",
    price: 34.99,
    images: ["img/Products/net.jpg"],
    desc: "The Nike Netherlands 2022 World Cup away football shirt features a dark blue main color - 'Deep Royal'. Nike combine it with a bright reddish-orange accent color for logos, 'Habanero Red', and large black applications.",
    imagesbs: ["img/Products/net.jpg", "img/Backside/ProductsSection/netherlands.jpg"],
  },
  {
    id: "16",
    name: "Senegal Home Jersey",
    price: 30.99,
    images: ["img/Products/senegal.jpg"],
    desc: "The mainly white jersey is inspired by the home shirt worn twenty years ago in the reigning Africa Cup of Nations champion’s World Cup debut.",
    imagesbs: ["img/Products/senegal.jpg", "img/Backside/ProductsSection/senegal.jpg"],
  },
  {
    id: "17",
    name: "Arsenal FC Home Jersey 2022/23",
    price: 24.99,
    images: ["img/PremierLeague/arsenal.jpg"],
    desc: "The Adidas Arsenal Football Club 2022-23 jersey is of course red and white - in terms of design, the main feature of the Arsenal 22-23 home kit is its collar, which is a polo-style one that is white with a red zig-zag graphic going around the rear.",
    imagesbs: ["img/PremierLeague/arsenal.jpg", "img/Backside/PremierLeague/arsenal.jpg"],
  },
  {
    id: "18",
    name: "Aston Villa Home Jersey 2022/23",
    price: 23.99,
    images: ["img/PremierLeague/aston.jpg"],
    desc: "Villa's 2022/23 Castore home kit merges our unrivalled legacy with technical innovation. Advanced engineering and cutting-edge fabrics deliver a high-performance jersey fit for the elite. Subtle chevrons within the fabric represent the impressive honours won throughout the club's prestigious history.",
    imagesbs: ["img/PremierLeague/aston.jpg", "img/Backside/PremierLeague/aston.jpg"],
  },
  {
    id: "19",
    name: "Bournemouth Home Jersey 2022/23",
    price: 19.99,
    images: ["img/PremierLeague/bournmouth.jpg"],
    desc: "A red V-neck, a white Umbro logo on the right chest, and the club crest in its regular form on the opposite side round off the bold look. Umbro combines the AFC Bournemouth 2022-23 home football shirt with black shorts and red socks.",
    imagesbs: ["img/PremierLeague/bournmouth.jpg", "img/Backside/PremierLeague/bournmouth.jpg"],
  },
  {
    id: "20",
    name: "Brentford FC Home Jersey 2022/23",
    price: 25.99,
    images: ["img/PremierLeague/brent.jpg"],
    desc: "The Umbro Brentford 2022-23 home jersey brings a classic design with four white and three red stripes on the front, back and sleeves, the latter being slightly wider. Made by Umbro.",
    imagesbs: ["img/PremierLeague/brent.jpg", "img/Backside/PremierLeague/brent.jpg"],
  },
  {
    id: "21",
    name: "Brighton FC Home Jersey 2022/23 Home Jersey 2022/23",
    price: 24.99,
    images: ["img/PremierLeague/brighton.jpg"],
    desc: "The Nike Brighton & Hove Albion 2022-23 home football shirt features one broad blue central stripe surrounded by two white stripes of the same width, while the raglan-style sleeves and upper chest area are solid blue. One central yellow pinstripe adds to the electric appearance.",
    imagesbs: ["img/PremierLeague/brighton.jpg", "img/Backside/PremierLeague/brighton.jpg"],
  },
  {
    id: "22",
    name: "Crystal Palace FC Home Jersey 2022/23",
    price: 27.99,
    images: ["img/PremierLeague/crystal.jpg"],
    desc: "The home kit sees the return of the club’s trademark red and blue stripes but in a modern graffiti-style design, accompanied by a white trim around the collar and sleeves.",
    imagesbs: ["img/PremierLeague/crystal.jpg", "img/Backside/PremierLeague/crystal.jpg"],
  },
  {
    id: "23",
    name: "Everton FC Home Jersey 2022/23",
    price: 22.99,
    images: ["img/PremierLeague/everton.jpg"],
    desc: "Everton's new 2022/23 home kit pays homage to the central element of the Club's famous crest – the iconic Prince Rupert's Tower. The home shirt features a heat-embossed tower pattern repeated across the whole jersey, contrasting against flashes of white across each side and finished with a white round neck.",
    imagesbs: ["img/PremierLeague/everton.jpg", "img/Backside/PremierLeague/everton.jpg"],
  },
  {
    id: "24",
    name: "Nottingham Forest FC Home Jersey 2022/23",
    price: 24.99,
    images: ["img/PremierLeague/forest.jpg"],
    desc: "Introducing a simple look, the Macron Nottingham Forest 22-23 home football shirt combines a red base with a subtle graphic on the sleeves inspired by Trent Bridge. Trent Bridge is a central landmark for the club and its supporters as it connects the sporting district with the rest of the city.",
    imagesbs: ["img/PremierLeague/forest.jpg", "img/Backside/PremierLeague/forest.jpg"],
  },
  {
    id: "25",
    name: "Fulham FC Home Jersey 2022/23",
    price: 26.99,
    images: ["img/PremierLeague/fulham.jpg"],
    desc: "The soccer shirts are white in color and are worn with black shorts. The black and white color scheme is used in the design of the merchandise and souvenirs. Black and white was not always the chosen color scheme for the home Fulham strip. White was introduced in 1903 after several seasons wearing red tops.",
    imagesbs: ["img/PremierLeague/fulham.jpg", "img/Backside/PremierLeague/fulham.jpg"],
  },
  {
    id: "26",
    name: "Leeds FC Home Jersey 2022/23",
    price: 24.99,
    images: ["img/PremierLeague/leeds.jpg"],
    desc: "This adidas shirt is a celebration of the club and its loyal supporters, with a finely crafted badge putting your passion on display, every time you adorn our historical colours of white, yellow and blue. The soft AEROREADY fabric features the iconic LUFC script as a repeat print to recognise the 50th anniversary of the 1972 cup-winning side.",
    imagesbs: ["img/PremierLeague/leeds.jpg", "img/Backside/PremierLeague/leeds.jpg"],
  },
  {
    id: "27",
    name: "Leicester FC Home Jersey 2022/23",
    price: 25.99,
    images: ["img/PremierLeague/leicester.jpg"],
    desc: "Leicester City's home kit is traditionally royal blue with white trim, royal blue or white shorts and royal blue socks.",
    imagesbs: ["img/PremierLeague/leicester.jpg", "img/Backside/PremierLeague/leicester.jpg"],
  },
  {
    id: "28",
    name: "Liverpool FC Home Jersey 2022/23",
    price: 22.99,
    images: ["img/PremierLeague/liverpool.jpg"],
    desc: "White contrast collar and cuffs nod to the LFC home shirt worn by the legendary ’74 squad - the re-birth of Shankly’s second team who triumphantly won the FA Cup. While a 97 set between two eternal flames resides on the back of the collar remembers the 97 people who tragically lost their lives at the Hillsborough Disaster.",
    imagesbs: ["img/PremierLeague/liverpool.jpg", "img/Backside/PremierLeague/liverpool.jpg"],
  },
  {
    id: "30",
    name: "Manchester United FC Home Jersey 2022/23",
    price: 29.99,
    images: ["img/PremierLeague/manutd.jpg"],
    desc: "Exploring the design of the kit further, Inigo Turner, Design Director at Adidas said: 'The polo collar is synonymous with Manchester United. Turned up or folded down, it has played a starring role in many of the club’s biggest moments. With such a rich history, we wanted to pay homage to some of the club’s most legendary kits and players.'",
    imagesbs: ["img/PremierLeague/manutd.jpg", "img/Backside/PremierLeague/manutd.jpg"],
  },
  {
    id: "31",
    name: "Newcastle United FC Home Jersey 2022/23",
    price: 26.99,
    images: ["img/PremierLeague/newcastle.jpg"],
    desc: "All Newcastle United kits are crafted with a blend of high-stretch fabrics and cut to enhance performance, offering exceptional ease of movement on pitch and in the stands.",
    imagesbs: ["img/PremierLeague/newcastle.jpg", "img/Backside/PremierLeague/newcastle.jpg"],
  },
  {
    id: "32",
    name: "Southmapton FC Home Jersey 2022/23",
    price: 24.99,
    images: ["img/PremierLeague/south.jpg"],
    desc: "The Hummel Southampton 2022-23 home football shirt contains a lot more white than what we're used to seeing from the Saints. It draws inspiration from those worn by club in the early '80s, inverting the colours, resulting in a striking central red stripe and central badge on a white base. The band is bordered by black lines which run into the black round neck collar.",
    imagesbs: ["img/PremierLeague/sout.jpg", "img/Backside/PremierLeague/sout.jpg"],
  },
  {
    id: "34",
    name: "West Ham FC Home Jersey 2022/23",
    price: 25.99,
    images: ["img/PremierLeague/west.jpg"],
    desc: "The Umbro West Ham United 2022-2023 shirt is claret with raglan sleeves that feature a stripe graphic in white and blue, inspired by a somewhat similar look from the 1991-93 seasons.",
    imagesbs: ["img/PremierLeague/west.jpg", "img/Backside/PremierLeague/west.jpg"],
  },
  {
    id: "35",
    name: "Wolverhampton Wonderers FC Home Jersey 2022/23",
    price: 26.99,
    images: ["img/PremierLeague/wolves.jpg"],
    desc: "The Castore Wolves 2022-2023 home shirt features classic amber, black and white. It comes without any fancy design elements - it has a solid base, with sponsor AstroPay appearing in mainly black with a touch of red.",
    imagesbs: ["img/PremierLeague/wolves.jpg", "img/Backside/PremierLeague/wolves.jpg"],
  },
];

const product = products.find((item) => item.id === productId);

if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;

  const imageContainer = document.getElementById("product-images");
  product.images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.style.width = "500px";
    imgElement.style.marginRight = "10px";
    imageContainer.appendChild(imgElement);
  });

  document.getElementById("product-desc").textContent = product.desc;

  const imageContainerBs = document.getElementById("product-images-bs");
  product.imagesbs.forEach((imageBs) => {
    const imgElementBs = document.createElement("img");
    imgElementBs.src = imageBs;
    imgElementBs.style.width = "120px";
    imgElementBs.style.marginRight = "10px";
    imageContainerBs.appendChild(imgElementBs);
  });
}
