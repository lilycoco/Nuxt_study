<template>
  <section class="container">
    <div class="title">Reverse</div>
    <div class="boardArea">
      <div v-for="(line, index) in board" :key="index" class="line">
        <button
          v-for="(block, i) in line"
          :key="i"
          class="block"
          @click="turnPieces(index, i)"
        >
          <div
            :class="pieceColorJudge(block)"
            :style="styles(block)"
            class="piece"
          ></div>
        </button>
      </div>
    </div>
    <div class="gameInfoArea">
      <div class="nextTurn">
        Next Turn: {{ currentColor === 1 ? "white" : "black" }}
      </div>
    </div>
  </section>
</template>

<script>
const directions = [
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
  { x: -1, y: 1 },
  { x: -1, y: 0 }
];
export default {
  data() {
    return {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      currentColor: 1
    };
  },
  components: {},
  computed: {
    pieceColorJudge() {
      return block => ({
        white: !!(block === 1),
        black: !!(block === -1)
      });
    }
  },
  methods: {
    styles(block) {
      if (block === 0) return false;
      return {
        boxShadow: `0 3px ${block === 1 ? "black" : "white"}`
      };
    },
    turnPieces(y, x) {
      if (this.board[y][x] !== 0) return;
      const confirmedPieces = [];

      directions.forEach((direction, index) => {
        const adjacentY = y + direction.y;
        const adjacentX = x + direction.x;
        if (adjacentY > 7 || adjacentY < 0) return;
        const adjacentBlock = this.board[adjacentY][adjacentX];
        const candidatePieces = [];
        let n = 1;
        let addableCandidates = true;

        if (adjacentBlock === this.currentColor * -1) {
          candidatePieces.push({ y: adjacentY, x: adjacentX });
          while (addableCandidates) {
            const candidateY = adjacentY + direction.y * n;
            const candidateX = adjacentX + direction.x * n;
            if (
              candidateY > 7 ||
              candidateY < 0 ||
              candidateX > 7 ||
              candidateX < 0
            ) {
              addableCandidates = false;
              break;
            }
            switch (this.board[candidateY][candidateX]) {
              case 0:
                addableCandidates = false;
                break;
              case this.currentColor:
                confirmedPieces.push(...candidatePieces);
                addableCandidates = false;
                break;
              case this.currentColor * -1:
                candidatePieces.push({
                  y: candidateY,
                  x: candidateX
                });
                n += 1;
            }
          }
        }
      });
      if (confirmedPieces.length > 0) {
        this.board = JSON.parse(JSON.stringify(this.board));
        this.board[y][x] = this.currentColor;
        confirmedPieces.forEach(piece => {
          this.board[piece.y][piece.x] = this.currentColor;
        });
        this.currentColor = this.currentColor * -1;
      }
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.title {
  margin: 20px;
}
.boardArea {
  box-shadow: 0 0 8px black;
}
.block {
  width: 50px;
  height: 50px;
  vertical-align: bottom;
  border: solid 1px;
  border-color: black;
  background-color: green;
  outline: none;
}
.piece {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: auto;
}
.gameInfoArea {
  text-align: right;
}
.nextTurn {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 15px;
}
</style>
