import { Button } from 'components/button/button.common';
import { CountdownTimer } from 'components/countdown/countdown';
import { GalleryComponent } from 'components/home/gallery.component';
import React, { Key, useState } from 'react'
import { Card, Col, Modal, Nav, Row, Tab } from 'react-bootstrap';
import { IQuestionList, questionList } from 'shared/constants/form.constant';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState(0);
  const [answer, setAnswer] = useState<string>("");
  const [saveData, setSaveData] = useState<any>([]);

  const handleSubmit = async () => {
    const body = {
      question: questionList[pages].question,
      answer: questionList[pages].answer,
      your_answer: answer,
    }
    setSaveData([...saveData, body]);
    setPages(pages + 1);
    setAnswer("");
    if (pages + 1 === questionList.length) {
      setShowModal(!showModal);
    }
  }

  const tabData = [
    {
      name: "Home",
      content: <>
        <Card className="mt-2">
          <Card.Header><Card.Title>Happy Birthday Untuk Sodari Alifahh Nur Fadhilaaah</Card.Title></Card.Header>
          <Card.Body>
            <Card.Title>Haii there,,</Card.Title>
            <Card.Text>Terima Kasih ya... sudah menjadi orang yang sabar, setia, selalu support apapun itu.💕</Card.Text>
            <Card.Text>Terima Kasih ya... sudah menjadi alasan untuk aku tetap optimis gain mimpi aku bersama kamu.😘</Card.Text>

            <Card.Text> Semoga dengan bertambahnya usia ini, kamu diberikan kesehatan selaluuu dan lancar rezekii mantapz aaammmiinn... 🤲</Card.Text>
            <Card.Text> Semoga apa yang kamu mimpikan/achievements bisa diraih dengan mudah aaammiinn...🤗💕</Card.Text>
            <Card.Text>Btw aku lagi banyak kerjaan... nulisnya seginni dlu aja ya 🤣🤣</Card.Text>
            <Card.Text>Udah 2 hari ga kerjaa buat bikin web ini HAHAHA 🤦🤦 JANGAN DITIRU SODARA2 !!</Card.Text>
            <Card.Text>Anything For You pokoeee 🤗</Card.Text>
          </Card.Body>
        </Card>
      </>
    },
    {
      name: "Gallery",
      content: <>
        <GalleryComponent />
      </>
    },
    {
      name: "Story",
      content: <>
        <h3>Under Maintenance</h3>
      </>
    },
    {
      name: "RSVP",
      content: <>
        <h3>Under Maintenance</h3>
      </>
    }
  ]

  return (
    <>
      <Row className="m-1">
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <div className="custom-tab-1">
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <Nav as='ul' className="nav-tabs">
                    {tabData.map((data: any, i: Key) => (
                      <Nav.Item as="li" key={i} className="c-pointer">
                        <Nav.Link eventKey={data.name.toLowerCase()}>
                          {data.name}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content className="pt-4">
                    {tabData.map((data: any, i: Key) => (
                      <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                        {data.content}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
        centered
        show={pages < questionList.length ? true : false}
      >
        <>
          <Modal.Header>Jawab Pertanyaan</Modal.Header>
          <Modal.Body>
            {pages < questionList.length &&
              <>
                <p>{questionList[pages].question}</p>
                <input type="text" className="form-control input-rounded" value={answer} onChange={(e: any) => setAnswer(e.target.value)} />
              </>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handleSubmit()} disabled={answer.length < 1}>Lanjut</Button>
          </Modal.Footer>
        </>
      </Modal>

      <Modal
        centered
        show={showModal}
        onHide={() => setShowModal(!showModal)}
      >
        <Card className="mt-2">
          <Card.Header>Hasil Jawaban</Card.Header>
          <Card.Body>
            {saveData.map((data: any, i: Key) => (
              <>
                <div>{data.question}</div>
                <div style={{ color: "green" }}>Jawaban Benar : {data.answer}</div>
                <div>Jawaban Kamu : {data.your_answer}</div>
                <br />
              </>
            ))}
          </Card.Body>
        </Card>
      </Modal>
    </>

  )
}

export default HomePage;