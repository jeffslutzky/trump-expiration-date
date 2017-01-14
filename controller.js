(function() {
  'use strict';

  function HomeController($interval) {

    var vm = this;

    var start = new Date("Jan 20 2009 12:00:00").getTime();
    var end = new Date("Jan 20 2017 12:00:00").getTime();
    // for testing:
    // var start = Date.now();
    // var end = Date.now()+10000;

    var total = end - start;

    var svg = d3.select("body")
      .append("svg")
        .attr("width", "100%")
        .attr("height", 200)
      .append("g")
        .attr("transform", "translate(20,40)")
      .append("rect")
        .attr("class", "outline")
        .attr("width", "95%")
        .attr("height", 50)
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("fill", "white")

      // var startLine = d3.select("g")
      //   .append("line")
      //     .attr("x1", 20)
      //     .attr("y1", 15)
      //     .attr("x2", 20)
      //     .attr("y2", 20)
      //     .style("stroke", "black")
      //     .style("stroke-width", 1)
      //
      // var endLine = d3.select("g")
      //   .append("line")
      //     .attr("x1", "95%")
      //     .attr("y1", -5)
      //     .attr("x2", "95%")
      //     .attr("y2", 0)
      //     .style("stroke", "black")
      //     .style("stroke-width", 1)

      var startText = d3.select("g")
        .append("text")
          .attr("x", "-0.75%")
          .attr("y", -10)
          .text("1/20/17")
          .style("text-anchor", "start")
          .style("font-family", "Lato")
          .style("font-size", "14px")

      var endText = d3.select("g")
        .append("text")
          .attr("x", "96%")
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
        vm.percent = (elapsed/total * 100).toFixed(7);

        d3.select(".fill").remove();
        d3.select("g")
          .append("rect")
            .attr("class", "fill")
            .attr("width", vm.percent*.95+"%")
            .attr("height", 50)
            .style("stroke", "black")
            .style("stroke-width", 1)
            .style("fill", "red")

        // d3.select(".current-date").remove();
        // var nowText = d3.select("g")
        //   .append("text")
        //     // .attr("transform", "rotate(-15, 0, 0)")
        //     .attr("class", "current-date")
        //     .attr("x", (vm.percent*.95)+"%")
        //     .attr("y", 120)
        //     .text(fullDate)
        //     .style("text-anchor", "end")
        //     .style("font-family", "Lato")
        //     .style("font-size", "14px")
        //     .style("writing-mode", "tb")

    };

    $interval(vm.updatePercent, 250);

  }

  myApp.controller('HomeController', ['$interval', HomeController]);

}) ();
