import { http, HttpResponse } from 'msw';
export const handlers = [
  http.post('/api/login', () => {
    return HttpResponse.json({
      username: 'ali',
      password: 'ali123'
    });
  })
];
