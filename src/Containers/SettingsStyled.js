import styled from 'styled-components'
import { Button as AntButton } from 'antd';

export const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.h1`
  font-size: 20px;
  margin-top: 20px;
`

export const Button = styled(AntButton)`
  position: fixed;
  left: 20px;
  top: 20px;
`
