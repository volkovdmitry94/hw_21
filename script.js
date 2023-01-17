(()=>{
    // Classes
    class Product {
        static counter = 1000;
        #id;
        #title;
        #manufacture;
        #price;

        constructor(title = 'Default title',
                    manufacture = 'Default manufacture',
                    price = 'Default price') {
            this.#id = Product.counter++;
            this.#title = title;
            this.#manufacture = manufacture;
            this.#price = price;
        }
        get idGetter() {
            return this.#id;
        }
        get titleGetter() {
            return this.#title;
        }
        set titleSetter(newTitle) {
            if (newTitle) this.#title = newTitle;
        }
        get manufactureGetter() {
            return this.#manufacture;
        }
        set manufactureSetter(newManufacture) {
            if (newManufacture) this.#manufacture = newManufacture;
        }
        get priceGetter() {
            return this.#price;
        }
        set priceSetter(newPrice) {
            if (newPrice) this.#price = newPrice;
        }
    }

    class Milk extends Product {
        #fat;

        constructor(title, manufacture, price, fat = 'Default fat') {
            super(title, manufacture, price);
            this.#fat = fat;
        }
        get fatGetter() {
            return this.#fat;
        }
        set fatSetter(newFat) {
            if (newFat) this.#fat = newFat;
        }
    }

    class Chocolate extends Product {
        #kind;

        constructor(title, manufacture, price, kind = 'Default kind') {
            super(title, manufacture, price);
            this.#kind = kind;
        }
        get kindGetter() {
            return this.#kind;
        }
        set kindSetter(newKind) {
            if (newKind) this.#kind = newKind;
        }
    }

    class Wine extends Product {
        #alcohol;

        constructor(title, manufacture, price, alcohol = 'Default alcohol') {
            super(title, manufacture, price);
            this.#alcohol = alcohol;
        }
        get alcoholGetter() {
            return this.#alcohol;
        }
        set alcoholSetter(newAlcohol) {
            if (newAlcohol) this.#alcohol = newAlcohol;
        }
    }

    class Store {
        products;

        constructor() {
            this.products = [];
        }

        add(product) {
            if (this.products.find(item => item.idGetter === product.idGetter)) {
                console.log('Add error, id of product is not unique');
            } else {
                this.products.push(product);
            }
        }
        getAll() {
            return this.products;
        }
        getByType(type) {
            switch (type.toLowerCase()) {
                case 'milk':
                    return this.products.filter(item => item instanceof Milk);
                case 'chocolate':
                    return this.products.filter(item => item instanceof Chocolate);
                case 'wine':
                    return this.products.filter(item => item instanceof Wine);
                default:
                    console.log('Input error, please input Milk, Chocolate or Wine');
                    break;
            }
        }

    }

    // Instances for testing
    const product1 = new Product();
    const product2 = new Product('Chips', 'Lays', 8);
    const product3 = new Product('Cheese', 'Tnuva', 20);
    const milk1 = new Milk('Milk 3%', 'Tara', 13, '3%');
    const milk2 = new Milk('Milk 1%', 'Tnuva', 15, '1%');
    const chocolate1 = new Chocolate('Milk chocolate', 'Nestle', 10, 'milk');
    const chocolate2 = new Chocolate('Dark chocolate', 'Toblerone', 18, 'dark');
    const wine1 = new Wine('Chianti', 'Toskana wine', 35, '12%');
    const wine2 = new Wine('Porto', 'Lisbon wine company', 35, '22%');
    const store1 = new Store();

    store1.add(product2);
    store1.add(product3);
    store1.add(milk1);
    store1.add(milk2);
    store1.add(chocolate1);
    store1.add(chocolate2);
    store1.add(wine1);
    store1.add(wine2);

    console.log('Products instances:')
    console.log(product1);
    console.log('Product 1 Old title - ' + product1.titleGetter);
    product1.titleSetter = 'Tea';
    console.log('Product 1 New title - ' + product1.titleGetter);
    console.log(product2);
    console.log('Product 2 Old price - ' +product2.priceGetter);
    product2.priceSetter = 10;
    console.log('Product 2 New price - ' + product2.priceGetter);
    console.log('Store tests - Get All:');
    console.log(store1.getAll());
    console.log('Instances of Chocolate:')
    console.log(store1.getByType('chocolate'));
    console.log('Instances of Milk:')
    console.log(store1.getByType('Milk'));
})();
