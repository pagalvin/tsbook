interface IRecommendable {
    color: string;
    price: number;
}

class Scarf implements IRecommendable{
    public color: string;
    public fabricType: string;
    public price: number;
    public length: string;
    constructor() { }
}

// Product Displays can't be recommended.
class ProductDisplay {
    public name: string;
    public location: string;
    constructor() {}
}

class Sneaker implements IRecommendable {
    public color: string;
    public inseam: number;
    public waist: number;
    public price: number;
}

const allRecommendableProducts: IRecommendable[] = [].concat(new Sneaker(), new Sneaker(), new Scarf(), new Sneaker(), new Sneaker(), new Scarf());

const GetRecommended = function(minPrice, maxPrice, requestedColor) {

    return <IRecommendable> allProducts.reduce(function(prev: IRecommendable[], curr: IRecommendable) {
        if ((curr.color === requestedColor) ||
            (curr.price > minPrice && curr.price > minPrice)) {
                return prev.concat(curr);
            }
    }, []);
}

const RecommendedItems = GetRecommended(10, 20, "blue");

console.log("Recommended for min/max price of 10/20 and color = blue:", Recommend(10, 20, "blue"));
