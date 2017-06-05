class GameState {
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

    public CreateNewGameState(): GameState {
        // Initialize a new GameState object and save it to the back end database.
        return new GameState(null);
    }

    public LoadGameState(query: string) {
        // Use supplied query to load some game state from the database.
        // Convert that to a GameState object
        // return it
        return new GameState(null);
    }

    public SaveGameState(gametoSave: GameState): boolean {
        // Marshall game state and save it to the back end database.
        return true; // indicates successful save
    }

    public DeleteGameState(): boolean {
        // Issue database command to delete game state.
        return true; // indicates successful deletion
    }

}
