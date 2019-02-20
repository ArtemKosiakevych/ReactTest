import React, { Component } from 'react'
import { Row, Col, Modal, Icon, Skeleton, Upload } from 'antd'

import Header from '../Components/Header'
import Card from '../Components/Card'
import {
  Container,
  Content,
  CardModalTitle,
  CardModalDescription,
  Button,
  EmptyCard,
} from './HomeStyled'
import { getNotes, updateNote, deleteNote, addNote } from '../api'
export default class HomeScreen extends Component {
  note = { title: 'Note', description: 'Description' }
  state = {
    visible: false,
    query: '',
    ready: false,
    data: [],
    selectedCardTitle: '',
    creating: false,
    createNoteVisible: false,
    previewVisible: false,
    previewImage: '',
    fileList: [],
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

  handleCardDelete = async index => {
    const { data } = this.state
    if (data && data[index]._id) {
      await deleteNote(data[index]._id)
      this.fetchData()
    }
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

  handleChangeNoteTitle = event => {
    this.note.title = event.target.textContent
  }

  handleChangeNoteDescription = event => {
    this.note.description = event.target.textContent
  }

  handleProfile = () => {}

  handleCreateNote = () => {
    this.note = { title: 'Note', description: 'Description' }
    this.setState({ createNoteVisible: true, fileList: [] })
  }

  closeCreateNote = () => {
    this.setState({ createNoteVisible: false })
  }

  createNote = async () => {
    const fileList = this.state.fileList
    const photo = (fileList.length > 0 && fileList[0].thumbUrl) || null
    const { title, description } = this.note
    this.setState({ creating: true })
    await addNote({ title, description, photo })
    await this.fetchData()
    this.setState({ creating: false, createNoteVisible: false })
  }

  handleCancelPreview = () => this.setState({ previewVisible: false })

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handlePickPhoto = ({ fileList }) => {
    this.setState({ fileList })
  }

  renderCreateNote() {
    return (
      <EmptyCard>
        <Button onClick={this.handleCreateNote} icon="plus" />
      </EmptyCard>
    )
  }

  render() {
    const {
      data,
      query,
      selectedCard,
      creating,
      createNoteVisible,
      previewVisible,
      previewImage,
      fileList,
    } = this.state
    const notes = data.filter(i =>
      i.title.toLowerCase().includes(query.toLowerCase()),
    )
    const selectedCardTitle = data[selectedCard] && data[selectedCard].title
    const selectedCardDescription =
      data[selectedCard] && data[selectedCard].description

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    return (
      <Container>
        <Header
          handleProfile={this.handleProfile}
          handleSearch={this.handleSearch}
        />
        <Content>
          <Row gutter={10}>
            <Col xl={8} lg={12} md={12} xs={24}>
              {this.renderCreateNote()}
            </Col>
            {notes.map((i, index) => (
              <Col key={index} xl={8} lg={12} md={12} xs={24}>
                {this.state.ready ? (
                  <Card
                    title={i.title}
                    description={i.description}
                    photo={i.photo}
                    onClick={() => this.handleCardClick(index)}
                    onDelete={() => this.handleCardDelete(index)}
                  />
                ) : (
                  <Skeleton active paragraph={{ rows: 3 }} />
                )}
              </Col>
            ))}
          </Row>
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

          <Modal
            title="Create Note"
            visible={createNoteVisible}
            onOk={this.createNote}
            confirmLoading={creating}
            onCancel={this.closeCreateNote}
            okText={'Create'}>
            <CardModalTitle
              onInput={this.handleChangeNoteTitle}
              contentEditable>
              {this.note.title}
            </CardModalTitle>
            <CardModalDescription
              onInput={this.handleChangeNoteDescription}
              contentEditable>
              {this.note.description}
            </CardModalDescription>
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handlePickPhoto}>
              {fileList.length >= 2 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancelPreview}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Modal>
        </Content>
      </Container>
    )
  }
}
