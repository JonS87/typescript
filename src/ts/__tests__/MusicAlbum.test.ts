import MusicAlbum from '../domain/MusicAlbum';

test('should create MusicAlbum', () => {
  const book = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  expect(book instanceof MusicAlbum).toBeTruthy();
});

test('should check the name in created Movie', () => {
  const book = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  expect(book.name).toBe("Meteora");
});
