<template>
  <div class="app">
    <my-modal v-model:show="modalVisible">
      <sensor-form @create="createSensor" />
    </my-modal>
    <SensorList :sensorsData="sensors" @remove="removeSensor" />
    <my-button class="center" @click="showModal">Добавить датчик</my-button>
  </div>
</template>

<script>
import SensorList from './components/SensorList.vue'
import SensorForm from './components/SensorForm.vue'
import json from '../src/sensors.json'

export default {
  name: 'App',
  components: {
    SensorList,
    SensorForm
  },
  data() {
    return {
      modalVisible: false,
      sensors: json
    }
  },
  beforeMount() {
    if (localStorage.getItem('sensors')) {
      try {
        this.sensors = JSON.parse(localStorage.getItem('sensors'))
      } catch (e) {
        localStorage.removeItem('sensors')
      }
    }
  },
  methods: {
    createSensor(sensor) {
      this.sensors.push({ ...sensor })
      this.saveSensors()
    },

    removeSensor(index) {
      this.sensors.splice(index, 1)
      this.saveSensors()
    },

    showModal() {
      this.modalVisible = 'true'
    },

    saveSensors() {
      const parsed = JSON.stringify(this.sensors)
      localStorage.setItem('sensors', parsed)
    }
  }
}
</script>
