<template>
  <div class="footer-chart-right">
    <div class="card">
      <div class="card-body">
        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  parentData: {
    type: "",
    default() {
      return "";
    }
  },
  data() {
    return {
      childData: [],
      title: "pie",
      points: [10, 0, 8, 2, 6, 4, 5, 5],
      chartType: "VariableRadiusPie",
      seriesColor: "#6fcd98",
      colorInputIsSupported: null,
      chartOptions: {
        chart: {
          type: "pie"
        },
        title: {
          text: "Sin chart"
        },
        xAxis: {
          categories: []
        },
        series: [
          {
            data: [],
            color: "#6fcd98",
          }
        ]
      }
    };
  },
  created() {
    this.$eventBus.$on("send-data", chartData => {
      chartData["login_types"].forEach(element =>
        this.childData.push(element)
      );

      let numbersofData = this.chartOptions.series[0].data;
      let namesofData = this.chartOptions.xAxis.categories;

      console.log("Slice isimleri eklendi ancak chart listelemiyor", namesofData);
      for (let i = 0; i < 4; i++) {
        numbersofData.push(this.childData[i][1]);
        namesofData.push(JSON.stringify(this.childData[i][0]));
      }
    });
  }
};
</script>

<style lang="scss" scoped>
//Variable radius pie
</style>