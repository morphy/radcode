import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 1
    },
    wordsPerSentence: {
        max: 3,
        min: 1
    }
});

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let data = [];

for (let i = 0; i < 9; i++) {
    let item = {};

    item.id = i;

    /* this api doesn't seem to have images with id 1007 or 1017 */

    let randomImage = getRandom(1000, 1016);
    if(randomImage === 1007 || randomImage === 1017) randomImage++;

    item.src = `https://picsum.photos/id/${randomImage}/1000`;
    item.comments = [];
    item.likes = getRandom(100, 10000);

    for (let j = 0; j < 8; j++) {
        let comment = {};
        let date = randomDate(new Date(2020, 1, 1), new Date());

        comment.id = j;
        //comment.date = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
        comment.date = date.toLocaleDateString();
        comment.content = lorem.generateSentences(1);
        comment.photo = `https://mui.com/static/images/avatar/${getRandom(1, 7)}.jpg`;

        item.comments.push(comment);
    }

    data.push(item);
}

export default data;