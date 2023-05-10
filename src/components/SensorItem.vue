<template>
  <div class="container">
    <div class="item"><strong>Название:</strong> {{ sensor.name }}</div>

    <div v-if="sensor.temperature"><strong>Температура:</strong> {{ sensor.temperature }}°C</div>
    <div class="empty" v-else><strong>Температура:</strong> неизвестно</div>

    <div v-if="sensor.humidity"><strong>Влажность:</strong> {{ sensor.humidity }}%</div>
    <div class="empty" v-else><strong>Влажность:</strong> неизвестно</div>

    <my-button class="btn danger" @click="$emit('remove', sensor)">Удалить</my-button>
  </div>
</template>

<script>
export default {
  name: 'sensor-item',
  props: {
    sensor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.sensor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 1rem;
  padding: 1rem 0.5rem;
  transition: 0.22s all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hide;
  border: 2px solid teal;
  border-radius: 10px;
}

.sensor:hover {
  background: #eee;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  gap: 0% 5%;
  grid-auto-flow: column;
  justify-content: center;
  align-content: center;
  justify-items: start;
  align-items: center;

  margin: 0.5rem 1rem;
  padding: 1rem 0.5rem;
  border: 2px solid teal;
  border-radius: 10px;
}

.item {
  max-width: 100px;
  overflow-wrap: break-word;
}

.empty {
  color: lightgrey;
}

@media (max-width: 620px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);

    gap: 3% 0%;
    justify-items: center;
  }
}
</style>
