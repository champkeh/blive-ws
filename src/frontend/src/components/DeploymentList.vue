<script setup lang="ts">
import {ref} from "vue";
import {proxyHost} from "@/utils/index";

interface Deployment {
  id: string
  description: string
  status: "success"
  createdAt: string
  updatedAt: string
}

const deployments = ref<Deployment[]>([])
fetch(`${proxyHost}/api/deployments`).then(resp => resp.json()).then(data => {
  deployments.value = data
})
const show = ref(false)
function toggleShow() {
  show.value = !show.value
}
function formatDate(input: string) {
  return new Date(input).toLocaleString()
}
</script>

<template>
  <div class="deployments d-flex flex-column align-items-end">
    <ul v-if="show" class="container-sm p-0 list-group shadow-lg">
      <li
          v-for="deployment in deployments"
          :key="deployment.id"
          class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="flex-grow-1" :class="deployment.status === 'success' ? 'text-success' : 'text-danger'">{{ deployment.description }}</div>
        <small>{{ formatDate(deployment.updatedAt) }}</small>
      </li>
    </ul>
    <button type="button" class="btn btn-dark" @click="toggleShow">
      <i v-if="show" class="bi bi-chevron-contract"></i>
      <i v-else class="bi bi-chevron-expand"></i>
      最新5次部署
    </button>
  </div>
</template>

<style scoped lang="scss">
.deployments {
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 100%;
  max-width: 400px;
}
</style>
