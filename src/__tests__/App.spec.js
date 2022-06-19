import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent, render } from '@testing-library/react';

import App from '../components/App';

describe('My Test Suite', () => {
  const initialState = { articles: [] };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders App component', () => {
    store = mockStore(initialState);

    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        title: 'delectus aut autem',
      })
    );

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('user can type a new article title', () => {
    store = mockStore(initialState);

    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        title: 'delectus aut autem',
      })
    );

    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const textbox = getByRole('textbox', { name: 'Title' });

    fireEvent.change(textbox, { target: { value: '23' } });

    expect(textbox.value).toBe('23');
  });
});
