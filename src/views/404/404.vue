<template>
    <div class="not-found wh">
        <h1>网页不存在</h1>
        <section class="error-container">
            <span>4</span>
            <span><span class="screen-reader-text">0</span></span>
            <span>4</span>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #416475;
  color: #92a4ad;
  .error-container {
    margin: 20px 15px;
    text-align: center;
    font-weight: 800;
    font-size: 180px;
    font-family: "Catamaran", sans-serif;
    & > span {
      position: relative;
      position: relative;
      display: inline-block;
      display: inline-block;
      color: #ffb485;
      vertical-align: middle;
      line-height: 0.7;
      &:nth-of-type(1) {
        color: #d1f2a5;
        animation: colordancing 4s infinite;
      }
      &:nth-of-type(3) {
        color: #f56991;
        animation: colordancing2 4s infinite;
      }
      &:nth-of-type(2) {
        width: 120px;
        height: 120px;
        border-radius: 999px;
      }
      &:nth-of-type(2):before {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
  .error-container > span:nth-of-type(2):before,
  .error-container > span:nth-of-type(2):after {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 0%;
    border-radius: 999px;
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(239, 250, 180, 0.4),
      inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    content: "";
    animation: shadowsdancing 4s infinite;
  }
  /*37muban.com*/
  .screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
  }

  @keyframes shadowsdancing {
    0% {
      box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
        inset 0 30px 0 rgba(239, 250, 180, 0.4),
        inset -30px 0 0 rgba(255, 196, 140, 0.4),
        inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    }
    25% {
      box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
        inset 0 30px 0 rgba(209, 242, 165, 0.4),
        inset -30px 0 0 rgba(239, 250, 180, 0.4),
        inset 0 -30px 0 rgba(255, 196, 140, 0.4);
    }
    50% {
      box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
        inset 0 30px 0 rgba(245, 105, 145, 0.4),
        inset -30px 0 0 rgba(209, 242, 165, 0.4),
        inset 0 -30px 0 rgba(239, 250, 180, 0.4);
    }
    75% {
      box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
        inset 0 30px 0 rgba(255, 196, 140, 0.4),
        inset -30px 0 0 rgba(245, 105, 145, 0.4),
        inset 0 -30px 0 rgba(209, 242, 165, 0.4);
    }
    100% {
      box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
        inset 0 30px 0 rgba(239, 250, 180, 0.4),
        inset -30px 0 0 rgba(255, 196, 140, 0.4),
        inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    }
  }
  @keyframes colordancing {
    0% {
      color: #d1f2a5;
    }
    25% {
      color: #f56991;
    }
    50% {
      color: #ffc48c;
    }
    75% {
      color: #effab4;
    }
    100% {
      color: #d1f2a5;
    }
  }
  @keyframes colordancing2 {
    0% {
      color: #ffc48c;
    }
    25% {
      color: #effab4;
    }
    50% {
      color: #d1f2a5;
    }
    75% {
      color: #f56991;
    }
    100% {
      color: #ffc48c;
    }
  }
}
</style>
