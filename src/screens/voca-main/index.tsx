import React, {Component, FC, useCallback, useEffect} from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {Props} from './types'
import {TxtRightHeaderButton} from '../../styled-components'
import {useWord} from '../../contexts/word'

const Main: FC<Props> = props => {
  const {navigation} = props

  const [{words}] = useWord()

  console.log('words!!', words)

  const handleOnRenderHeaderRight = useCallback<() => Component>(
    () => (
      <TouchableOpacity
        onPress={() => {
          navigation.push('VocaAdd')
        }}>
        <TxtRightHeaderButton>추가하기</TxtRightHeaderButton>
      </TouchableOpacity>
    ),
    [navigation],
  )

  useEffect(() => {
    navigation.setOptions({
      headerRight: handleOnRenderHeaderRight,
    })
  }, [navigation, handleOnRenderHeaderRight])

  return <Text>Voca Main</Text>
}

export default Main
