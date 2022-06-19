import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { DELETE_ARTICLE } from '../constants/action-types';

const useStyles = createUseStyles({
  custom_modal: {
    backgroundColor: '#ffffff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '1rem',
    zIndex: 5,
    width: '400px',
  },
  custom_modal_overlay: {
    position: 'fixed',
    zIndex: 4,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#00000050',
  },
  custom_modal_message: {
    fontSize: '1.4em',
  },
  custom_modal_actions: {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'row',
    alignItems: 'center',
    borderTop: '1px solid #00000030',
    paddingTop: '1rem',
  },
});

function Modal({ setModalToggle, articleId, setAuthorToggle, title }) {
  //Redux function
  const dispatch = useDispatch();
 
  //JSS function
  const classes = useStyles();

  //Handling actions for 'Proceed' button 
  const handleProceed = () => {
    dispatch({ type: DELETE_ARTICLE, payload: { id: articleId } });
    setModalToggle(false);
    setAuthorToggle(false);
  };
  
  return (
    <>
      <div className={classes.custom_modal_overlay} onClick={() => setModalToggle(false)}></div>
      <div className={classes.custom_modal}>
        <p className={classes.custom_modal_message}>
          Do you want to delete <b>{title}</b> article?
        </p>
        <div className={classes.custom_modal_actions}>
          <button className="btn btn-lg" onClick={() => setModalToggle(false)}>
            Cancel
          </button>
          <button className="btn btn-danger btn-lg ml-3" onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
