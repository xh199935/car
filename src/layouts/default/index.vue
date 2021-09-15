<template>
  <Layout class="layout ">
    <Sider />
    <Layout class="layout">
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';

import Sider from './sider/index.vue';
import Header from './header/index.vue';
import Content from './content/index.vue';
import Footer from './footer/index.vue';

export default defineComponent({
  components: { Sider, Header, Content, Footer, Layout },
});
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
}
</style>