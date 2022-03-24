import { Observable } from "rxjs"

export interface ResourceSet<T> {
    count: number, 
    next: string,
    results: T[],
    previous: string
}

export interface BaseAsync<T> {
    name: string,
    url: string,
    detail?: Observable<T>
}