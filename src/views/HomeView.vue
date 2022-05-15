<template>
  <div class="home">
    <Header/>
    <ImageInput/>
    <!-- <Bot/> -->
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import ImageInput from "../components/ImageInput.vue"
import Bot from "../components/Bot.vue"


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header,
    Footer,
    ImageInput,
    Bot,

  }
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700');

  *{
    font-family: Poppins;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .home h2{
    font-size:larger;
  }

  

  header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: #00bbf9;
    color: white;
    font-weight: 500;
  }

  header .Logo-Marca{
     display: flex;
     align-items: center;
     margin-left: 10px;
  }

  nav {
  padding: 30px;
}

  nav a {
    font-weight: bold;
    color:  white;
  }

  nav a.router-link-exact-active {
    color: #2c3e50;
  }

  footer{
    display: flex;
    justify-content:space-around;
    background-color:#03045e;
    height: px;
    color: white;
    padding: 10px 10px 10px 10px;
  }

  footer p{
    font-size: .8rem;
  }

  footer ul{
    list-style-type: none;
  }

  footer a{
    text-decoration: none; 
    color: white;
    font-size: .8rem;
  }
  
  .home, .about, .resultsPage{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .home .mensajeInicial{
    width: 570px;
    padding-bottom: 20px;
  }

  .mensajeInicial p + p{
    margin-top: 1.5em;
  }

  .letritas{
    font-size:x-small;
    color: #2c3e50;
  }

  .home img {
    text-indent: -10000px
  }

  .home .imageInput{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .home .imageInput input{
    color:none;
    margin-left: auto;
    margin-right: auto;
  }

  .home .imageInput label{
    font-weight: 700;
  }

  .home .imageInput .linkImageUpload{
    width: 350px;
  }

  .home .imageInput .uploadButton{
    display: inline-flex;
    text-align: center;
    background-color: #023e8a;
    padding: 0;
    border: none;
    outline: none;
    overflow: hidden;
    font-family: "Quicksand",sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 155px;
    border-radius: .35rem;
    margin-left: auto;
    margin-right: auto;
    gap: 5px;
    padding: 7px;
  }

  .home .imageInput .cloudUploadButton{
    display: inline-flex;
    text-align: center;
    background-color: #023e8a;
    padding: 0;
    border: none;
    outline: none;
    overflow: hidden;
    font-family: "Quicksand",sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 135px;
    border-radius: .35rem;
    margin-left: auto;
    margin-right: auto;
    gap: 3px;
    padding: 7px;
  }

  .home .imageInput button:hover{
    background-color: #41b883;
  }

  .uploadText, .uploadIcon{
    display: inline-flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }

  .bot{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  .bot .telegram{
    display: flex;
    flex-direction: column;
    
  }

  /* Responsive Design */
  @media screen and (max-width:700px){
    .home .mensajeInicial{
      width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    .mensajeInicial p + p{
      margin-top: 0.5em;
    }
  }




</style>
