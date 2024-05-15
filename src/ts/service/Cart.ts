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
        let sum = 0
        for (let i:number = 0; i < this._items.length; i++) {
            sum += this._items[i].price;
        }
        return sum;
    }

    ttlCostSale(sale: number): number {
        let sum = 0
        for (let i:number = 0; i < this._items.length; i++) {
            sum += this._items[i].price;
        }
        return sum * (1 - sale / 100);
    }

    delCart(id: number): void {
        this._items = this._items.filter(item => item.id != id);
    }
}