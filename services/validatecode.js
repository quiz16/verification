import fetch from './index';

export const validate = (data) => fetch('http://localhost:3000/api/validate', {
  method: 'POST',
  body: JSON.stringify({
    data,
  }),
});
