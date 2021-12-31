let animeData
let select = "name"

function onload() {
getAnimeCharacters()
let inp = document.getElementById("searchBar")
let inp2 = document.getElementById("selectSeachType")
inp.addEventListener("keyup", function() {
    let filter
    if(select == "name") {
      filter = animeData.filter(w => w.name.includes(inp.value))  
    }
    else if(select == "anime") {
        filter = animeData.filter(w => w.anime.includes(inp.value))
    }
   
   console.log(filter)

   let mapped = ""
for(let nya of filter) {
    if(nya.anime == "Another") {
        mapped = mapped + `<li class="characters another">
    <h2>${nya.name}</h2>
    <p>Age: ${nya.age}</p>
    <p>Gender: ${nya.gender}</p>
    <p>Anime: ${nya.anime}</p>
    <img src="${nya.picture}">
</li>`;
    }
    else {
        mapped = mapped + `<li class="characters">
    <h2>${nya.name}</h2>
    <p>Age: ${nya.age}</p>
    <p>Gender: ${nya.gender}</p>
    <p>Anime: ${nya.anime}</p>
    <img src="${nya.picture}">
</li>`;
    }
    


}
document.getElementById("ul").innerHTML = mapped;
})
inp2.addEventListener("click", function() {
    select = inp2.value
})
}
async function getAnimeCharacters() {
let url = location.href + "amineData/get"
let body = {}
let response = await fetch(url, {method: "POST", body: JSON.stringify(body)})
let data = await response.json()
animeData = data.characters


let mapped = ""
for(let nya of animeData) {
    if(nya.anime == "Another") {
        mapped = mapped + `<li class="characters another">
    <h2>${nya.name}</h2>
    <p>Age: ${nya.age}</p>
    <p>Gender: ${nya.gender}</p>
    <p>Anime: ${nya.anime}</p>
    <img src="${nya.picture}">
</li>`;
    }
    else {
        mapped = mapped + `<li class="characters">
    <h2>${nya.name}</h2>
    <p>Age: ${nya.age}</p>
    <p>Gender: ${nya.gender}</p>
    <p>Anime: ${nya.anime}</p>
    <img src="${nya.picture}">
</li>`;
    }
    


}
document.getElementById("ul").innerHTML = mapped;

console.log(data)
}