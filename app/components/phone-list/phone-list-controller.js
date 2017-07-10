phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  var vm = this;
  vm.title = "Some phones list";
  vm.phones = [{
    name: 'Nexus S',
    snippet: 'Fast just got faster with Nexus S.'
  }, {
    name: 'Motorola XOOM™ with Wi-Fi',
    snippet: 'The Next, Next Generation tablet.'
  }, {
    name: 'MOTOROLA XOOM™',
    snippet: 'The Next, Next Generation tablet.'
  }];

  vm.onRemoveItem = function(index) {
    vm.phones.splice(index, 1);
  }

  vm.addItem = function(newPhone) {
    vm.phones.push(newPhone);
  }

});