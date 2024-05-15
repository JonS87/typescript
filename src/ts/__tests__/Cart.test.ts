import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('push card should not be empty', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));


  expect(cart.items.length).toBe(1);
});

test('calculate sum of all items', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece2', 'Leo Tolstoy', 2000, 1225));


  expect(cart.ttlCost()).toBe(4000);
});

test('calculate sum of all items with sale', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1002, 'War and Piece2', 'Leo Tolstoy', 2000, 1225));


  expect(cart.ttlCostSale(20)).toBe(3200);
});

test('del 1 cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1002, 'War and Piece2', 'Leo Tolstoy', 2000, 1225));
  cart.delCart(1002)

  expect(cart.items.length).toBe(1);
});