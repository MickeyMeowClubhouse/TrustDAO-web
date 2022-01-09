<template>
  <div class="team">
  
    <div id="title">{{title}}</div>
    <div id="content">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      title:"TEAM",
      msg: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title{
  display: inline-block;
  text-align: center;
  font-size: 28px;
  width: 100%;
  padding-top: 20%;
  height: 120px;
  margin: auto;
  color: white;
}
#content {
  display: inline-block;
  text-align: center;
  font-size: 28px;
  width: 60%;
  height: 120px;
  padding-left: 20%;
  padding-right: -20%;
  margin: auto;

  color: white;
}
</style>
