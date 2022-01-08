<template>
  <div id="background-avatar">
    
    <div class="hello">
      <div id="background-avatar">
     
      <div class="inner-cont">
        <img id="avatar" src="@/avatar/1.png" alt="" />
        <img id="avatar" src="@/avatar/1.png" alt="" />
        <img id="avatar" src="@/avatar/1.png" alt="" />
        
      </div>
            <div id="overlay"/>
    </div>

      <div id="content">
        <div>{{ msg }}</div>
        <img id="icon-small" src="@/images/discord.png" alt="" />
        <img id="icon" src="@/images/medium-square-fill.png" alt="" />
        <img id="icon" src="@/images/twitter-square-fill.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "COMMING SOON",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes animatedBackground {
  from {
    left: 0px;
  }
  to {
    left: -1500px;
  }
 
}
#background-avatar {


  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;

}

.inner-cont {
  position:absolute;
  width: 4510px;
  position: relative;
  animation: animatedBackground 15s linear infinite;

}
#avatar {
  width: 1500px;

}
#hello{
  width: 100%;
  height:1024px;
}
#content {
  display: inline-block;
  text-align: center;
  font-size: 100px;

  height: 200px;
  position: absolute;
  top: 400px;
  right: 0;

  left: 0;
  margin: auto;
  color: white;
}
#icon {
  width: 100px;
  height: 100px;
  display: inline;
}
#icon-small {
  width: 90px;
  height: 90px;
  display: inline;
}
#overlay{

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
position:absolute;
}
</style>
