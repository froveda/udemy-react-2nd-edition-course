import authReducer from '../../reducers/auth';

// INIT
test('should setup default auth values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

// LOGIN
test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'a-uid'
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(action.uid);
});

// LOGIN
test('should clear uid for logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'a-uid' }, action);
  expect(state).toEqual({});
});
