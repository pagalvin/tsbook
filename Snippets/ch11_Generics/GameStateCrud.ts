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

    public SaveGame(gametoSave: Game): boolean {
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


