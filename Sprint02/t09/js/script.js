function displayHeroes (team, universe, race, eyeColor, hairColor) {
    if ((team === "Avengers" || team === "S.H.I.E.L.D") && universe === "Marvel" && race === "human" && eyeColor === "green" && (hairColor === "green" || hairColor === "lightBrown")) {
        alert("This is Black Widow!")
    } else if ((team === "Justice League Of America" || team === "Teen Titans") && universe === "DC comics" && (race === "human" || race === "kryptonian") && eyeColor === "blue" && hairColor === "black") {
        alert("This is a Superman or Robin!")
    } else {
        alert("Didn't recognize!")
    }
}
