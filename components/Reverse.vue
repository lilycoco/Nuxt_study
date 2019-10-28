<template>
  <section class="container">
    <div class="title">Reverse</div>
    <div v-for="(line, i) in board" :key="i" @click="sayHi" class="line">
      <button v-for="(block, i) in line" :key="i" :class="blockJudge(block)" class="block"></button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    };
  },
  components: {},
  computed: {
    blockJudge() {
      return block => ({
        white: !!(block === 1),
        black: !!(block === 2),
        green: !!(block === 0)
      });
    }
  },
  methods: {
    sayHi() {
      console.log("Hi");
    }
  }
};
</script>

<style scoped>
.block {
  width: 50px;
  height: 50px;
  border: solid 1px white;
  vertical-align: bottom;
}
</style>