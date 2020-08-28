import  React from 'react';
import './styles.css';
import {Divider, Item} from "semantic-ui-react";

const ArticlesCard = ({ title, description, author, image }) =>{

  return <>
      <Item.Group>
      <Item>
        <Item.Image size='small' src={image} />
        <Item.Content>
          <Item.Header as='a'>{title}</Item.Header>
          <Item.Description>{description} <a href="#">Show More</a></Item.Description>
          <Item.Extra> <b>Author :</b> {author}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <Divider/>
  </>
}
export default ArticlesCard;
