import React, { Component } from 'react'
import { Row, Col, Modal, Spin, Skeleton } from 'antd'

import Header from '../Components/Header'
import Card from '../Components/Card'
import {
  Container,
  Content,
  EmptyComponent,
  CardModalTitle,
  CardModalDescription,
} from './HomeStyled'
import { getNotes, updateNote } from '../api'

export default class HomeScreen extends Component {
  state = {
    visible: false,
    query: '',
    ready: false,
    data: [],
    selectedCardTitle: '',
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const res = await getNotes()
    if (res.data) this.setState({ data: res.data, ready: true })
  }

  handleCardClick = index => {
    this.setState({
      visible: true,
      selectedCard: index,
    })
  }

  handleOk = async () => {
    this.setState({ visible: false })
    const {
      selectedCardTitle,
      selectedCardDescription,
      selectedCard,
      data,
    } = this.state
    const id = data[selectedCard] && data[selectedCard]._id
    await updateNote(id, {
      title: selectedCardTitle,
      description: selectedCardDescription,
    })
    this.fetchData()
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  handleSearch = query => {
    this.setState({ query })
  }

  handleChangeTitle = event => {
    this.setState({ selectedCardTitle: event.target.textContent })
  }

  handleChangeDescription = event => {
    this.setState({ selectedCardDescription: event.target.textContent })
  }

  handleProfile = () => {}
  render() {
    const { data, query, selectedCard } = this.state
    const notes = data.filter(i =>
      i.title.toLowerCase().includes(query.toLowerCase()),
    )
    const selectedCardTitle = data[selectedCard] && data[selectedCard].title
    const selectedCardDescription =
      data[selectedCard] && data[selectedCard].description
    return (
      <Container>
        <Header
          handleProfile={this.handleProfile}
          handleSearch={this.handleSearch}
        />
        <Content>
          {notes.length > 0 ? (
            <Row gutter={10}>
              {notes.map((i, index) => (
                <Col key={index} xl={8} lg={12} md={12} xs={24}>
                  {this.state.ready ? (
                    <Card
                      title={i.title}
                      description={i.description}
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
            title={selectedCardTitle}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
            <CardModalTitle onInput={this.handleChangeTitle} contentEditable>
              {selectedCardTitle}
            </CardModalTitle>
            <CardModalDescription
              onInput={this.handleChangeDescription}
              contentEditable>
              {selectedCardDescription}
            </CardModalDescription>
          </Modal>
        </Content>
      </Container>
    )
  }
}
