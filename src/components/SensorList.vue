<template>
  <div>
    <h2>Список датчиков</h2>
    <ul class="list" v-if="sensors.length !== 0">
      <sensor-item
        v-for="(sensor, index) in sensors"
        :sensor="sensor"
        :key="sensor.id"
        @remove="$emit('remove', index)"
      />
    </ul>
    <h3 v-else class="empty">Список датчиков пуст</h3>
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
    return {
      sensors
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: 600;
}

.empty {
  color: red;
  text-align: center;
}
</style>
