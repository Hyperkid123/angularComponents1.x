phonecatApp.controller('NewItemController', function PhoneItemController($scope) {
  var newCtl = this;
  newCtl.title = '';
  newCtl.snippet = '';

  newCtl.validateInputs = function() {
    return newCtl.title.length > 0 && newCtl.snippet.length > 0;
  }

  newCtl.done = function() {
    if (newCtl.validateInputs()) {
      newCtl.add({
        name: newCtl.title,
        snippet: newCtl.snippet,
      });

      newCtl.title = '';
      newCtl.snippet = '';
    } else {
      console.log('invalid');
    }
  }
});
