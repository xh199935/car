<template>
  <div class="anticon"
       :class="getAppLogoClass"
       @click="goHome">
    <img src="@/assets/img/logo.png" />
    <div class="ml-2 truncate md:opacity-100"
         :class="getTitleClass"
         v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>