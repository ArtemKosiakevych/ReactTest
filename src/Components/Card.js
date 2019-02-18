import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Icon } from 'antd'

import { fadeIn } from 'react-animations'
const fadeAnimation = keyframes`${fadeIn}`

const Main = styled.h1`
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

const DataBlocks = styled.div`
  flex-direction: row;
  display: flex;
  margin: 0px 19px 15px;
`

const DataBlock = styled.div`
  box-sizing: border-box;
  height: 34px;
  width: 63px;
  margin-right: 6px;
  border: ${props => `1px solid ${props.borderColor}`};
  border-radius: 4px;
  flex-direction: 'row';
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  height: 100%;
  width: 26px;
  border-radius: 4px 0 0 4px;
  background-color: rgb(21, 104, 185, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledIcon = styled(Icon)`
  color: ${props => props.color};
  font-size: 20px;
  padding: 3px 3px;
`

const HoursWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: 'center';
  align-items: 'center';
`

const Label = styled.span`
  color: ${props => props.color};
  font-family: 'Noto Sans';
  font-size: 10px;
  font-weight: bold;
  line-height: 17px;
  align-self: center;
`
const Count = styled.span`
  color: #344442;
  font-family: 'Noto Sans';
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  align-self: center;
`
export default class Card extends React.Component {
  render() {
    const picture =
      'https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg'
    const dataArray = [
      {
        icon: 'slack',
        label: 'days',
        count: 12,
        color: '#1568B9',
      },
      {
        icon: 'twitter',
        label: 'HRS',
        count: 12,
        color: '#169080',
      },
      {
        icon: 'skype',
        label: 'min',
        count: 12,
        color: '#87BD24',
      },
      {
        icon: 'github',
        label: 'hrs',
        count: 12,
        color: '#858F8E',
      },
    ]
    return (
      <Main onClick={this.props.onClick}>
        <div>
          <Image src={picture} />
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </div>
        <DataBlocks>
          {dataArray.map((i, index) => {
            return (
              <DataBlock key={index} borderColor={i.color}>
                <IconWrapper>
                  <StyledIcon color={i.color} type={i.icon} />
                </IconWrapper>
                <HoursWrapper>
                  <Label color={i.color}>{i.label.toUpperCase()}</Label>
                  <Count>{i.count.toString().toUpperCase()}</Count>
                </HoursWrapper>
              </DataBlock>
            )
          })}
        </DataBlocks>
      </Main>
    )
  }
}
