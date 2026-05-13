import assert from 'node:assert';
import { test, describe } from 'node:test';
import { withBase } from './utils.ts';

describe('withBase', () => {
  test('should return the path unchanged if it does not start with a slash', () => {
    assert.strictEqual(withBase('about'), 'about');
    assert.strictEqual(withBase('https://google.com'), 'https://google.com');
  });

  test('should prepend the base URL if the path starts with a slash', () => {
    const env = { BASE_URL: '/NextCore' };
    assert.strictEqual(withBase('/about', env), '/NextCore/about');
  });

  test('should return only the path if BASE_URL is /', () => {
    const env = { BASE_URL: '/' };
    assert.strictEqual(withBase('/about', env), '/about');
  });

  test('should handle empty paths starting with slash', () => {
    const env = { BASE_URL: '/base' };
    assert.strictEqual(withBase('/', env), '/base/');
  });
});
