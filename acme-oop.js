const buy1Get1Free = item => items => Math.floor(items.filter(i => i.code === item.code).length / 2) * item.price
const buy3DropPrice = (item, price) => items => items.filter(i => i.code === item.code).length < 3 ? 0 : items.filter(i => i.code === item.code).length * (item.price - price)
class Basket {
    constructor(rules) {
        this.rules = rules
        this.items = []
    }
    add = item => { this.items.push(item); return this }
    total = () => this.items.reduce((acc, item) => acc + item.price, 0) - this.rules.reduce((acc, rule) => acc + rule(this.items), 0)
}

const [fr1, sr1, cf1] = [{'code': 'FR1', 'name': 'Fruit tea', 'price': 3.11}, {'code': 'SR1', 'name': 'Strawberries', 'price': 5.00}, {'code': 'CF1', 'name': 'Coffee', 'price': 11.23}]
console.log(new Basket([buy1Get1Free(fr1), buy3DropPrice(sr1, 4.50)]).add(fr1).add(sr1).add(fr1).add(cf1).total())
console.log(new Basket([buy1Get1Free(fr1), buy3DropPrice(sr1, 4.50)]).add(fr1).add(fr1).total())
console.log(new Basket([buy1Get1Free(fr1), buy3DropPrice(sr1, 4.50)]).add(sr1).add(sr1).add(fr1).add(sr1).total())