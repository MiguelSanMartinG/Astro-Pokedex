export type PokemonList = {
    readonly count?:    number;
    readonly next?:     string;
    readonly previous?: null;
    readonly results?:  Result[];
}

export type Result = {
    readonly name?: string;
    readonly url?:  string;
}
