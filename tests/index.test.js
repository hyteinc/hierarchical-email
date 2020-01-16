const hs = require('../index');

test('.com domain', () => {
  expect(hs.fromEmail('abc@example.com')).toBe('com.example@abc');
});

test('.org domain', () => {
  expect(hs.fromEmail('abc@example.org')).toBe('org.example@abc');
});

test('+ mailbox', () => {
  expect(hs.fromEmail('ab+c@example.com')).toBe('com.example@ab+c');
});


test('. mailbox', () => {
  expect(hs.fromEmail('ab.c@example.com')).toBe('com.example@ab.c');
});

test('only mailbox', () => {
  expect(hs.fromEmail('abc')).toBe('abc');
});

test('localhost', () => {
  expect(hs.fromEmail('abc@localhost')).toBe('localhost@abc');
});
