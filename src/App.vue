<template>
  <v-app>
    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <div :class="{ dark: themeColor }">
          <router-view />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["themeColor"]),
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" >
#app {
  --theme-dark-bg: rgb(14, 0, 0);
  --theme-dark-text: rgb(14, 0, 0);
  --theme-light-bg: rgb(248, 243, 243);
  --theme-light-text: rgb(248, 243, 243);
}
.dark {
  transition: all 0.5s ease;
  background-color: black;
  color: white;
  height: 100%;
}
.light {
  transition: all 0.5s ease;
  background-color: white;
  color: black;
  height: 100%;
}
</style>
