<template>
  <a-layout-sider theme="light"
                  class="sider font-white">
    <Menu />
  </a-layout-sider>
</template>

<script>
import { defineComponent } from 'vue'
import Menu from '../menu'
export default defineComponent({
  components: { Menu }
})
</script>

<style>
</style>