import { Button as AntButton } from 'antd'
import styled from 'styled-components'
import { Main } from '../Components/Card'

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px 5%;
  background-color: #f8fafa;
  position: relative;
  max-width: 1180px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardModalTitle = styled.p`
  font-size: 20px;
`

export const CardModalDescription = styled.p`
  font-size: 16px;
`

export const Button = styled(AntButton)`
  height: 80px;
  width: 80px;
  align-self: center;
`

export const EmptyCard = styled(Main)`
  justify-content: center;
`
