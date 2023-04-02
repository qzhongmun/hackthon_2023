import React, { Component, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5map from "@amcharts/amcharts5/map";
import ".././App.css";
import locationdata from "./locationdata.json";

export default function Lineplot(props) {
  var count = useLayoutEffect(() => {
    var root = am5.Root.new("chartdiv");
    root._logo.dispose();

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        //focusable: true,
        panX: true,
        panY: true,
        wheelX: "panY",
        wheelY: "zoomY",
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
      })
    );
    cursor.lineY.set("visible", false);

    // Generate random data
    var value = 100;
    var i = 0;

    function generateData() {
      var value1 = Math.round(Math.random() * 10 - 5 + value);
      var value2 = i;
      var value3 = Math.round(Math.random() * 10 - 5 + value);
      var value4 = Math.round(Math.random() * 10 - 5 + value);
      i = i + 1;
      return {
        value2: value2,
        value1: value1,
        value3: value3,
        value4: value4,
      };
    }

    function generateDatas(count) {
      var data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        strictMinMax: true,
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    xAxis.children.push(
      am5.Label.new(root, {
        text: "Distance",
        x: am5.p50,
        centerX: am5.p50,
      })
    );

    yAxis.children.unshift(
      am5.Label.new(root, {
        rotation: -90,
        text: "Speed",
        y: am5.p50,
        centerX: am5.p50,
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        valueXField: "value2",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    var scrollbar = am5xy.XYChartScrollbar.new(root, {
      orientation: "horizontal",
      height: 50,
    });
    chart.set("scrollbarX", scrollbar);

    var sbxAxis = scrollbar.chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    var sbyAxis = scrollbar.chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    var sbseries = scrollbar.chart.series.push(
      am5xy.LineSeries.new(root, {
        xAxis: sbxAxis,
        yAxis: sbyAxis,
        valueYField: "value",
        valueXField: "value",
      })
    );

    var data = generateDatas(500);
    console.log("data:", data);
    series.data.setAll(data);
    sbseries.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/

    root.current = root;
    return () => {
      root.dispose();
    };
  }, [props]);

  return <div id="chartdiv" style={{ width: "100%", height: "450px" }}></div>;
}
