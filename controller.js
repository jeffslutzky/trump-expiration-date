(function() {
  'use strict';

  function HomeController($interval) {

    var vm = this;

    var start = new Date("Jan 20 2009 12:00:00").getTime();
    var end = new Date("Jan 20 2017 12:00:00").getTime();
    // for testing
    // var start = Date.now();
    // var end = Date.now()+10000;

    var total = end - start;

    var svg = d3.select(".main")
      .append("svg")
        .attr("width", "90%")
        .attr("height", 200)
      .append("g")
        .attr("transform", "translate(1, 25)")
      .append("rect")
        .attr("class", "outline")
        .attr("width", "99%")
        .attr("height", 50)
        .attr("rx", 3)
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("fill", "orange")

    var startText = d3.select("g")
      .append("text")
        .attr("x", 0)
        .attr("y", -10)
        .text("1/20/17")
        .style("text-anchor", "start")
        .style("font-family", "Lato")
        .style("font-size", "14px")

    var endText = d3.select("g")
      .append("text")
        .attr("x", "99%")
        .attr("y", -10)
        .text("1/20/21")
        .style("text-anchor", "end")
        .style("font-family", "Lato")
        .style("font-size", "14px")

    vm.updatePercent = function() {
        var now = Date.now();
        var date = new Date();
        var current_month = date.getMonth() + 1;
        var current_day = date.getDate();
        var current_year = date.getFullYear().toString().substr(2,2);
        var fullDate = current_month + "/" + current_day + "/" + current_year

        var elapsed = now - start;
        vm.percent = ((1 - elapsed/total) * 100).toFixed(7);

        d3.select(".fill").remove();
        d3.select("g")
          .append("rect")
            .attr("class", "fill")
            .attr("width", 99-(vm.percent*.99)+"%")
            .attr("height", 50)
            .attr("rx", 3)
            .style("stroke", "black")
            .style("stroke-width", 1)
            .style("fill", "white")

    };

    vm.updatePercent();
    $interval(vm.updatePercent, 250);

  }

  myApp.controller('HomeController', ['$interval', HomeController]);

}) ();
