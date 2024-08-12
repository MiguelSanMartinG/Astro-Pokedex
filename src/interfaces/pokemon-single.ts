export type PokeResponse = {
    readonly abilities?:              Ability[];
    readonly baseExperience?:         number;
    readonly cries?:                  Cries;
    readonly forms?:                  Species[];
    readonly gameIndices?:            GameIndex[];
    readonly height?:                 number;
    readonly heldItems?:              any[];
    readonly id?:                     number;
    readonly isDefault?:              boolean;
    readonly locationAreaEncounters?: string;
    readonly moves?:                  Move[];
    readonly name?:                   string;
    readonly order?:                  number;
    readonly pastAbilities?:          any[];
    readonly pastTypes?:              any[];
    readonly species?:                Species;
    readonly sprites?:                Sprites;
    readonly stats?:                  Stat[];
    readonly types?:                  Type[];
    readonly weight?:                 number;
}

export type Ability = {
    readonly ability?:  Species;
    readonly isHidden?: boolean;
    readonly slot?:     number;
}

export type Species = {
    readonly name?: string;
    readonly url?:  string;
}

export type Cries = {
    readonly latest?: string;
    readonly legacy?: string;
}

export type GameIndex = {
    readonly gameIndex?: number;
    readonly version?:   Species;
}

export type Move = {
    readonly move?:                Species;
    readonly versionGroupDetails?: VersionGroupDetail[];
}

export type VersionGroupDetail = {
    readonly levelLearnedAt?:  number;
    readonly moveLearnMethod?: Species;
    readonly versionGroup?:    Species;
}

export type GenerationV = {
    readonly blackWhite?: Sprites;
}

export type GenerationIv = {
    readonly diamondPearl?:        Sprites;
    readonly heartgoldSoulsilver?: Sprites;
    readonly platinum?:            Sprites;
}

export type Versions = {
    readonly generationI?:    GenerationI;
    readonly generationIi?:   GenerationIi;
    readonly generationIii?:  GenerationIii;
    readonly generationIv?:   GenerationIv;
    readonly generationV?:    GenerationV;
    readonly generationVi?:   { [key: string]: Home };
    readonly generationVii?:  GenerationVii;
    readonly generationViii?: GenerationViii;
}

export type Other = {
    readonly dream_world?:      DreamWorld;
    readonly home?:            Home;
    readonly officialArtwork?: OfficialArtwork;
    readonly showdown?:        Sprites;
}

export type Sprites = {
    readonly backDefault?:      string;
    readonly backFemale?:       null;
    readonly backShiny?:        string;
    readonly backShinyFemale?:  null;
    readonly frontDefault?:     string;
    readonly frontFemale?:      null;
    readonly frontShiny?:       string;
    readonly frontShinyFemale?: null;
    readonly other?:            Other;
    readonly versions?:         Versions;
    readonly animated?:         Sprites;
}

export type GenerationI = {
    readonly redBlue?: RedBlue;
    readonly yellow?:  RedBlue;
}

export type RedBlue = {
    readonly backDefault?:      string;
    readonly backGray?:         string;
    readonly backTransparent?:  string;
    readonly frontDefault?:     string;
    readonly frontGray?:        string;
    readonly frontTransparent?: string;
}

export type GenerationIi = {
    readonly crystal?: Crystal;
    readonly gold?:    Gold;
    readonly silver?:  Gold;
}

export type Crystal = {
    readonly backDefault?:           string;
    readonly backShiny?:             string;
    readonly backShinyTransparent?:  string;
    readonly backTransparent?:       string;
    readonly frontDefault?:          string;
    readonly frontShiny?:            string;
    readonly frontShinyTransparent?: string;
    readonly frontTransparent?:      string;
}

export type Gold = {
    readonly backDefault?:      string;
    readonly backShiny?:        string;
    readonly frontDefault?:     string;
    readonly frontShiny?:       string;
    readonly frontTransparent?: string;
}

export type GenerationIii = {
    readonly emerald?:          OfficialArtwork;
    readonly fireredLeafgreen?: Gold;
    readonly rubySapphire?:     Gold;
}

export type OfficialArtwork = {
    readonly frontDefault?: string;
    readonly frontShiny?:   string;
}

export type Home = {
    readonly frontDefault?:     string;
    readonly frontFemale?:      null;
    readonly frontShiny?:       string;
    readonly frontShinyFemale?: null;
}

export type GenerationVii = {
    readonly icons?:             DreamWorld;
    readonly ultraSunUltraMoon?: Home;
}

export type DreamWorld = {
    readonly frontDefault?: string;
    readonly frontFemale?:  null;
}

export type GenerationViii = {
    readonly icons?: DreamWorld;
}

export type Stat = {
    readonly baseStat?: number;
    readonly effort?:   number;
    readonly stat?:     Species;
}

export type Type = {
    readonly slot?: number;
    readonly type?: Species;
}
