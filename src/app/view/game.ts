export interface Game {
    id: string;
    name: string;
    link: string;
    genre?: string;
    releaseDate?: Date;
    platform?: string[];
}