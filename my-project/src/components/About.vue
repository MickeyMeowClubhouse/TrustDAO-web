<template>
  <div class="about">
    <div id="content">{{ msg }}</div>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'ABOUT US'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content{
  display:inline-block;
  text-align: center;
  font-size: 100px;
  width: 100%;
  height: 120px;
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  color: white;
}
</style>
