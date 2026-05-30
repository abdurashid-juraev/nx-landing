import { http, HttpResponse, delay } from 'msw';
export const handlers = [
  http.post('http://localhost:3000/api/auth/login', async ({ request }) => {
    await delay(1000);

    const body = (await request.json()) as any;

    if (body.username !== 'admin' || body.password !== 'adm123') {
      return new HttpResponse(JSON.stringify({ message: 'Username or password ' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return HttpResponse.json({
      user: {
        id: 'admin123',
        email: 'ali@org.com',
        fullName: 'Ali Valiyev',
        role: 'admin'
      },
      token: 'mock-jwt-token-12345'
    });
  })
];
