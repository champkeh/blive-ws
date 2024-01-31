<script lang="ts" setup>
import {useRoomStore} from "@/stores/room";
import type {Room} from '@/types'

const roomStore = useRoomStore()

</script>

<template>
  <div class="py-3">
    <details open>
      <summary></summary>
      <div class="wrapper">
        <h5 class="text-center py-2 mb-0 pt-3">房间列表</h5>
        <hr class="my-2">
        <p class="p-2" v-if="roomStore.rooms.length === 0">请在上方输入直播间 url 进行连接</p>
        <ul>
          <li
              v-for="(room, index) in roomStore.rooms"
              :key="room.id"
              :class="[room.status, {active: room.active}]"
              @click="roomStore.activeRoom(room)"
          >
            <span>{{ index + 1 }}. {{ room.roomId }}</span>
            <i class="icon bi bi-trash-fill" @click.stop="roomStore.disconnectRoom(room)"></i>
          </li>
        </ul>
      </div>
    </details>
  </div>
</template>

<style scoped lang="scss">
details {
  position: relative;
  border: 1px solid #cececf;
  min-width: 1rem;
  height: calc(100vh - 54px);
  box-sizing: border-box;
  overflow: hidden;

  &[open] {
    width: 340px;
  }

  summary {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1rem;
    padding-left: 3px;
    background-color: rgb(0 0 0 / 50%);

    &:hover {
      background-color: rgb(0 0 0 / 50%);
    }

    &::marker {
      color: white;
    }
  }

  .wrapper {
    padding-left: 1rem;
  }

  ul {
    list-style-type: none;
    scrollbar-gutter: stable both-edges;
    padding: 0.25rem;
    box-sizing: border-box;
    height: calc(100vh - 162px);
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      position: relative;
      background-color: white;
      color: black;
      border: 1px solid rgba(#cececf, 1);
      border-radius: 5px;
      margin: 1rem;
      padding: 1rem 1.5rem 1rem 1rem;
      box-sizing: border-box;

      &:hover {
        transition: all .2s;
        border: 1px solid rgba(#858585, 1);

        .icon {
          display: block;
        }
      }
      &.active {
        border-color: #7b50d2;
      }
      &.online {
        //border-color: green;
      }
      &.offline {
        //border-color: red;
      }

      .icon {
        display: none;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: color .1s;

        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
