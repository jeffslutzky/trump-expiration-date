'use strict';

myApp.directive('progressbar', function() {

  return {
    restrict: 'E',
    scope: {
      percent: "=updatePercent"
    },
    controller: 'HomeController',
    controllerAs: 'vm',
    link: function(scope, element, attrs) {

      var vm = scope.vm;
      // console.log(scope);

      d3.select("body")
      .append("svg")
        .attr("width", "90%")
        .attr("height", 500)
      .append("g")
        .attr("transform", "translate(20,20)")
      .append("rect")
        .attr("width", "50%")
        .attr("height", 50)
        .style("stroke", "black")
        .style("fill", "white")
    }
  }
});
