import { Observable } from "rxjs"
import { BaseAsync } from "./resource-list.model"

export interface Abilities {
    ability: BaseAsync<any>
    is_hidden: boolean,
    slot: number
}