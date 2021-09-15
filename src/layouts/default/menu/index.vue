<script lang="tsx">
import { computed, defineComponent, unref, toRef } from 'vue';
import { AppLogo } from '@/components/Application';
export default defineComponent({
  name: 'LayoutMenu',
  setup(props) {
    function renderHeader() {
      return <AppLogo />;
    }
    return () => {
      return <>{renderHeader()}</>;
    };
  },
});
</script>

<style>
</style>