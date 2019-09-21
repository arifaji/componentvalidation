<template>
  <b-col :class="classes" v-bind="options">
    <slot></slot>
  </b-col>
</template>
<script>
export default {
  props: {
    cols: { type: String, default: '12,12,12,12' }
  },
  data () {
    return {
      options: {},
      classes: {}
    }
  },
  mounted() {
    this.fSplitColumns()
  },
  methods: {
    fSplitColumns () {
      this.classes = {}
      this.options = {}
      let cols = this.cols.split(',')
      if (cols.length > 0) this.classes = { ...this.classes, ['col-' + cols[0].trim()]: true }
      if (cols.length > 1) this.options = { ...this.options, 'sm': cols[1].trim() }
      if (cols.length > 2) this.options = { ...this.options, 'md': cols[2].trim() }
      if (cols.length > 3) this.options = { ...this.options, 'lg': cols[3].trim() }
    }
  },
  watch: {
    col () {
      this.fSplitColumns()
    }
  },
}
</script>