class Profile {
    constructor(name, url, stars, content) {
        this.name = name;
        this.url = url;
        this.stars = stars;
        this.content = content;
    }

    getProfile() {
        return {"name": this.name, "url": this.url,
                "stars": this.stars, "content": this.content};
    }
}

let Aureulius = new Profile("Marcus Aureulius", "https://cdn.pixabay.com/photo/2017/09/06/14/36/marcus-aurelius-2721715_960_720.jpg", 5, 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laborum maiores officiis quas beatae, hic cumque voluptate dolorum incidunt reprehenderit dolores neque dolorem architecto consectetur quisquam sunt magnam, dolor suscipit recusandae odio voluptatum consequatur sequi. Veniam nostrum quia aut adipisci perferendis illum magnam, minus vel maxime eligendi iste voluptatem pariatur.");

let Augustus = new Profile("Caesar Augustus", "https://cdn.pixabay.com/photo/2015/09/24/11/09/roman-955274_960_720.jpg", 4,
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nesciunt natus enim voluptate dolore aliquam eligendi omnis tempora deleniti suscipit!");

let Caesar = new Profile("Julius Caesar", "https://cdn.pixabay.com/photo/2016/12/01/17/02/julius-caesar-1875699_960_720.jpg", 5,
"Lorem ipsum dolor sit amet.");

let Ramses = new Profile("Ramses", "https://cdn.pixabay.com/photo/2017/03/22/18/40/egypt-2166020_960_720.jpg", 5,
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis, maxime inventore officiis saepe beatae?")

let Tutankhamun = new Profile("Tutankhamun", "https://cdn.pixabay.com/photo/2014/10/11/15/26/tutankhamun-484699_960_720.jpg", 3,
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum omnis quis ipsa possimus.");

const right = document.querySelector(".right");
const left = document.querySelector(".left");
let profileArray = [Aureulius, Augustus, Caesar, Ramses, Tutankhamun]
let page = 0;

right.onclick = function() {
    if (page+1 > profileArray.length-1) {
        right.style.backgroundColor = "red";
        return ;
    } else {
        page += 1;
        left.style.backgroundColor = "lightblue";
        setUpProfile(profileArray[page]);
    }
}

left.onclick = function() {
    if (page-1 < 0) {
        left.style.backgroundColor = "red";
        return ;
    } else {
        page -= 1;
        right.style.backgroundColor = "lightblue";
        setUpProfile(profileArray[page]);
    }
}

function setStars(times) {
    const numbers = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five"}
    /* empties stars */
    for (let i = 1; i <= 5; i++) {
        const empty_star = document.querySelector("img."+numbers[i]);
        empty_star.setAttribute("src", "empty_star.png");
    }
    /* then fill the stars*/
    for (let i = 1; i <= times; i++) {
        const star = document.querySelector("img."+numbers[i]);
        star.setAttribute("src", "star.png");
    }
}

/* setting profile */
function setUpProfile(profile) {
    const profileInfo = profile.getProfile();
    const titleName = document.querySelector(".name");
    const profilePicture = document.querySelector(".round");
    const text = document.querySelector(".content");

    setStars(profileInfo.stars);

    titleName.textContent = profileInfo.name;
    profilePicture.style.backgroundImage = "url("+ profileInfo.url +")";
    text.textContent = profileInfo.content;
}


setUpProfile(profileArray[0]);


