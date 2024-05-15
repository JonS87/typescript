import Movie from '../domain/Movie';

test('should create Movie', () => {
  const book = new Movie(1005, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', '137 мин. / 02:17');

  expect(book instanceof Movie).toBeTruthy();
});

test('should check the name in created Movie', () => {
  const book = new Movie(1005, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', '137 мин. / 02:17');

  expect(book.name).toBe("Мстители");
});
