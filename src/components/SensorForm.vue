<template>
  <form @submit.prevent>
    <h3>Добавить датчик</h3>
    <my-input v-model="sensor.name" type="text" placeholder="Название датчика" required />
    <my-input
      v-model="sensor.temperature"
      type="number"
      min="-100"
      max="200"
      placeholder="Температура, °C"
    />
    <my-input
      v-model="sensor.humidity"
      type="number"
      min="0"
      max="100"
      placeholder="Влажность, %"
    />

    <my-button class="btn primary" type="submit" @click="createSensor">Добавить</my-button>
  </form>
</template>

<script>
export default {
  name: 'sensor-form',
  data() {
    return {
      sensor: {
        sensor_id: '',
        name: '',
        temperature: '',
        humidity: ''
      }
    }
  },
  methods: {
    createSensor() {
      this.sensor.sensor_id = Date.now()
      this.$emit('create', this.sensor)
      this.sensor = {
        name: '',
        temperature: '',
        humidity: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
