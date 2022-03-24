import { Observable } from "rxjs"
import { BaseAsync } from "./resource-list.model"

export interface GameIndices {
    game_index: number,
    version: BaseAsync<any>
}