import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {WordManager, WordState, WordWithID} from './types'
import {STORAGE_KEY} from './constants'

const WordContext = createContext<[WordState, WordManager]>([
  {
    words: [],
  },
  {
    addWord: () => {},
    removeWord: () => {},
  },
])

export const WordProvider: FC<PropsWithChildren> = props => {
  const {children} = props

  const [words, setWords] = useState<Array<WordWithID>>([])

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(value => {
      if (value === null) {
        return
      }
      setWords(JSON.parse(value))
    })
    return () => {}
  }, [])

  const manager = useMemo<WordManager>(
    () => ({
      addWord: w => {
        setWords(v => {
          // v === 현재 상태의 words
          // ...v v배열의 값들을 스프레딩
          // v = [1, 2, 3]
          // ...v === 1, 2, 3
          // v = {a:1, b:2}
          // ...v === a:1, b:2
          const newWord: WordWithID = {...w, id: uuid.v4()}
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([newWord, ...v]))
          return [newWord, ...v]
        })
        // TODO store data in storage
      },
      removeWord: id => {
        setWords(v =>
          v.filter(w => {
            const {id: wId} = w
            return wId !== id
          }),
        )
      },
    }),
    [],
  )

  const value = useMemo<[WordState, WordManager]>(
    () => [
      {
        words,
      },
      manager,
    ],
    [words, manager],
  )

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>
}

export const useWord: () => [WordState, WordManager] = () => useContext(WordContext)
