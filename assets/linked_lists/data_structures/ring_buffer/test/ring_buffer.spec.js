
import RingBuffer from '../ring_buffer';

describe('RingBuffer', () => {
  test('should construct a RingBuffer instance', () => {
    expect(new RingBuffer()).toBeInstanceOf(RingBuffer);
  });

  test('isEmpty should return true if buffer is empty', () => {
    const buffer = new RingBuffer();
    expect(buffer.isEmpty()).toBeTruthy();
  });

  test('isEmpty should return false if buffer is NOT empty', () => {
    const buffer = new RingBuffer();
    buffer.enqueue(5);
    expect(buffer.isEmpty()).toBeFalsy();
  });

  test('isFull should return true if buffer is full', () => {
    const buffer = new RingBuffer(2);
    buffer.enqueue(1);
    buffer.enqueue(2);
    expect(buffer.isFull()).toBeTruthy();
  });

  test('isFull should return false if buffer is NOT full', () => {
    const buffer = new RingBuffer();
    expect(buffer.isFull()).toBeFalsy();
  });

  test('should enqueue a value', () => {
    const buffer = new RingBuffer();
    buffer.enqueue(1);
    expect(buffer.buffer[0]).toEqual(1);
  });

  test('should dequeue a value', () => {
    const buffer = new RingBuffer();
    buffer.enqueue(1);
    expect(buffer.isEmpty()).toBeFalsy();
    buffer.dequeue();
    expect(buffer.isEmpty()).toBeTruthy();
  });

  test('should throw an error on an empty peek() operation', () => {
    const buffer = new RingBuffer();
    expect(() => {
      buffer.peek();
    }).toThrow();
  });
});
