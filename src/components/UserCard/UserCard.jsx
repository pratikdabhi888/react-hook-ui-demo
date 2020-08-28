import  React from 'react';
import './styles.css';
import {Button, Card, Header, Image, Modal} from "semantic-ui-react";

const UserCard = ({ name, age, birthdate, profilePicture }) =>{
  const [open, setOpen] = React.useState(false)

  return<>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="mini"
      centered
      className="person-info"
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={profilePicture} wrapped />
        <Modal.Description>
          <Header>{name}</Header>
          <p>
           Age: {age}
          </p>
          <p> Birth Date: {birthdate}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button  onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>

    <Card.Group>
      <Card onClick={() => setOpen(true)}>
          <Image src={profilePicture} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
        </Card>
    </Card.Group>
    </>
}
export default UserCard;
