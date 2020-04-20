<template>
  <div class="home container">
    <app-filter @toParent="handler" />
    Parent Data: {{childData}}
  </div>
</template>


<script>
import Filter from "./filter/Filter";

export default {
  name: "Home",
  components: {
    appFilter: Filter
  },
  data() {
    return {
        childData:''
    };
  },
  methods: {
    handler(value) {
      this.childData = value;
    }
  }
};
</script>


<style lang="scss" scoped>
</style>