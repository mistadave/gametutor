export interface IGameLink{
    id: string;
    gameId: string;
    url: string;
    rating: number;
    tags?: string[];
}

export class GameLink implements IGameLink{
    id: string;
    gameId: string;
    url: string;
    rating: number;
    tags?: string[];

    constructor(id: string, gameId: string, url: string, rating: number, tags?: string[]){
        this.id = id;
        this.gameId = gameId;
        this.url = url;
        this.rating = rating;
        this.tags=tags;
    }
}