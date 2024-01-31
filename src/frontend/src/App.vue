<script lang="ts" setup>
import Header from './components/Header.vue'
import RoomList from "@/components/RoomList.vue"
import Display from "@/components/Display.vue"
import DeploymentList from "@/components/DeploymentList.vue"
import {useRoomStore} from "@/stores/room";

const roomStore = useRoomStore()
</script>

<template>
  <Header/>
  <div class="flex-grow-1 d-flex overflow-hidden">
    <RoomList/>
    <Display v-if="roomStore.activatedRoom"/>
  </div>
  <DeploymentList/>
</template>
