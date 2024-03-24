import React, {Component, FC, useCallback, useEffect} from 'react'
import {TouchableOpacity} from 'react-native'

import {Props} from './types'
import {TxtRightHeaderButton} from '../../styled-components'
import {useWord} from '../../contexts/word'
import {List} from './styles'
import Item from './components/item'

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

  /*
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
  */

  return (
    <List data={words} renderItem={({item}) => <Item word={item} />} keyExtractor={w => w.id} />
  )
}

export default Main
