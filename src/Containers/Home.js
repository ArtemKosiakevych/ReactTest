import React, { Component } from 'react'
import { Row, Col, Modal, Spin, Skeleton } from 'antd'

import Header from '../Components/Header'
import Card from '../Components/Card'
import { Container, Content, EmptyComponent } from './HomeStyled'

export default class HomeScreen extends Component {
  state = {
    visible: false,
    query: '',
    ready: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true })
    }, 1500)
  }

  handleCardClick = index => {
    this.setState({
      visible: true,
      selectedCard: index,
    })
  }

  handleOk = () => {
    this.setState({
      visible: false,
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  handleSearch = query => {
    this.setState({ query })
  }

  handleProfile = () => {}
  render() {
    const cardTitles = [
      'Use reusable shopping bags instead of paper',
      'Use reusable shopping bags instead',
      'Subway/tram to work instead of drive',
      'Carpool with someone',
      'Use reusable shopping bags instead of plastic',
      'Plant a tree in the southern US',
      'abd',
      'asdwqq111',
      '12',
    ]
    const data = cardTitles.filter(i =>
      i.toLowerCase().includes(this.state.query.toLowerCase()),
    )
    return (
      <Container>
        <Header
          handleProfile={this.handleProfile}
          handleSearch={this.handleSearch}
        />
        <Content>
          {data.length > 0 ? (
            <Row gutter={10}>
              {data.map((i, index) => (
                <Col key={index} xl={8} lg={12} md={12} xs={24}>
                  {this.state.ready ? (
                    <Card
                      title={i}
                      onClick={() => this.handleCardClick(index)}
                    />
                  ) : (
                    <Skeleton active paragraph={{ rows: 3 }} />
                  )}
                </Col>
              ))}
            </Row>
          ) : (
            <EmptyComponent>
              <Spin />
            </EmptyComponent>
          )}
          <Modal
            title="Card is selected"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
            <p>Position: {this.state.selectedCard}</p>
          </Modal>
        </Content>
      </Container>
    )
  }
}
