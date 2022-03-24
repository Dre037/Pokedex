import { Observable } from "rxjs"
import { BaseAsync } from "./resource-list.model"

export interface Abilities {
    ability: BaseAsync
    is_hidden: boolean,
    slot: number
}