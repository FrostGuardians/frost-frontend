export interface FirebaseDate {
    seconds: number,
    nanoseconds: number
}

export interface Item {
    name: string,
    type: string,
    open: boolean,
    expiration: FirebaseDate
}

export interface Inventory {
    date: FirebaseDate,
    items: Item[]
}

export interface FridgeImage {
    date: FirebaseDate,
    urls: string[]
}

export interface Ingredient {
    name: string,
    available: boolean
}

export interface Recipe {
    image_url: string,
    name: string,
    ingredients: Ingredient[],
    instructions: string
}

export interface ShoppingList {
    items: string[]
}