<template>
  <div class="FAQ">
    
   <li v-for="item in items" :key="item.Q">
         <div id="question">{{item.Q}}</div>
         <div id="answer" >{{item.A}}</div>
     </li>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      title:"FAQ",
      msg: "",
      items:[
        {
        Q:"1. What is TRUST DAO?",
        A:"Trust DAO is an asset allocation Decentralized Autonomous Organization (DAO) for governing tokenized portfolio allocations. It’s a pure crypto project which wraps with the concepts of DAO, NFT, Consensus, and Metaverse based on trust.",
      },
      {
        Q:"2. What is a DAO?",
        A:"DAO stands for \"Decentralized Autonomous Organization\", a smart contract system that functions through a governance structure embedded into the code of the system. These organizations consist of token holders who have the sole authority to enact changes. A DAO is decentralized because no single party can have control. It's autonomous in the sense that, once deployed, the organization governs itself through its built-in governance structure.", 
      },
         {
        Q:"3. How do I take part in this project?",
        A:"1. Join our events in Twitter to get white list, which allow you to mint during presale. \n2. Mint when project published republicly.", 
      },
         {
        Q:"4. What is mint?",
        A:"For TRUST DAO project, mint means connecting your wallet to our address and select an ideal avartar by paying minting fee.", 
      },
         {
        Q:"5. How do I get started with a Blockchain Project?",
        A:"In order to mint, you should download a digital wallet to connect with us. We recommend using MetaMask, which can be used on both desktop and mobile. \nPlease check up this video tutorial: https://youtu.be/kIxkErwPpo8", 
      },
         {
        Q:"6. How do I interact with other holders?",
        A:"Transfer your Hat into a same wallet address with the target, then you complete the interaction. Remember that you need to let the wallet owner to transfer your Hat back.", 
      },
      {
        Q:"7. How much is the mint fee?",
        A:"The mint price will be announced really soon, stay tuned!", 
      },
      {
        Q:"8. What is the swap fee?",
        A:"Transferring Hats via opensea.io will incur swap fee, you need to pay the swap fee to complete the action.", 
      },
      {
        Q:"9. What is Treasury?",
        A:"Treasury is a liquidity pool, 15% revenue of ido (Initial DEX offering) and a certain percentage of swap fee will be allocated to Treasury. \nThe DAOs manage of Treasury by proposing and voting.", 
      },
      {
        Q:"10. What is reshuffle?",
        A:"Reshuffle means a new round of interaction with typical NFT, new term of DAO members constituted after settlement.", 
      },
      
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#question{
  width: 60%;
    padding-left: 20%;
  padding-right: -20%;
   padding-top: 20px;
    font-size: 28px;
      color: white;
 
}
#answer{
  width: 60%;
    padding-left: 20%;
  padding-right: -20%;
    font-size: 18px;  
    color: white;  
    white-space: pre-wrap;
}
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
