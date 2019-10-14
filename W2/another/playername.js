const roll20 = () => {
    return Math.floor(Math.random() * 20)
}

const player = {
    prefix: "",
    shortName: "",
    suffix: "",
    longName: ""
}

const createPlayerName = () => {
    var tempnum = roll20()
    switch(tempnum){
        case 0: player.prefix = "Sir"; break
        case 1: player.prefix = "Little"; break
        case 2: player.prefix = "Mr"; break
        case 3: player.prefix = "Mrs"; break
        case 4: player.prefix = "Ms"; break
        case 5: player.prefix = "Mx"; break
        case 6: player.prefix = "Señor"; break
        case 7: player.prefix = "Señorita"; break
        case 7: player.prefix = "Big"; break
        case 8: player.prefix = "Macho"; break
        case 9: player.prefix = "God"; break
        case 10: player.prefix = "Godess"; break
        case 11: player.prefix = "Lord"; break
        case 12: player.prefix = "Lady"; break
        case 13: player.prefix = "Honorable"; break
        case 14: player.prefix = "Dishonorable"; break
        case 15: player.prefix = "Old"; break
        case 16: player.prefix = "Young"; break
        case 17: player.prefix = "Wise"; break
        case 18: player.prefix = "Great"; break
        case 19: player.prefix = "Little-known"; break
    }

    tempnum = roll20()
    switch(tempnum){
        case 0: player.shortName = "Cheesy"; break
        case 1: player.shortName = "X"; break
        case 2: player.shortName = "Lu"; break
        case 3: player.shortName = "Beefcake"; break
        case 4: player.shortName = "Baba"; break
        case 5: player.shortName = "Charlie"; break
        case 6: player.shortName = "Ashley"; break
        case 7: player.shortName = "Tony"; break
        case 7: player.shortName = "Butthead"; break
        case 8: player.shortName = "Freakface"; break
        case 9: player.shortName = "Lazer-eyes"; break
        case 10: player.shortName = "Dogbutt"; break
        case 11: player.shortName = "Scrumplfump"; break
        case 12: player.shortName = "Skirt-twirl"; break
        case 13: player.shortName = "Flatula"; break
        case 14: player.shortName = "Mana"; break
        case 15: player.shortName = "Manley"; break
        case 16: player.shortName = "Jack"; break
        case 17: player.shortName = "Keke"; break
        case 18: player.shortName = "Greatname"; break
        case 19: player.shortName = "Grumpled"; break
    }

    tempnum = roll20()
    switch(tempnum){
        case 0: player.suffix = "only"; break
        case 1: player.suffix = "unremarkable"; break
        case 2: player.suffix = "occultist"; break
        case 3: player.suffix = "mage"; break
        case 4: player.suffix = "warrior"; break
        case 5: player.suffix = "chef"; break
        case 6: player.suffix = "thief"; break
        case 7: player.suffix = "bard"; break
        case 7: player.suffix = "accountant"; break
        case 8: player.suffix = "powerless"; break
        case 9: player.suffix = "unclothed"; break
        case 10: player.suffix = "uncouth"; break
        case 11: player.suffix = "queer"; break
        case 12: player.suffix = "elementalist"; break
        case 13: player.suffix = "bulky"; break
        case 14: player.suffix = "brave"; break
        case 15: player.suffix = "giant"; break
        case 16: player.suffix = "human"; break
        case 17: player.suffix = "elf"; break
        case 18: player.suffix = "demon"; break
        case 19: player.suffix = "accursed"; break
    }
    
    player.longName = `${player.prefix} ${player.shortName}, the ${player.suffix}`
}

createPlayerName()

(player.longName)

