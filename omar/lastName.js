let total = parseInt(prompt("How many people do you know?"));
let namesList = [];

for (let count = 0; count < total; count++) {
    let entry = prompt(`Enter full name for person ${count + 1}`);
    namesList.push(entry);
}

let details = analyzeNames(namesList);

function analyzeNames(list) {
    let index = 0;
    let maxLastNameLength = 0;
    let minLength = list[0].length;
    let maxLength = list[0].length;

    for (let i = 0; i < list.length; i++) {
        let spaceIndex = list[i].indexOf(" ");
        let last = spaceIndex !== -1 ? list[i].substring(spaceIndex + 1) : "";
        if (last.length > maxLastNameLength) {
            maxLastNameLength = last.length;
            index = i;
        }
        if (list[i].length < minLength) minLength = list[i].length;
        if (list[i].length > maxLength) maxLength = list[i].length;
    }

    return {
        longest: list[index],
        difference: maxLength - minLength
    };
}

console.log("Longest Last Name: " + details.longest);
console.log("Name Length Range: " + details.difference);
console.log("All Names:");
for (let name of namesList) {
    console.log(name);
}
