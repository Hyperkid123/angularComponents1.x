phonecatApp.directive('newItem', function () {
  return {
    scope: true,
    controller: 'NewItemController',
    controllerAs: 'newCtl',
    templateUrl: 'components/new-item/new-item.html',
    bindToController: {
      add: '='
    }
  };
});
