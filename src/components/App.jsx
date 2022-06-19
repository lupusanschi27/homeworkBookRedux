import React from 'react';

import List from './List.jsx';
import Form from './Form.jsx';
import FormAuthor from './FormAuthor.jsx';
import { useState } from 'react';

const App = () => {
  //Inner state
  const [authorToggle, setAuthorToggle] = useState(false);
  const [modifyId, setModifyId] = useState('');
  const [modifyTitle, setModifyTitle] = useState('');
  
  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-md-4 offset-md-1 border align-self-start p-0 mb-5">
          <h2 className="p-2">Articles</h2>
         
          <List
            authorToggle={authorToggle}
            setAuthorToggle={setAuthorToggle}
            modifyId={modifyId}
            setModifyId={setModifyId}
            setModifyTitle={setModifyTitle}
          />
        </div>

        <div className="col-md-4 offset-md-1 align-self-start">
          <div className="row p-2 border">
            <div className="col-md-12 p-0">
              <h4>Add a new article</h4>
              <Form />
            </div>
          </div>

          {authorToggle && (
            <div className="row mt-5 p-2 border">
              <div className="col-md-12 p-0">
                <h4>Modify author name</h4>
                <p>
                  Currently modifying author for: <b>{modifyTitle}</b> (Article Title)
                </p>
                <FormAuthor
                  modifyId={modifyId}
                  modifyTitle={modifyTitle}
                  setAuthorToggle={setAuthorToggle}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
