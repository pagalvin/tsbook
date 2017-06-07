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


