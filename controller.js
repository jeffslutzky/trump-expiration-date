(function() {
  'use strict';

  function HomeController($interval) {

    var vm = this;

    var start = new Date("Jan 20 2009 12:00:00").getTime();
    var end = new Date("Jan 20 2017 12:00:00").getTime();
    var total = end - start;

    function updatePercent() {
        var now = Date.now();
        var elapsed = now - start;
        vm.percent = (elapsed/total * 100).toFixed(7) + "%";
    };

    $interval(updatePercent, 1000);

  }

  angular.module('myApp')
    .controller('HomeController', ['$interval', HomeController]);

}) ();
