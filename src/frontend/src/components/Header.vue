<script lang="ts" setup>
import {useRoomStore} from '@/stores/room'
import {getRoomId} from "@/utils";
import {ref} from "vue";

const roomStore = useRoomStore()

const url = ref("")
const connecting = ref(false)


async function connect(evt: Event) {
  evt.preventDefault()

  try {
    const rid = getRoomId(url.value)
    await roomStore.connectRoom(rid)
    url.value = ''
  } catch (e: any) {
    alert(e.message)
  }
}

function createIssue() {
  window.open('https://github.com/champkeh/blive-ws/issues/new', '_blank')
}
</script>

<template>
  <div class="hstack p-2 gap-2 bg-light border-bottom">
    <form class="d-flex gap-2" @submit="connect">
      <input
          type="text"
          v-model="url"
          class="form-control"
          style="width: 50ch"
          :disabled="connecting"
          placeholder="请输入直播间地址或直播间号码"
          required
          autocomplete="off"
      />
      <select>

      </select>
      <button
          type="submit"
          class="btn btn-success px-4"
          :disabled="!url"
      >
      <span
          v-if="connecting"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
      ></span>
        连接
      </button>
    </form>
    <div class="flex-grow-1"></div>
    <button class="btn btn-light" @click="createIssue">
      反馈bug
    </button>
  </div>
</template>
