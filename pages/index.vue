<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <reverse :boardData="boardData" :authData="authData" />
    </v-flex>
  </v-layout>
</template>

<script>
import Reverse from "~/components/Reverse.vue";

export default {
  components: {
    Reverse
  },
  async asyncData({ app, $axios }) {
    const boardData = await $axios
      .get("/board")
      .catch(error => {
        console.log("board response error", error);
        return false;
      })
      .then(res => res.data);
    console.log(boardData);

    const authData = await $axios
      .get("/auth")
      .catch(error => {
        console.log("auth response error", error);
        return false;
      })
      .then(res => res.data);
    console.log(authData);
    return { boardData, authData };
  }

  // mounted() {
  //   setinterval {
  //     axios
  //   },
  // },
};
</script>
