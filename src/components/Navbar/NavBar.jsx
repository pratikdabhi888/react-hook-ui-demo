import React, {useState} from 'react';
import './style.css';
import {Menu, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const NavBar = () => {

  const [activeItem, setActiveItem]= useState('home');

  return<Segment inverted className="navbar-menu">
        <Menu inverted secondary>
          <Link to="/">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={() => setActiveItem('home')}>
            </Menu.Item>
          </Link>
          <Link to="/friends">
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={() => setActiveItem('friends')}>
            </Menu.Item>
          </Link>
        </Menu>
      </Segment>
}
export default NavBar;
