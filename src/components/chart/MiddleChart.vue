<template>
  <div class="middle-chart">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Current Online</h5>
              {{childData.current_online}}
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Max. Online</h5>
              {{maxnum}}
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Unique Connections</h5>
              {{childData.unique_connections}}
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Impressions</h5>
              {{childData.impressions}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childData: [],
      maxnum: ''
    };
  },
  
  created() {
    this.$eventBus.$on('send-data', (chartData) => {
      this.childData = chartData;
      // console.log(this.childData)
        let newArr = this.childData['online_guests']
    this.maxnum = Math.max.apply(Math, newArr);
      console.log(this.childData)
    });
    
  },
  methods:{ 
  }
  
};
</script>

<style lang="scss" scoped>
.card-body{
  text-align: center;
}
</style>