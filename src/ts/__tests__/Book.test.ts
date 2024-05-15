import Book from '../domain/Book';

test('should create book', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);

  expect(book instanceof Book).toBeTruthy();
});

test('should check the name in created book', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);

  expect(book.name).toBe("War and Piece");
});
