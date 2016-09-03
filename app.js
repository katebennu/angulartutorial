(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Azurite',
    price: 110.50,
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Pentagonal Gem',
    price: 155.00,
    canPurchase: true,
    soldOut: false
  }
  ];
})();
