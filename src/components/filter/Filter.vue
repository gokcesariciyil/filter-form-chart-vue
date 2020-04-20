<template>
  <div class="filter">
    <div class="container">
      <div class="d-flex header">
        <div class="title p-2">Guests</div>
        <div class="advanced-search p-2">
          <button
            @click="openAdvence=!openAdvence"
            type="button"
            class="btn btn-secondary"
          >Advanced Search</button>
        </div>
      </div>
      <form id="filter-form">
        <div class="d-flex justify-content-between flex-row">
          <div v-for="(item, index) in firstApiData" :key="index" class="pb-4 filter-select">
            <label for="userPhone">{{item.name}}</label>
            <b-form-select
              size="md"
              class="input-filter"
              v-if="item.options"
              :options="item.options"
              v-model="selected[index]"
            ></b-form-select>
            <input v-model="selected[index]" class="input-filter" v-if="!item.options" />
          </div>
        </div>
        <div v-if="openAdvence" class="d-flex justify-content-between flex-row">
          <div v-for="(item, index) in secondApiData" :key="index" class="pb-4 filter-select">
            <label for="userPhone">{{item.name}}</label>
            <b-form-select
              size="md"
              class="input-filter"
              v-if="item.options"
              :options="item.options"
              v-model="selectedAdvance[index]"
            ></b-form-select>
            <input v-model="selectedAdvance[index]" class="input-filter" v-if="!item.options" />
          </div>
        </div>
        <div class="d-flex footer">
          <div class="p2">
            <button type class="btn btn-primary">Submit</button>
          </div>
          <div class="p2">
            <a @click="clearAllFilters" type class="btn btn-group">
              <b-icon-x></b-icon-x>Clear
            </a>
            <a @click="addFind" type class="btn btn-group">
              <b-icon-search></b-icon-search>Search
            </a>
          </div>
        </div>
      </form>

      <div class="mt-3">
        Selected:
        <strong>{{ $data.finds }}</strong>
        <hr />Selected Advence Options:
        <strong>{{ findsAdvence }}</strong>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      apiUrl: "../../src/static/data/filters.json",
      apiData: [],
      firstApiData: [],
      secondApiData: [],
      openAdvence: false,
      selectedOption: [],
      finds: [],
      findsAdvence: [],
      selected: [],
      selectedAdvance: []
    };
  },
  mounted() {
    this.axios
      .get(this.apiUrl)
      .then(
        response => (
          (this.apiData = response.data),
          console.log("DATA BURASI", this.apiData),
          (this.firstApiData = this.apiData.slice(0, 5)),
          (this.secondApiData = this.apiData.slice(5, 10))
        )
      );
  },
  methods: {
    openAdvenceOptions() {
      this.openAdvence = !this.openAdvence;
    },
    clearAllFilters() {
      document.getElementById("filter-form").reset();
    },
    addFind() {
      this.finds.push(this.selected);
      this.findsAdvence.push(this.selectedAdvance);
      if (this.finds !== null || this.findsAdvence !== null) {
        const combined = this.finds.concat(this.findsAdvence);
        this.$emit("toParent", combined);
      }

      // console.log(this.finds)
      // console.log(this.findsAdvence)
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  padding: 50px 0;

  .header,
  .footer {
    justify-content: space-between;
    padding-bottom: 50px;
  }

  .title {
    font-size: 20px;
    padding: 20px 0;
  }

  .filter-select {
    width: 200px;

    .input-filter {
      width: 100%;
      height: 40px;
      border-radius: 0;
    }
  }

  .btn-group {
    border: 1px solid #cccccc;
  }

  .advence-filters {
    margin: 20px 0;
  }
}
</style>