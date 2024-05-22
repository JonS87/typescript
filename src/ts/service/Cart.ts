import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    ttlCost(): number {
        return this._items.reduce(function(currentSum, currentItem) {
            return currentSum + currentItem.price;
        }, 0)
    }

    ttlCostSale(sale: number): number {
        let sum = this.ttlCost();
        return sum * (1 - sale / 100);
    }

    delCart(id: number): void {
        this._items = this._items.filter(item => item.id != id);
    }
}