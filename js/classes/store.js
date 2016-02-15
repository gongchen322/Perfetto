function store() {
    this.products = [
        new product(1,'Double wool cashmere coat','Charles Black', 1150, 'assets/pictures/clothing/men/1s.jpg', 'assets/pictures/clothing/men/1.jpg'),
        new product(2,'Belted trenchcoat','Charles Black', 1250, 'assets/pictures/clothing/men/2s.jpg', 'assets/pictures/clothing/men/2.jpg'),
        new product(3,'Charles Charcoal Gray','Charles Black', 1150, 'assets/pictures/clothing/men/3s.jpg', 'assets/pictures/clothing/men/3.jpg'),
        new product(4,'Shiny bomber jacket','Charles Black', 340, 'assets/pictures/clothing/men/4s.jpg', 'assets/pictures/clothing/men/4.jpg'),
        new product(5,'Apolo double charcoal grey','Charles Black', 750, 'assets/pictures/clothing/men/5s.jpg', 'assets/pictures/clothing/men/5.jpg')
        
    ];
   
}
store.prototype.getProduct = function (id) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id)
            return this.products[i];
    }
    return null;
}