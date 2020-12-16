import { videogames } from "../js/videodata.js";

const MainContainer = document.getElementById("container");

const PhotoBoxes = videogames.map(SpacePhotos => {
    let CatBox = videogames.find(Cat => {
        return Cat.name === SpacePhotos.name;
    });

    return {
		Name: CatBox.name,
        Link: CatBox.link,
        Img: CatBox.image,
        
    };

});

PhotoBoxes.forEach(SpacePhotos => {

    let Main = document.createElement("div");
    let NameEl = document.createElement("h3");
    let ImgEl = document.createElement("img");
    let LinkEl = document.createElement("a");

    NameEl.textContent = SpacePhotos.Name;
    LinkEl.textContent = SpacePhotos.Name + "'s Website";
    LinkEl.setAttribute("href", SpacePhotos.Link);
    LinkEl.setAttribute("target", "_blank");
    ImgEl.src = SpacePhotos.Img;

    if(SpacePhotos.Img == null) {
        ImgEl.src = "/media/error.jpg"
    };

    Main.className = "containerMain";
    NameEl.className = "h2";
    LinkEl.className = "gamelink";
    ImgEl.className = "gameimg";

    MainContainer.appendChild(Main);
    Main.appendChild(NameEl);
    Main.appendChild(ImgEl);
    Main.appendChild(LinkEl);

    console.log(NameEl);

});

