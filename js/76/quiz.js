(function () {
    'use strict';
    class Item {

        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }

    }

    class Order {

        constructor(name, address, items) {
            this.name = name;
            this.address = address;
            this.items = items;
        }

        get total() {
            let total = 0;
            this.items.forEach(i => {
                total += i.total;
            });
            return total;
        }
    }

    const orderdiv = document.getElementById('orders');

    fetch('quiz.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(o => {
            o.forEach(od => {
                const t = new Order(od.customer, od.address, od.items);
                orderdiv.innerHTML += `
                <li>
                    Customer: ${t.name} <br> 
                    Address: ${t.address} <br>
                    Total: ${t.total} <br> 
                    Items: <br>
                </li>`;
                od.items.forEach(i => {
                    const ii = new Item(i.item, i.total / i.quantity, i.quantity);
                    orderdiv.innerHTML += `
                    <ul>
                         <li>
                            Item: ${ii.name} <br>
                            Price: ${ii.price} <br>
                            Quantity: ${ii.quantity} 
                         </li>
                    </ul>`;
                });
            });
            
        })
        .catch(e => console.error(e));
}());