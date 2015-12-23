angular.module('bars.controller', [])
  .controller('BarsController', BarsController);

BarsController.$inject = ['$scope', 'colorClasses']

function BarsController($scope, colorClasses){
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}
