<template>
  <div class="footer">
    <div class="primary">
      <div style="flex-grow:3">
        <div class="logo">TravelBus</div>
      </div>
      <div style="flex-grow:1">
        <div class="title">Company</div>
        <div class="list">
          <span>Help center</span>
          <span>Press</span>
          <span>Careers</span>
          <span>Legal</span>
          <span>FAQ</span>
        </div>
      </div>
      <div style="flex-grow:1">
        <div class="title">About Us</div>
        <div class="list">
          <span>Contact</span>
          <span>Team</span>
          <span>Blog</span>
          <span>Features</span>
        </div>
      </div>
      <div style="flex-grow:1">
        <div class="title">Download Now</div>
        <div class="list">
          <span>
            <img
              src="../assets/icons/download-from-app-store.png"
              class="downloadLink"
            />
          </span>
          <span>
            <img
              src="../assets/icons/download-from-play-store.png"
              class="downloadLink"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="secondary">
      <div style="flex-grow:1" class="language">
        English
      </div>
      <div style="flex-grow:1" class="copyright">
        &copy; 2020 TravelBus
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{

  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.footer{
  padding:10vh 20vw;
  background:rgb(230, 230, 230);
  color:#000;
}
.footer .primary{
  text-align:left;
  display:flex;
  align-items:stretch;
}
.footer .secondary{
  display:flex;
  align-items:stretch;
  border-top:1px solid grey;
  margin-top:15vh;
  padding-top:5vh;
}
.footer .secondary .language{
  text-align:left;
  padding:0 5vw;
}
.footer .secondary .copyright{
  text-align:right;
  padding:0 5vw;
}

.logo{
  font-size:30px;
  font-weight:bold;
  color:teal;
}
.footer .primary div .title{
  font-weight:bold;
  margin-bottom:20px;
}
.footer .primary div div span{
  display:block;
  padding-bottom:5px;
}
.footer .primary div div span .downloadLink{
  width:7.5vw;
}
</style>
