export class Song {
  id!: number;
  name!: String
  path!: String
  img!: String
  singer!: String[]
  hot!: Boolean
  nearly!: Number
  albumID!: Number[]
}

export class List {
  namelist!: Song
}

