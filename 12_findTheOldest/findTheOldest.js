const findTheOldest = (people) => {
    var year = new Date().getFullYear()
    var ordered_people = people.sort((a, b) => (
        ((a.yearOfDeath || year) - a.yearOfBirth) > ((b.yearOfDeath  || year) - b.yearOfBirth )) ? 1 : -1);
    var oldest = ordered_people.at(-1)
    return oldest
}
// Do not edit below this line
module.exports = findTheOldest;
