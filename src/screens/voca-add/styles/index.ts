import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const TxtLabel = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
`

export const Input = styled.TextInput`
  width: 100%;
  font-size: 20px;
  background-color: #333333;
  border-radius: 10px;
  margin-top: 2px;
  margin-bottom: 15px;
`
