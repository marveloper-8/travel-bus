<template>
  <div class="home">

    <header-comp></header-comp>

    <!-- first section-->
    <div class="first-section">
      <div class="content">
        <span class="subtitle">
          However you ride,<br />we do it
        </span>
        <span class="title">
          better <a class="price">and</a> cheaper! &nbsp; &nbsp;
           <span role="img">😎</span>
        </span>

        <div class="downloadLinks">
          <img src="../assets/icons/download-from-app-store.png" />
          <img src="../assets/icons/download-from-play-store.png" />
        </div>
      </div>
    </div>
    <!-- (end) first section-->



    <!-- second section-->

    <div class="second-section">

      <div class="elements">
        <div class="icon" role="img">💸</div>
        <h1>Affordable</h1>
        <div>Beats the current cheapest available means of transportation because you deserve that extra change.</div>
      </div>

      <div class="elements">
        <div class="icon" role="img">🧉</div>
        <h1>Comfortable</h1>
        <div>Heat, dust, and traffic pose no trouble with experienced drivers and well air conditioned buses at your service.</div>
      </div>

      <div class="elements">
        <div class="icon" role="img">🤗</div>
        <h1>User friendly</h1>
        <div>From unlimited internet on the bus, to excellent customer service, to an easy-to-use app, we just became friends.</div>
      </div>

    </div>

    <!-- (end) second section-->



    <!-- third section-->

    <div class="third-section">
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

    <!-- (end) third section-->

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
  .first-section .content{
      padding:15vh 10vw;
      position:relative;
      top:0;
      left:0;
      width:60vw;
  }
  .first-section .content .title{
      font-size:80px;
      font-weight:bold;
  }
  .first-section .content .title .price{
      color:teal;
  }
  .first-section .content .subtitle{
      font-size:70px;
  }
  .first-section .content .downloadLinks{
    padding:10vh 0;
  }
  .first-section .content .downloadLinks img{
      width:10vw;
      margin-right:1vw;
  }
  /* end first section */

  /* second section */
  .second-section{
      width:100%;
      height:100vh;
      position:relative;
      display:flex;
      align-items:stretch;
  }
  .second-section .elements{
      padding:15vh 7.5vw 15vh 5vw;
      width:40vw;
      text-align:center;
      flex-grow:1;
  }
  .second-section .elements .icon{
    font-size:5vw;
  }
  /* end second section */

  /* third section */
  .third-section{
      width:100%;
      height:100vh;
      position:relative;
      padding:15vh 0;
      text-align:center;
  }
  .third-section .title{
    font-size:80px;
    font-weight:bold;
  }
  .third-section .sendLink{
      padding:40px 0;
  }
  .third-section .sendLink input{
      padding:15px 2vw;
      font-size:17.5px;
  }
  .third-section .sendLink .textField{
      width:300px;
      background:#fff;
      box-shadow:0px 0px 10px #dadada;
      outline:none;
      border:none;
      border-radius:10px;
      font-family:"Fira Sans";
  }
  .third-section .sendLink .submitButton{
      margin-left:1vw;
      background:teal;
      color:#fff;
      border:none;
      outline:none;
      border-radius:10px;
      box-shadow:0px 0px 10px #dadada;
  }
  .third-section .sendLink .text{
      margin-top:3vh;
  }
  .third-section .downloadLinks{
      padding:40px 0;
  }
  .third-section .downloadLinks .text{
      margin-bottom:3vh;
  }
  .third-section .downloadLinks img{
      width:10vw;
      margin-right:1vw;
  }
  /* end third section */

  /* footer */

  /* end of footer */
</style>
