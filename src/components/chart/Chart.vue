<template>
  <div class="chart">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mt-5">
          <chart-header></chart-header>
        </div>
        <div class="col-md-12 mt-5">
          <middle-chart :parentData="parentData"></middle-chart>
        </div>
        <div class="col-md-6 mt-5">
          <chart-footer-left></chart-footer-left>
        </div>
        <div class="col-md-6 mt-5">
          <chart-footer-right></chart-footer-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderChart from "./HeaderChart";
import MiddleChart from "./MiddleChart";
import FooterChartLeft from "./FooterChartLeft";
import FooterChartRight from "./FooterChartRight";

export default {
  components: {
    chartHeader: HeaderChart,
    middleChart: MiddleChart,
    chartFooterLeft: FooterChartLeft,
    chartFooterRight: FooterChartRight
  },
  data() {
    return {
      chartUrl: "../../src/static/data/data.json",
      chartData: [],
      parentData: []
    };
  },
  created () {
    this.axios
      .get(this.chartUrl)
      .then(
        response => (
          (this.chartData = response.data),
          console.log("DATA BURASI", this.chartData),
          this.$eventBus.$emit('send-data', this.chartData)
        )
      );
  },
  
};
</script>

<style lang="scss" scoped>
.chart{
    background: #eeeeee;
}
</style>