import styled, {css} from 'styled-components/native'

export const Container = styled.TouchableOpacity<{opened?: boolean}>`
  width: 100%;
  height: 100px;
  display: flex;

  flex-direction: column;
  align-items: center;

  ${props =>
    props.opened
      ? css`
          height: 200px;
        `
      : ''}
`

export const Content = styled.View`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  border-width: 2px;
  border-color: black;
  padding: 10px;

  display: flex;
  flex-direction: column;
`

export const TxtName = styled.Text`
  color: black;
  font-size: 30px;
  font-weight: bold;
`

export const TxtMeaning = styled.Text`
  margin-top: 10px;
  color: black;
  font-size: 20px;
`
