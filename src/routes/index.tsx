import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {ParamList} from './types'
import Voca from './stacks/voca'

const Tab = createBottomTabNavigator<ParamList>()
const {Navigator, Screen} = Tab

const Router: FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Screen name="Voca" component={Voca} />
        <Screen name="Sentence" component={Voca} />
        <Screen name="Quiz" component={Voca} />
        <Screen name="Settings" component={Voca} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
