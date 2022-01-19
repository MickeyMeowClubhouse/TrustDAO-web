<template>
  <div class="about">
    
    <div id="title">{{title}}</div>
    <div class="content">
    <p>{{ msg1 }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title:"ABOUT ",
      msg1: "Trust DAO NFT is a Play-to-DAO project based around NFTs that reconstruct individual rights and social constructs of Web 3.0.",
      msg2: "5000 Genesis Avatar will all be granted a 1:1 corresponding Free-to-claim NFT called “Trust”. By exchanging and transferring multiple “Trust” into a same wallet address, you are building trust with others and all interactions will be 100% on-chain recorded. When certain requirements are met, Trust DAO will be established, and a new era of Trust will begin.",
      msg3: "It’s the first 100% on-chain Play-to-DAO project, a pure crypto project which wraps with the concepts of DAO, NFT, and Metaverse based on trust.",
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
  padding-top: 5%;
  height: 120px;
  margin: auto;
  color: white;
}
.content {
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
