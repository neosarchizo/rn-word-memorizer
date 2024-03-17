import React, {FC} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {ParamList} from './types'
import {VocaMain, VocaAdd} from '../../../screens'

const Stack = createNativeStackNavigator<ParamList>()
const {Navigator, Screen} = Stack

const Router: FC = () => {
  return (
    <Navigator>
      <Screen name="VocaMain" component={VocaMain} options={{title: '단어장'}} />
      <Screen name="VocaAdd" component={VocaAdd} options={{title: '단어 추가'}} />
    </Navigator>
  )
}

export default Router
