function store() {
    this.menproducts = [
        new product(1,'Double wool cashmere coat','Charles Black', 1150, 'assets/pictures/clothing/men/1s.jpg', ['assets/pictures/clothing/men/1.jpg','assets/pictures/clothing/men/1ss.jpg']),
        new product(2,'Belted trenchcoat','Minuto Balsam Green', 1250, 'assets/pictures/clothing/men/2s.jpg', ['assets/pictures/clothing/men/2.jpg','assets/pictures/clothing/men/2ss.jpg']),
        new product(3,'Charles Charcoal Gray','Charles Charcoal Gray', 1150, 'assets/pictures/clothing/men/3s.jpg', ['assets/pictures/clothing/men/3.jpg','assets/pictures/clothing/men/3ss.jpg']),
        new product(4,'Shiny bomber jacket','Who Black Black', 340, 'assets/pictures/clothing/men/4s.jpg', ['assets/pictures/clothing/men/4.jpg','assets/pictures/clothing/men/4ss.jpg']),
        new product(5,'Apolo double charcoal grey','Apolo double charcoal grey', 750, 'assets/pictures/clothing/men/5s.jpg', ['assets/pictures/clothing/men/5.jpg','assets/pictures/clothing/men/5ss.jpg'])
        
    ];
    this.womenproducts = [
        new product(1,'Sleeveless Coat','Vento Beige Melange', 1250, 'assets/pictures/clothing/women/1s.jpg', ['assets/pictures/clothing/women/1.jpg','assets/pictures/clothing/women/1ss.jpg']),
        new product(2,'Slim Fit Denim Jacket','Top It Vintage Light Vintage', 340, 'assets/pictures/clothing/women/2s.jpg', ['assets/pictures/clothing/women/2.jpg','assets/pictures/clothing/women/2ss.jpg']),
        new product(3,'Cashmere Blend Coat','Elsa Double Grey Melange', 1150, 'assets/pictures/clothing/women/3s.jpg', ['assets/pictures/clothing/women/3.jpg','assets/pictures/clothing/women/3ss.jpg']),
        new product(4,'Striped Trenchcoat','Verna Linen St Wide Black', 1250, 'assets/pictures/clothing/women/4s.jpg', ['assets/pictures/clothing/women/4.jpg','assets/pictures/clothing/women/4ss.jpg']),
        new product(5,'Fringed Poncho','Apolo Fringe Black', 380, 'assets/pictures/clothing/women/5s.jpg', ['assets/pictures/clothing/women/5.jpg','assets/pictures/clothing/women/5ss.jpg'])
        
    ];

    this.collections = [
        [{src:'assets/pictures/collections/1/1.jpg', id:1},{src:'assets/pictures/collections/1/2.jpg', id:2},{src:'assets/pictures/collections/1/3.jpg', id:3}],
        [{src:'assets/pictures/collections/2/1.jpg', id:1},{src:'assets/pictures/collections/2/2.jpg', id:2},{src:'assets/pictures/collections/2/3.jpg', id:3}],
        [{src:'assets/pictures/collections/3/1.jpg', id:1},{src:'assets/pictures/collections/3/2.jpg', id:2},{src:'assets/pictures/collections/3/3.jpg', id:3}],
        [{src:'assets/pictures/collections/4/1.jpg', id:1},{src:'assets/pictures/collections/4/2.jpg', id:2},{src:'assets/pictures/collections/4/3.jpg', id:3}],
        [{src:'assets/pictures/collections/5/1.jpg', id:1},{src:'assets/pictures/collections/5/2.jpg', id:2},{src:'assets/pictures/collections/5/3.jpg', id:3}],
        [{src:'assets/pictures/collections/6/1.jpg', id:1},{src:'assets/pictures/collections/6/2.jpg', id:2},{src:'assets/pictures/collections/6/3.jpg', id:3}],
    ];
   
}
store.prototype.getMenProduct = function (id) {
    for (var i = 0; i < this.menproducts.length; i++) {
        if (this.menproducts[i].id == id)
            return this.menproducts[i];
    }
    return null;
}

store.prototype.getWomenProduct = function (id) {
    for (var i = 0; i < this.womenproducts.length; i++) {
        if (this.womenproducts[i].id == id)
            return this.womenproducts[i];
    }
    return null;
}