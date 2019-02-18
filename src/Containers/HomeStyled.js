import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px 5%;
  background-color: #f8fafa;
  position: relative;
  max-width: 1180px;
`

export const EmptyComponent = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px 5%;
  background-color: #f8fafa;
  display: flex;

  span {
    font-size: 20px;
    width: 100%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }
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
