import React, {FC, useState} from 'react'

import {Props} from './types'
import {Container, Content, TxtMeaning, TxtName} from './styles'

const Main: FC<Props> = props => {
  const {
    word: {name, meaning},
  } = props

  const [opened, setOpened] = useState<boolean>(false)

  return (
    <Container
      opened={opened}
      onPress={() => {
        setOpened(v => !v)
      }}>
      <Content>
        <TxtName>{name}</TxtName>
        {opened ? <TxtMeaning>{meaning}</TxtMeaning> : null}
      </Content>
    </Container>
  )
}

export default Main
