import React, {FC} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {ParamList} from './types'
import {VocaMain, VocaAdd} from '../../../screens'

const Stack = createNativeStackNavigator<ParamList>()
const {Navigator, Screen} = Stack

const Router: FC = () => {
  return (
    <Navigator>
      <Screen name="VocaMain" component={VocaMain} />
      <Screen name="VocaAdd" component={VocaAdd} />
    </Navigator>
  )
}

export default Router
