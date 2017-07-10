phonecatApp.directive('phoneItem', function() {
  return {
    scope: true,
    controller: 'PhoneItemController',
    controllerAs: 'itemCtl',
    templateUrl: 'components/phone-item/phone-item.html',
    bindToController: {
      title: '=',
      description: '=',
      delete: '&',
    }
  };
});
