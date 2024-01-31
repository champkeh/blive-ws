<script setup lang="ts">
import {useRoomStore} from "@/stores/room";
import {Room} from "@/types";
import {computed, Ref} from "vue";

const roomStore = useRoomStore()
const room: Ref<Room> = computed(() => roomStore.activatedRoom!)
</script>

<template>
  <div class="flex-grow-1 p-3">
    <div class="card mh-100">
      <h5 class="card-header">直播间弹幕数据({{room.roomId}})</h5>
      <div class="card-body overflow-y-scroll">
        <div class="log" v-for="(log, idx) in room.logs" :key="idx">
          <template v-if="log.payload.cmd === 'DANMU_MSG'">
            <p>{{log.payload.info[2][1]}}({{log.payload.info[2][0]}}): {{log.payload.info[1]}}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.process-item {
  position: relative;

  .status {
    position: absolute;
    right: 0;
    top: 10px;
  }
}
</style>
