<template>
  <section class="container">
    <div class="title">Reverse</div>
    <div v-for="(line, i) in board" :key="i" @click="sayHi" class="line">
      <button v-for="(block, i) in line" :key="i" class="block">
        <div :class="blockJudge(block)" :style="styles(block)" class="piece"></div>
      </button>
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
        black: !!(block === 2)
      });
    }
  },
  methods: {
    sayHi() {
      console.log("Hi");
    },
    styles(block) {
      if (block === 0) return false;
      return {
        boxShadow: `0 3px ${block === 1 ? "black" : "white"}`
      };
    }
  }
};
</script>

<style scoped>
.block {
  width: 50px;
  height: 50px;
  vertical-align: bottom;
  border: solid 1px;
  border-color: black;
  background-color: green;
}
.piece {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: auto;
}
</style>