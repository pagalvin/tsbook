# Generics

TypeScript supports a programming construct called *generics*. TypeScript generics allow you to write code that operates against broad swathes of classes and interfaces without giving up strong typing. You write your code to execute against *types* (classes and interfaces), as opposed specific, concrete classes. Once written, you access this generic code by providing a concrete type at runtime. Let's consider an example.

Imagine that you are developing a game and storing and retrieving game information to/from a database. This means you have to implement the classic Create, Read, Update and Delete operations (CRUD) for the various objects in the game. Here's some high level code that beings to implement the game and this logic:

```TypeScript
class Game {
    private _gameState: any;

    public CurrentPlayerIndex: number;
    public Players: Player[];

    constructor(initialGameState: any) { this._gameState = initialGameState;}

}

class Player {
    private _playerState: any;

    public PlayerName: string;
    public PlayerScore: number;

    constructor(initialPlayerState: any) { this._playerState = initialPlayerState; }
}

class GameStateDBHelper {

    public CreateNewGame(): Game {
        // Initialize a new Game object and save it to the back end database.
        // Return the empty game.
        return new Game(null);
    }

    public LoadGame(query: string): Game {
        // Use supplied query to load some game state from the database.
        // Convert that to a GameState object
        // return it
        return new Game(null);
    }

    public SaveGame(gameToSave: Game): boolean {
        // Marshall game state and save it to the back end database.
        return true; // indicates successful save
    }

    public DeleteGame(gameToDelete: Game): boolean {
        // Issue database command to delete game state.
        return true; // indicates successful deletion
    }

}

const gameHelper = new GameStateDBHelper();
const newGame = gameHelper.CreateNewGame();
const oldGame = gameHelper.LoadGame("a database query");

const didSaveGame = gameHelper.SaveGame(oldGame);
const didDeleteGame = gameHelper.DeleteGame(newGame);
```

The code defines three classes:
- `Game`: This is the game object itself, keeping track of overall game state, including a list of players and the currently active player.
- `Player`: Represents a player in the game. Players also have some state information, although its different than a `Game`.
- `GameStateDBHelper`: A utility class that provides input/output operations and supports all four CRUD operations for the Game object.

`GameStateDBHelper` defines four public methods, one for each of the CRUD operations. These each take commonsense input parameters and return commonsense results. Consider `LoadGame`: 

```TypeScript
    public LoadGame(query: string): Game {
        // Use supplied query to load some game state from the database.
        // Convert that to a GameState object
        // return it
        return new Game(null);
    }
```

`LoadGame` is passed a query (think "select * from Games..."). It parses the result and returns back a new `Game` object. Obviously, there's a lot of hand waving going on in the example, but hopefully the concept is clear.

The DB helper object makes it easy to execute the CRUD operations as needed:

```TypeScript
const gameHelper = new GameStateDBHelper();
const newGame = gameHelper.CreateNewGame();
const oldGame = gameHelper.LoadGame("a database query");

const didSaveGame = gameHelper.SaveGame(oldGame);
const didDeleteGame = gameHelper.DeleteGame(newGame);
```

Despite the clarity and strong-typed goodness, this approach is nonetheless problematic. We already know we'll want another database-backed entity - `Player`. If we simply follow the current approach, we end up creating a new helper function, `PlayerStateDBHelper`.  It has to provide the same CRUD functions and each one shaped almost identically to GameState. "Shape" in this case means:
- Looking up database connection information.
- Accessing the database
- Executing some common command that varies only in small details from one object to another
- Managing errors
- Returning success/fail messages

We can mitigate most of that using TypeScript's generic functionality. Here's how it would look like:

```TypeScript
interface DBBackedEntity {
    TableName: string;
}

class GameState implements DBBackedEntity {
    private myDBTableName: string;
    public get TableName(): string { return this.myDBTableName; }

    public CurrentPlayerIndex: number;
    public AllPlayers: GamePlayer[];

    constructor(someGameState: any) { 
        this.myDBTableName = "Games";
    }
    
}

class GamePlayer implements DBBackedEntity {
    private myDBTableName: string;
    public get TableName(): string { return this.myDBTableName; }

    public PlayerName: string;
    public Score: number;

    constructor(somePlayerState: any) { 
        this.myDBTableName = "Players";
    }
}

class DBHelper<T extends DBBackedEntity> {
    public CreateRecord() : T { return null; }
    public ReadRecord(query: any): T { return null; }
    public DeleteRecord(basedOn: T): boolean { return true; }
    public UpdateRecord(basedOn: T) : boolean { return true; }
}

const gameStateHelper = new DBHelper<GameState>();
const gamePlayerHelper = new DBHelper<GamePlayer>();

const newPlayer = gamePlayerHelper.CreateRecord();
console.log(`New player score: ${newPlayer.Score}.`)

const existingGameState = gameStateHelper.ReadRecord("some query goes here");
const newGameState = gameStateHelper.CreateRecord();

const deleteResult = gameStateHelper.DeleteRecord(newGameState);
const updateResult = gameStateHelper.UpdateRecord(existingGameState);
```

Generics introduce some new syntax and leverage existing concepts (like interfaces) in new ways. 

The code first defines a new interface, `DBBackedEntity`. This interface requires a single text field, "TableName". This obviously maps to a database table via its name.

It then creates two models for the Game and its Players respectively. Each of them implements the DBBackedEntity interface and assigns a database table name via the object's constructor.

The `DBHelper` class introduces the generics syntax:

```
class DBHelper<T extends DBBackedEntity> {
    public CreateRecord() : T { return null; }
    public ReadRecord(query: any): T { return null; }
    public DeleteRecord(basedOn: T): boolean { return true; }
    public UpdateRecord(basedOn: T) : boolean { return true; }
}
```

This syntax, `<T extends DBBackedEntity>` effectively says, "The DB helper class works against any type (class) that implements the DBBackedEntity interface."  When client code instantiates an instance of DBHelper, it will specify a value for that parameter, `T`. These two lines show how to pass a value for `T`:

```TypeScript
const gameStateHelper = new DBHelper<GameState>();
const gamePlayerHelper = new DBHelper<GamePlayer>();
```

When working with generics, we supply type parameters via angle brackets: `DBHelper<GameState>` and `DBHelper<GamePlayer>`. TypeScript replaces the `T` parameter in the `DBHelper` class with `GameState` and `GamePlayer` respectively. 

**video: 



