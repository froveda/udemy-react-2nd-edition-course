import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

// SET_TEXT_FILTER
test('should generate set text filter action object', () => {
  const text = 'text'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

// SORT_BY_DATE
test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

// SORT_BY_AMOUNT
test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

// SET_START_DATE
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// SET_END_DATE
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});