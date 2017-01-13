(function() {
  'use strict';

  function HomeController($interval) {

    var vm = this;

    // var start = new Date("Jan 20 2009 12:00:00").getTime();
    // var end = new Date("Jan 20 2017 12:00:00").getTime();
    // for testing:
    var start = Date.now();
    var end = Date.now()+1000000;
    
    var total = end - start;

    var svg = d3.select("body")
      .append("svg")
        .attr("width", "90%")
        .attr("height", 500)
      .append("g")
        .attr("transform", "translate(20,20)")

    vm.updatePercent = function() {
        var now = Date.now();
        var elapsed = now - start;
        vm.percent = (elapsed/total * 100).toFixed(7);

        d3.select("rect").remove();
        d3.select("svg")
          .append("rect")
            .attr("width", vm.percent+"%")
            .attr("height", 50)
            .style("stroke", "black")
            .style("fill", "white")
    };

    $interval(vm.updatePercent, 1000);

  }

  myApp.controller('HomeController', ['$interval', HomeController]);

}) ();
