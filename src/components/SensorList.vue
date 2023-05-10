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
