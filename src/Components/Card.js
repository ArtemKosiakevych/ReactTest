import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import './Card.css'

const Main = styled.h1`
	height: 366px;
	width: 380px;
	border-radius: 4px;
	background-color: #FFFFFF;
  box-shadow: 0 1px 10px 0 rgba(52,68,66,0.08);
  overflow: hidden;
  transition: 200ms;
  &:hover{
    transform: translateY(-6px);
  }
`
const Image = styled.img`
	height: 220px;
	width: 380px;
  object-fit: cover;
`

const Title = styled.h1`
  font-size: 19px;
  font-family: 'Noto Serif', serif;
  margin: 18px 20px;
  line-height: 26px;
`

const DataBlocks = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin: 0px 19px;
`

const DataBlock = styled.div`
  box-sizing: border-box;	
  height: 44px;	
  width: 80px;
  border: ${props => `1px solid ${props.borderColor}`};	
  border-radius: 4px;
  flex-direction: 'row';
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  height: 42px;	
  width: 34px;	
  border-radius: 4px 0 0 4px;	
  background-color: rgb(21, 104, 185, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledIcon = styled(Icon)`
  color: ${props => props.color};	
  font-size: 20px;
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
  font-family: "Noto Sans";	
  font-size: 10px;	
  font-weight: bold;	
  line-height: 17px;	
  align-self: center;
`
const Count = styled.span`
  color: #344442;	
  font-family: "Noto Sans";	
  font-size: 16px;	
  line-height: 17px;	
  text-align: center;
  align-self: center;
`
export default class Card extends React.Component {
  render() {
    const picture = 'https://c1.staticflickr.com/2/1520/24330829813_944c817720_b.jpg'
    const text = 'Use reusable shopping bags instead of paper'
    const dataArray = [
      {
        icon: 'slack',
        label: 'days',
        count: 12,
        color: '#1568B9'
      },
      {
        icon: 'twitter',
        label: 'HOURS',
        count: 12,
        color: '#169080'
      },
      {
        icon: 'skype',
        label: 'min',
        count: 12,
        color: '#87BD24'
      },
      {
        icon: 'github',
        label: 'hours',
        count: 12,
        color: '#858F8E'
      },
    ]
    return (
      <div>
        <Main>
          <Image src={picture} />
          <Title>{text}</Title>
          <DataBlocks>
            {dataArray.map(i => {
              return (
                <DataBlock borderColor={i.color}>
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
      </div>
    )
  }
}