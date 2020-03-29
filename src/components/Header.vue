<template>
  <div class="header">
      <div class="logo-container" style="flex-grow:10">
        <div class="logo"><a href="/">TravelBus</a></div>
      </div>

      <div class="navigation" style="flex-grow:1">
        <span><a href="/why-travelbus">What's different?</a></span>
        <span><a href="/coming-soon">Help center</a></span>
      </div>

      <div class="download" style="flex-grow:1">
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
.header{
  padding:2.5vh 5vw;
  background:rgb(230,230,230);
  color:#000;
  display:flex;
  align-items:stretch;
}
.header .logo-container{
  text-align:left;
}

.header .navigation{
  text-align:left;
}
.header .navigation span{
  margin:0 .75vw;
  cursor:pointer;
}
.header .download .downloadLink{
  padding:0 .75vw;
  width:6vw;
}

.logo{
  font-size:30px;
  font-weight:bold;
  color:teal;
}
</style>
