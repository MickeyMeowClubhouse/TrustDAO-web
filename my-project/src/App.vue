<template>
  <div id="app">
    <div id="top-panel">
    <div id ="web-title">  TRUST DAO</div>
      <div id="guide">
        <router-link to="/" id="tab">Home</router-link>
        <router-link to="/About" id="tab">About</router-link>
      </div>
    </div>
<div id="content">
  <router-view/>
</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return { 
   
    };
  },
   methods: {
    
   }
};
</script>

<style>
@font-face {
   font-family: "Haettenschweiler";
  src: url('/assets/fonts/Haettenschweiler-Regular.ttf');
}
@font-face {
  font-family: "Regupix";
  src: url('/assets/fonts/REGUPIX_.ttf');
}
@font-face {
  font-family: "Bahnschrift";
  src: url('/assets/fonts/BAHNSCHRIFT.ttf');
}
#app {
  font-family: "Bahnschrift";

position: absolute;
background-color: black;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#top-panel {
  background-color: #ffc000;
  padding: 30px;
  text-align: right;
}
#web-title{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: left;
  float: left;
  font-size: 30px;
  display: inline;
}
#guide {
  background-color: #dbaa33;
  padding: 20px;
  text-align: right;
  display: inline;
}
#tab {
  font-family: 'Regupix';
  display: inline;
  padding: 30px;
}


</style>
