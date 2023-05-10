<template>
  <div>
    <h2>Список датчиков</h2>
    <ul class="list" v-if="sensors.length !== 0">
      <sensor-item
        v-for="(sensor, index) in sensors"
        :sensor="sensor"
        :key="sensor.sensor_id"
        @remove="$emit('remove', index)"
      />
    </ul>
    <h3 v-else style="color: red">Список датчиков пуст</h3>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SensorItem from './SensorItem.vue'

export default {
  name: 'SensorList',
  components: { SensorItem },
  props: {
    sensorsData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const sensors = reactive(props.sensorsData)
    const newSensor = reactive({ sensor_id: null, name: '', temperature: null, humidity: null })

    const addSensor = () => {
      sensors.push({ ...newSensor })
      // newSensor.sensor_id =
      newSensor.name = ''
      newSensor.temperature = null
      newSensor.humidity = null
    }

    return {
      sensors,
      newSensor,
      addSensor
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  background: #2c3e50;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  line-height: 1.45;
}

h1 {
  font-size: 2.2rem;
  font-weight: 600;
}

h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

h3 {
  font-size: 1.35rem;
  margin-bottom: 0.3rem;
}

ul {
  line-height: 1.7;
  margin: 0;
  padding: 0;
  list-style: none;
}
.param {
  margin: 0 3rem;
}
</style>
