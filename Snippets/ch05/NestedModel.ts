interface AuthorModel {
    FirstName: string;
    LastName: string;
    PreferredEmail: string;
}

interface BookModel {
    Authors: AuthorModel[];
    Title: string;
    Genre: string;
    ShortDescription: string;
    TotalPages: number;
    Condition: string;
}

// Example 1: Create an author object first, then add it to the book instance
const FoodBookAuthor1: AuthorModel = {
    FirstName: "Paul",
    LastName: "Galvin",
    PreferredEmail: "galvin.paul@gmail.com"
}

const FoodBookAuthor2: AuthorModel = {
    FirstName: "Kelly",
    LastName: "Smith",
    PreferredEmail: "ksmith123@awesomefoods.com"
}

const foodBook: BookModel = {
    Authors: [FoodBookAuthor1, FoodBookAuthor2],
    Title: "Foods - The Right Food for the Right Meal",
    Genre: "Life Hacks",
    ShortDescription: "Eggs are not for dinner",
    TotalPages: 158,
    Condition: "Used - Good"
}

// Example 2: Create a book instance in one line.
const GotM: BookModel = {
    Authors: [{
        FirstName: "Steven",
        LastName: "Erikson",
        PreferredEmail: "ganoes.paran@malazanempire.gov"
    }],
    Title: "Gardens of the Moon",
    Genre: "High Fantasy",
    ShortDescription: "Empress tries to conquer city, fails, but wins something better",
    TotalPages: 772,
    Condition: "New"
}
