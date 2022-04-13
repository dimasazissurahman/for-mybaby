import React, { Key } from 'react'
import { Card, CardGroup, Row } from 'react-bootstrap'
import { IListImages, listImages } from 'shared/constants/images.constant'

export const GalleryComponent = () => {
  console.log(listImages[0].path);
  return (
    <CardGroup>
      {listImages.map((data: IListImages, i: Key) => (
        <Card key={i} className="m-2 mb-4" style={{minWidth:"25rem"}}>
          <Card.Img variant="top" src={data.path} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.story}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data.date}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  )
}
