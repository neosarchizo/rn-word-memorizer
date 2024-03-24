export interface Word {
  name: string
  meaning: string
  description: string
  pronunciation: string
}

export interface WordWithID extends Word {
  id: string
}

export interface WordState {
  words: Array<WordWithID>
}

export interface WordManager {
  addWord: (w: Word) => void
  removeWord: (id: string) => void
}
