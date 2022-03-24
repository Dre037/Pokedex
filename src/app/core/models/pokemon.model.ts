import { Abilities } from "./abilities.model"
import { Forms } from "./forms.model"
import { GameIndices } from "./game-indices.model"
import { Moves } from "./moves.model"
import { BaseAsync } from "./resource-list.model"
import { Stats } from "./stats.model"

export interface Pokemon {
    abilities: Abilities[],
    base_experience: number,
    forms: Forms[],
    game_indices: GameIndices[],
    height: number,
    held_items: [],
    id: number,
    is_default: boolean,
    location_area_encouters: string,
    moves: Moves[],
    name: string,
    order: number,
    past_types: [],
    species: BaseAsync,
    sprites: Sprites,
    stats: Stats[], 
    types: Types[],
    weight: number
}

export interface Sprites {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
    other: {
        dream_world: {
            front_default: string,
            front_female: string
        },
        home: {
            front_default: string
            front_female: string
            front_shiny: string
            front_shiny_female: string
        },
        'official-artwork': {
            front_default: string
        }
    }
}

export interface Types {
    slot: number,
    type: BaseAsync
}