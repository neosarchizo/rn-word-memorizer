import React, {Component, FC, useCallback, useEffect, useState} from 'react'
import {TouchableOpacity} from 'react-native'

import {Props} from './types'
import {TxtRightHeaderButton} from '../../styled-components'
import {Container, Input, TxtLabel} from './styles'

const Main: FC<Props> = props => {
  const {navigation} = props

  const [word, setWord] = useState<string>('')
  const [meaning, setMeaning] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [pronunciation, setPronunciation] = useState<string>('')

  const handleOnRenderHeaderRight = useCallback<() => Component>(
    () => (
      <TouchableOpacity onPress={() => {}}>
        <TxtRightHeaderButton>완료</TxtRightHeaderButton>
      </TouchableOpacity>
    ),
    [],
  )

  useEffect(() => {
    navigation.setOptions({
      headerRight: handleOnRenderHeaderRight,
    })
  }, [navigation, handleOnRenderHeaderRight])

  return (
    <Container>
      <TxtLabel>단어</TxtLabel>
      <Input value={word} onChangeText={setWord} />
      <TxtLabel>의미</TxtLabel>
      <Input value={meaning} onChangeText={setMeaning} />
      <TxtLabel>설명</TxtLabel>
      <Input value={description} onChangeText={setDescription} />
      <TxtLabel>발음</TxtLabel>
      <Input value={pronunciation} onChangeText={setPronunciation} />
    </Container>
  )
}

export default Main
