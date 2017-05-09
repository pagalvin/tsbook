


interface BookModel {
    Author: string[];
    Title: string;
    Genre: string;
    ShortDescription: string;
    TotalPages: number;
    Condition: string;
}

let book1: BookModel = {
    Author: ["Paul Galvin"],
    Title: "Casual Introduction to TypeScript",
    Genre: "Tech",
    ShortDescription: "Casual, but not too casual, intro to TypeScript",
    Condition: "Electronic",
    TotalPages: 100
}

let book2: BookModel = {
    Author: ["Steven Erickson"],
    Title: "Gardens of the Moon",
    Genre: "High Fantasy",
    ShortDescription: "Malazan Book of the Fallen",
    Condition: "New",
    TotalPages: 712
}


