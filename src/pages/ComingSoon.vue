<template>
  <div class="home">

    <header-comp></header-comp>

    <!-- first section-->
    <div class="first-section">
      <div class="title">
        COMING SOON
      </div>
      <div class="subtitle">
        We'll see you shortly
        <span role="img">😢</span>
      </div>

      <div class="downloadLinks">
        <img src="../assets/icons/download-from-app-store.png" />
        <img src="../assets/icons/download-from-play-store.png" />
      </div>
    </div>
    <!-- (end) first section-->



    <!-- second section-->

    <div class="second-section">
        <div class="title">Get The App</div>

        <div class="sendLink">
          <input class="textField" type="text" placeholder="Enter your email address..." />
          <input class="submitButton" type="submit" />
          <div class="text">We'll send you a link to download the TravelBus app</div>
        </div>

        <div style="font-weight:bold; font-size:30px">OR</div>

        <div class="downloadLinks">
          <div class="text">Download the app</div>
          <img src="../assets/icons/download-from-app-store.png" />
          <img src="../assets/icons/download-from-play-store.png" />
        </div>
    </div>

    <!-- (end) second section-->

    <footer-comp></footer-comp>

  </div>
</template>

<script>
export default{
  name:'HelloWorld',
  props:{
    title:{
      type:String
    },
    components:{

    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .home{
      position:absolute;
      width:100%;
      top:0;
      left:0;
      font-family: "Fira Sans";
      padding:0;
      margin:0;
  }

  /* first section */
  .first-section{
      background:#fff;
      position:relative;
  }
  .first-section{
      padding:15vh 0;
      position:relative;
      top:0;
      left:0;
      width:100%;
      text-align:center;
  }
  .first-section .title{
      font-size:150px;
      font-weight:bold;
  }
  .first-section .title .price{
      color:teal;
  }
  .first-section .subtitle{
      font-size:30px;
  }
  .first-section .downloadLinks{
    padding:10vh 0;
  }
  .first-section .downloadLinks img{
      width:10vw;
      margin-right:1vw;
  }
  /* end first section */

  /* third section */
  .second-section{
      width:100%;
      height:100vh;
      position:relative;
      padding:15vh 0;
      text-align:center;
  }
  .second-section .title{
    font-size:80px;
    font-weight:bold;
  }
  .second-section .sendLink{
      padding:40px 0;
  }
  .second-section .sendLink input{
      padding:15px 2vw;
      font-size:17.5px;
  }
  .second-section .sendLink .textField{
      width:300px;
      background:#fff;
      box-shadow:0px 0px 10px #dadada;
      outline:none;
      border:none;
      border-radius:10px;
      font-family:"Fira Sans";
  }
  .second-section .sendLink .submitButton{
      margin-left:1vw;
      background:teal;
      color:#fff;
      border:none;
      outline:none;
      border-radius:10px;
      box-shadow:0px 0px 10px #dadada;
  }
  .second-section .sendLink .text{
      margin-top:3vh;
  }
  .second-section .downloadLinks{
      padding:40px 0;
  }
  .second-section .downloadLinks .text{
      margin-bottom:3vh;
  }
  .second-section .downloadLinks img{
      width:10vw;
      margin-right:1vw;
  }
  /* end third section */

  /* footer */

  /* end of footer */
</style>
