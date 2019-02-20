import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Icon } from 'antd'

import { fadeIn } from 'react-animations'
const fadeAnimation = keyframes`${fadeIn}`

export const Main = styled.h1`
  height: 366px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 1px 10px 0 rgba(52, 68, 66, 0.08);
  margin: 15px 0px;
  overflow: hidden;
  transition: 200ms;
  &:hover {
    transform: translateY(-6px);
  }
  animation: 0.3s ${fadeAnimation};
  position: relative;
`
const Image = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
`

const Title = styled.h1`
  font-size: 19px;
  font-family: 'Noto Serif', serif;
  margin: 18px 20px;
  line-height: 26px;
`

const Description = styled.h1`
  font-size: 15px;
  font-family: 'Noto Serif', serif;
  margin: 5px 20px;
  line-height: 16px;
`

const Delete = styled(Icon)`
  position: absolute;
  color: red;
  top: 10px;
  right: 10px;
  padding: 5px;
`
export default class Card extends React.Component {
  render() {
    const picture =
      'https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg'

    return (
      <Main>
        <Delete type="delete" theme="filled" onClick={this.props.onDelete} />
        <div>
          <Image
            onClick={this.props.onClick}
            src={this.props.photo || picture}
          />
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </div>
      </Main>
    )
  }
}
