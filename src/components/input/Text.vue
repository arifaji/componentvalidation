<template>
  <a-col :cols="cols">
    <div class="e-float-label">
      <b-form-input v-model="d_value" name="input" autocomplete="off" type="text" class="form-control e-input" />
      <label class="e-label" for="input">{{label}}</label>
    </div>
  </a-col>
</template>
<script>
import Col from '../custom/Col'
export default {
  props: {
    label: { type: String, default: 'Label'},
    cols: { type: String, default: '12,12,12,12'},
    type: { type: String, default: 'text'},
    required: { type: Boolean, default: false}
  },
  components: {
    'a-col': Col
  },
  data() {
    return {
      d_value: null
    }
  },
}
</script>