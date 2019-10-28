<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <reverse />
    </v-flex>
  </v-layout>
</template>

<script>
import Reverse from "~/components/Reverse.vue";

export default {
  components: {
    Reverse
  }
};
</script>
