import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from '../../redux/dataServices';
import UserCard from '../../components/UserCard/UserCard';
import './style.css';
import {useEffect} from "react";
import {Container, Divider, Header} from "semantic-ui-react";

const UsersList = () =>{

  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch])

  // Redux State
  const userData = useSelector((state) => state.data);


   const users = userData && userData.users && userData.users.map(user => (
       <UserCard
         key={user.name}
         name={user.name}
         age={user.age}
         birthdate={user.birthdate}
         profilePicture={user.profilePicture}
       />
     ))

   return (<CSSTransitionGroup
       transitionName="user"
       transitionAppear={true}
       transitionAppearTimeout={500}
       transitionEnter={false}
       transitionLeave={false}>
       <Container>
         <Header as='h2'>Friends List</Header>
           <Header.Subheader>
            Friends Forever
           </Header.Subheader>
           <Divider />
           <div className='profile-details'>
             <CSSTransitionGroup
               transitionName="userlist"
               transitionAppear={true}
               transitionAppearTimeout={10000}
               transitionEnter={false}
               transitionLeave={false}>
                {users}
             </CSSTransitionGroup>
           </div>
       </Container>
     </CSSTransitionGroup>
   )
 }

export default UsersList;
