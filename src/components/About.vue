<template>
  <div>
    <h1>About</h1>
    <ul>
      <li>
        <img class="icon" src="./image/cAIxpCsy.jpg" />
      </li>
      <li>
        <div>
          <h2>Suite</h2>
          <p>
            「すいーと」と呼びます<br>
            Jazzピアノが好きな歌い手&MIX師です。<br />
            成人済み♂, アイコンは自撮りモチーフ
          </p>
        </div>
      </li>
    </ul>
    <h3>MIX依頼について</h3>
      <p>
        Suiteでは無償でのMIX受付を行っております。<br/>
        下記の「Contact」のMIX受付フォームより<br/>
        お申し込みください
      </p>
  </div>
</template>

<script>
export default {
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  margin-top: 50px;
  width: 200px;
  height: 200px;
}
ul {
  list-style-type: none;
  display: inline-flex;
}
li {
  text-align: left;
  margin: 0 15px;
}
@media screen and (max-width: 480px) {
  ul {
    display: block;
    text-align: center;
  }
  li {
    text-align: center;
    margin-left: -20px
  }
  .icon {
    margin-top: 20px;
    width: 150px;
    height: 150px;
  }
}
</style>
