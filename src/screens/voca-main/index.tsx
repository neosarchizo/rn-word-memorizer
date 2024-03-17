import React, {Component, FC, useCallback, useEffect} from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {Props} from './types'
import {TxtAdd} from './styles'

const Main: FC<Props> = props => {
  const {navigation} = props

  const handleOnRenderHeaderRight = useCallback<() => Component>(
    () => (
      <TouchableOpacity
        onPress={() => {
          navigation.push('VocaAdd')
        }}>
        <TxtAdd>추가하기</TxtAdd>
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
