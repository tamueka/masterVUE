<template src="./Articles.html">
</template>

<script>
import Global from "../Global";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>

<style scoped>
</style>