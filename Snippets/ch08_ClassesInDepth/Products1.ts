class Shirt {
    public color: string;
    public fabricType: string;
    public price: number;
    public cut: string;
    constructor() { }
}

class Shoe {
    public color: string;
    public size: string;
    public price: number;
    constructor() {}
}

class Pants {
    public color: string;
    public inseam: number;
    public waist: number;
    public price: number;
}

const allProducts: any[] = [].concat(new Shirt(), new Shirt(), new Pants(), new Shoe(), new Pants(), new Shirt());

const Recommend = function(minPrice, maxPrice, requestedColor) {

    return allProducts.reduce(function(prev, curr) {
        if ((curr["color"] === requestedColor) ||
            (curr["price"] > minPrice && curr["price"] > minPrice)) {
                return prev.concat(curr);
            }
    }, []);
}

console.log("Recommended for min/max price of 10/20 and color = blue:", Recommend(10, 20, "blue"));
