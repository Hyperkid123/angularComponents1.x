phonecatApp.directive('phones', function () {
  return {
    scope: true,
    controller: 'PhoneListController',
    controllerAs: 'vm',
    templateUrl: 'components/phone-list/phone-list.html',
  };
});
