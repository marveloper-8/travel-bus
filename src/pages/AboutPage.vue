<template>
  <div class="home">

    <!-- first section-->

    <div class="first-section">
      <div class="content">
        <div class="title">
          What makes
          <br /> us <a class="price">different!</a>
        </div>
        <div class="subtitle">
          And it's super comfy <span role="img">🤩</span>
        </div>

        <div class="sendLink">
          <input class="textField" type="text" placeholder="Enter your email address..." />
          <input class="submitButton" type="submit" />
          <div class="text">We'll send you a link to download the TravelBus app</div>
        </div>
      </div>
    </div>

    <!-- (end) first section-->



    <!-- second section-->

    <div class="second-section">
      <div class="content">
        <div class="title">
          Let's <a class="go">go!!</a>
        </div>
        <div class="text">
          Check how much your trip cost. Enter your pickup location and destination to get started...
        </div>
        <div class="location">
          <div class="label"></div>
          <div class="input">
            <input class="pickup" type="text" placeholder="Enter pickup Location" />
            <br />
            <input class="destination" type="text" placeholder="Enter Drop-off Location" />
          </div>
        </div>
      </div>
    </div>

    <!-- (end) second section-->



    <!-- third section-->

    <div class="third-section">
      <div class="content">
        <div class="title">
          How does TravelBus work
        </div>
        <div class="text">
          Choose your destination and get
          <br />there with a few simple touches...
        </div>
      </div>
    </div>

    <!-- (end) third section-->

    

  </div>
</template>

<script>
export default{
  name:'HelloWorld',
  props:{
    title:{
      type:String
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
  .first-section .content .sendLink{
      padding:40px 0;
  }
  .first-section .content .sendLink input{
      padding:15px 2vw;
      font-size:17.5px;
  }
  .first-section .content .sendLink .textField{
      width:300px;
      background:#fff;
      box-shadow:0px 0px 10px #dadada;
      outline:none;
      border:none;
      border-radius:10px;
      font-family:"Fira Sans";
      font-size:17.5px;
  }
  .first-section .content .sendLink .submitButton{
      margin-left:1vw;
      background:teal;
      color:#fff;
      border:none;
      outline:none;
      border-radius:10px;
      box-shadow:0px 0px 10px #dadada;
  }
  .first-section .content .sendLink .text{
      margin-top:3vh;
      font-size:17.5px;
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
  }
  .second-section .content{
      padding:15vh 7.5vw 15vh 5vw;
      position:absolute;
      top:0;
      right:0;
      width:40vw;
      text-align:left;
  }
  .second-section .content .title{
      font-size:80px;
      font-weight:bold;
      margin-bottom:7vh;
  }
  .second-section .content .title .go{
      color:teal;
  }
  .second-section .content .text{
      font-size:17.5px;
      padding-right:10vw;
  }
  .second-section .content .location{
      margin-top:5vh;
      background:#fff;
      box-shadow:0px 0px 10px #dadada;
  }
  .second-section .content .location .label{
      width:10%;
      height:80px;
      background:#000;
      display:inline-block;
  }
  .second-section .content .location .input{
      width:75%;
      height:100px;
      padding:0 1vw;
      display:inline-block;
  }
  .second-section .content .location .input input{
      background:none;
      outline:none;
      border:none;
      width:100%;
      padding:15px 2vw;
      font-size:17.5px;
      font-family:"Fira Sans";
  }
  .second-section .content .location .input .pickup{
      border-bottom:#dadada 1px solid;
  }
  /* end second section */

  /* third section */
  .third-section{
      width:100%;
      height:100vh;
      position:relative;
  }
  .third-section .content{
      padding:15vh 0;
      position:absolute;
      top:0;
      right:0;
      width:100vw;
      text-align:center;
  }
  .third-section .content .title{
      font-size:50px;
      font-weight:bold;
      margin-bottom:3 vngb vvh;
  }
  .third-section .content .text{
      font-size:17.5px;
  }
  .third-section .content .location{
      margin-top:5vh;
      background:#fff;
      box-shadow:0px 0px 10px #dadada;
  }
  .third-section .content .location .label{
      width:10%;
      height:80px;
      background:#000;
      display:inline-block;
  }
  .third-section .content .location .input{
      width:75%;
      height:100px;
      padding:0 1vw;
      display:inline-block;
  }
  .third-section .content .location .input input{
      background:none;
      outline:none;
      border:none;
      width:100%;
      padding:15px 2vw;
      font-size:17.5px;
      font-family:"Fira Sans";
  }
  .third-section .content .location .input .pickup{
      border-bottom:#dadada 1px solid;
  }
  /* end third section */

  /* footer */

  /* end of footer */
</style>
