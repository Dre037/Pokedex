import { Observable } from "rxjs"
import { BaseAsync } from "./resource-list.model"

export interface Moves {
    move: BaseAsync
    version_group_details: VersionGroupDetails
}

export interface VersionGroupDetails {
    level_learned_at: number,
    move_learn_method: BaseAsync
    version_group: BaseAsync
}