new Vue({
  el: "#app",
  data: {
    hand: ["グー", "チョキ", "パー"],
    enemyHand: "",
    result: "",
  },

  methods: {
    fight: function (myHand) {
      // 敵の手をランダムで決める
      let index = Math.floor(Math.random() * Math.floor(3));
      this.enemyHand = this.hand[index];

      // 引き分け
      if (myHand === this.enemyHand) {
        this.result = "引き分け";
      }

      // 勝ち
      if (myHand === "グー" && this.enemyHand === "チョキ") {
        this.result = "勝ち";
      }
      if (myHand === "チョキ" && this.enemyHand === "パー") {
        this.result = "勝ち";
      }
      if (myHand === "パー" && this.enemyHand === "グー") {
        this.result = "勝ち";
      }

      // 負け
      if (myHand === "グー" && this.enemyHand === "パー") {
        this.result = "負け";
      }
      if (myHand === "チョキ" && this.enemyHand === "グー") {
        this.result = "負け";
      }
      if (myHand === "パー" && this.enemyHand === "チョキ") {
        this.result = "負け";
      }
    },
  },
});
