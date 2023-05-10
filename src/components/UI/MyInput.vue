<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 70%;
  margin-bottom: 10px;
  padding: 7px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.input:focus {
  outline: none;
  border-color: #42b983;
}
</style>
