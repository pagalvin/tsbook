interface PersonName {
    firstName: string;
    lastName: string;
}

const Paul: PersonName = { firstName: "Paul", lastName: "Galvin"}
const Kelly: PersonName = { firstName: "TBD", lastName: "TBD"}

const Aidan: PersonName; // <-- Not allowed, must always initialize const variables when defined


Kelly.firstName = "Kelly"; // <-- perfectly OK
Paul = null; // <-- Not allowed, cannot use const vars in LHS of an assignment







