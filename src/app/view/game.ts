export interface Game {
    id: string;
    name: string;
    link: string;
    type?: string;
    releaseDate?: Date;
    platform?: string[];
}