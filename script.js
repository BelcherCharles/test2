var JohnObject = {
    FirstName: "John",
    LastName: "Cleese",
    Movies: ["Monty Python and The Search For The Holy Grail", "The Meaning Of Life", "The Life of Brian"],
    Television: ["Fawlty Towers", "Monty Pythons Flying Circus", "Cheers"],
    BornIn: "Weston-super-Mare, England",
    College: "Downing College",
    Spouse: "Jennifer Wade",
    FavoriteAnimal: "lemurs",
    FavoriteFood: ["Spam!", "Wafer-thin mints", "Strawberries?"],
    Jobs: ["teacher of English, Latin, science, geography, & history", "screenwriter and film-maker"],
    WouldSkydive: true
}

var JohnName = (JohnObject.FirstName) + " " + (JohnObject.LastName);
document.querySelector("#JohnName").innerHTML = JohnName;
document.querySelector("#Food1").innerHTML = JohnObject.FavoriteFood[0];
document.querySelector("#Food2").innerHTML = JohnObject.FavoriteFood[1];
document.querySelector("#Food3").innerHTML = JohnObject.FavoriteFood[2];
document.querySelector("#Movie1").innerHTML = JohnObject.Movies[0];
document.querySelector("#Movie2").innerHTML = JohnObject.Movies[1];
document.querySelector("#Movie3").innerHTML = JohnObject.Movies[2];
document.querySelector("#Show1").innerHTML = JohnObject.Television[0];
document.querySelector("#Show2").innerHTML = JohnObject.Television[1];
document.querySelector("#Show3").innerHTML = JohnObject.Television[2];
document.querySelector("#Spouse").innerHTML = "John's current wife's name is" + " " + JohnObject.Spouse + ".";
document.querySelector("#Pet").innerHTML = "John has a passionate love of" + " " + JohnObject.FavoriteAnimal + ".";
document.querySelector("#BornIn").innerHTML = "John was born in" + " " + JohnObject.BornIn + ".";
document.querySelector("#FirstJob").innerHTML = "John's first job was as a" + " " + JohnObject.Jobs[0];
document.querySelector("#DreamJob").innerHTML = "John is living his dream job of being a" + " " + JohnObject.Jobs[1];
if (JohnObject.WouldSkydive == true){
document.querySelector("#Skydive").innerHTML = "John would go skydiving."
} else {document.querySelector("#Skydive").innerHTML = "John would not go skydiving."
}