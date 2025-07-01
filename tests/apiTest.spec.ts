import { test, expect } from '@playwright/test';

test('API GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('janet');
    console.log(await response.json());
});

test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'aldi',
            job: 'leader'
        },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
    expect(response.status()).toBe(201)
    const text = await response.text();
    expect(text).toContain('aldi');
    expect(text).toContain('leader');
    console.log(await response.json());
});

test('API PUT request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: 'aldi',
            job: 'Software Engineer'
        },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('aldi');
    expect(text).toContain('Software Engineer');
    console.log(await response.json());
});

test('API DELETE request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });

    expect(response.status()).toBe(204);
});