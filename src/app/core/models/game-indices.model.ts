import { Observable } from "rxjs"

export interface GameIndices {
    game_index: number,
    version: {
        name: string,
        url: string,
        detail?: Observable<any>
    }
}