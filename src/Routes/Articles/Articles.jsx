import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import {useDispatch, useSelector} from 'react-redux'
import {fetchArticles} from '../../redux/dataServices';
import './style.css';
import {useEffect} from "react";
import {Container, Divider, Header} from "semantic-ui-react";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";

const Articles = () =>{

  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  },[dispatch])

  // Redux State
  const articlesData = useSelector((state) => state.data);

  const articles = articlesData && articlesData.articles && articlesData.articles.map(articles => (
    <ArticlesCard
      key={articles.name}
      title={articles.title}
      description={articles.description}
      image={articles.image}
      author={articles.author}
    />
  ))

   return  (
     <CSSTransitionGroup
       transitionName="user"
       transitionAppear={true}
       transitionAppearTimeout={500}
       transitionEnter={false}
       transitionLeave={false}>
        <Container>
           <Header as='h1'>Articles</Header>
           <Header.Subheader>
             Articles
           </Header.Subheader>
           <Divider />
           <div className='profile-details-wrap'>
             <CSSTransitionGroup
               transitionName="userlist"
               transitionAppear={true}
               transitionAppearTimeout={10000}
               transitionEnter={false}
               transitionLeave={false}>
             </CSSTransitionGroup>
             {articles}
           </div>
          </Container>
     </CSSTransitionGroup>
   )
 }

export default Articles;
