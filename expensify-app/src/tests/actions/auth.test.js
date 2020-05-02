import moment from 'moment';
import { login, logout } from '../../actions/auth';

// LOGIN
test('should generate login action object', () => {
  const uid = 'a-uid';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

// LOGIN
test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
