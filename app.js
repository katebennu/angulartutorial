(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Azurite',
    price: 110.50,
    canPurchase: false,
    soldOut: false
  },
  {
    name: 'Pentagonal Gem',
    price: 155,
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Another Gem',
    price: 125,
    canPurchase: true,
    soldOut: false
  }
  ];
})();
