import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../thunk';
import { createUseStyles } from 'react-jss';
import { AiFillDelete } from 'react-icons/ai';
import Modal from './Modal.jsx';

const useStyles = createUseStyles({
  article_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .article_item_actions': {
      opacity: '0',
      transition: '.1s',
    },
    '&:hover .article_item_actions': {
      opacity: '1',
      transition: '.1s',
    },
  },
});

const List = ({ authorToggle, setAuthorToggle, setModifyId, setModifyTitle }) => {
  //Inner State
  const [pressedItemId, setPressedItemId] = useState('');
  const [title, setTitle] = useState('');
  const [modalToggle, setModalToggle] = useState(false);
  // const [isArticleListEmpty, setArticleList] = useState(false);

  //Redux function
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  //JSS function
  const classes = useStyles();

  //useEffect for async data fetching over an REST
  useEffect(() => {
    dispatch(fetchArticles);
  }, []);

  //useEffect for watching 'state.articles'
  // useEffect(() => {
  //   articles.length === 0 ? setArticleList(true) : setArticleList(false)    
  // },[articles])

  const idAndTitleHandler = (article) => {
    setPressedItemId(article.id);
    setTitle(article.title);
  };

  const authorModifyHandler = (article) => {
    setModifyId(article.id);
    setModifyTitle(article.title);

    if (pressedItemId === article.id) {
      setAuthorToggle(!authorToggle);
    } else {
      setAuthorToggle(true);
    }
  };
  
  //Conditional rendering based on the articles selector length
  if(articles.length === 0){
    return (
      <p className='px-2 pt-2 pb-0 border-top'><i>You haven't added any articles yet.</i></p>
    )
  }
  return (
    <>
      <ul className={`list-group list-group-flush ${classes.article_list}`}>
        {articles.map((article) => (
          <li
            className={`${classes.article_item} list-group-item px-0 p-2 list-group-item-action`}
            key={article.id}
            onClick={() => idAndTitleHandler(article)}
          >
            <div className="article_item_data">
              <p className="mb-0">
                Article Title: <b>{article.title}</b>
              </p>
              <p className="mb-0">
                Article Author: {!article.author ? <i>Unknown</i> : <b>{article.author}</b>}
              </p>
              
            </div>
            
            <div className={`article_item_actions`}>
              <button className="btn btn-sm" onClick={() => authorModifyHandler(article)}>
              modify author
              </button>
              <button className="btn btn-danger btn-sm ml-2" onClick={() => setModalToggle(true)}>
              <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {modalToggle && (
        <Modal
          setModalToggle={setModalToggle}
          title={title}
          articleId={pressedItemId}
          setAuthorToggle={setAuthorToggle}
        />
      )}
    </>
  )

};

export default List;
