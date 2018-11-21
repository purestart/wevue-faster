<template>
    <div class="index-wapper">
        <router-view></router-view>
        <BottomNav />
    </div>
</template>

<script type='text/ecmascript-6'>
import BottomNav from "../components/BottomNav";
export default {
  data() {
    return {};
  },
  components: {
    BottomNav
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.index-wapper {
  padding-bottom: 60px;
}
</style>