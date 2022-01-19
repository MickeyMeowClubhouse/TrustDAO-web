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
        Q:"1. What is TRUST DAO NFT?",
        A:"Trust DAO NFT is a Play-to-DAO project based around NFTs that reconstruct individual rights and social constructs of Web 3.0. \n5000 Genesis Avatar will all be granted a 1:1 corresponding Free-to-claim NFT called “Trust”. By exchanging and transferring multiple “Trust” into a same wallet address, you are building trust with others and all interactions will be 100% on-chain recorded. When certain requirements are met, Trust DAO will be established, and a new era of Trust will begin.\nIt’s the first 100% on-chain Play-to-DAO project, a pure crypto project which wraps with the concepts of DAO, NFT, and Metaverse based on trust.",
      },
      {
        Q:"2. What is a DAO?",
        A:"DAO stands for \"Decentralized Autonomous Organization\", a smart contract system that functions through a governance structure embedded into the code of the system. These organizations consist of token holders who have the sole authority to enact changes. A DAO is decentralized because no single party can have control. It's autonomous in the sense that, once deployed, the organization governs itself through its built-in governance structure.", 
      },
         {
        Q:"3. How do I take part in this project?",
        A:"1. Join our events in Twitter/Discord to get OG/Whitelist role, which allow you to mint during presale. \n2. Join our Discord for the latest information and mint during public sale.", 
      },
         {
        Q:"4. What is mint?",
        A:"For the Trust DAO NFT project, mint means connecting your wallet to our address and paying certain minting fee for an Genesis avatar.", 
      },
         {
        Q:"5. How do I get started with a Blockchain Project?",
        A:"In order to mint, you should download a digital wallet to connect with us. We recommend using MetaMask, which can be used on both desktop and mobile. Please check up this video tutorial: https://youtu.be/kIxkErwPpo8", 
      },
         {
        Q:"6. How do I build “Trust” with other holders?",
        A:"When multiple “Trust” NFTs are in the same wallet address, the trust-building interaction will be recorded on-chain. This process can be done by transferring, purchasing or exchanging. \nThe interaction between two different “Trust” NFTs can only be recorded once only! Building trust with more trustees can help bring you into the Trust DAO! \nRemember that when exchanging and transferring, you need to remind other trustees to transfer your “Trust” NFT back. ", 
      },
      {
        Q:"7. How much is the mint fee?",
        A:"The mint price will be announced soon, stay tuned!", 
      },
      {
        Q:"8. Wen mint?",
        A:"Stealth launch!", 
      },
      {
        Q:"9. What is the transferring fee?",
        A:"Transferring Hats via opensea.io will incur fee, you need to pay the fee to complete the action.", 
      },
      {
        Q:"10. What is Trustsury?",
        A:"Trustsury is the vault of Trust DAO. 15% revenue of the public sale and a 50 percentage of royalties will be allocated to Trustsury. The DAO will manage Trustsury by proposing and voting via DAO tools.", 
      },
      {
        Q:"11. What is reshuffle?",
        A:"Reshuffle means a new round of interaction with typical NFT to form the future Trust DAO. More detailed will be released in our social media.", 
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
