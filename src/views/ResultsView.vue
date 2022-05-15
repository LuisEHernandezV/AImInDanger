<template>
  <div class="resultsPage">
    <Header/>
    
    <AIResult/>

    <Footer/>
  </div>
</template>


<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import AIResult from "@/components/AIResult.vue"

export default {
  name: 'Results',
  components: {
    Header,
    Footer,
    AIResult
}
}
</script>

<style>

.AIResults{
    display: flex;
    flex-wrap: wrap;
    height: min-content;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

.AIResults .contenedorImagen{
  display: flex;
  width: 500px;
  height: min-content;
}

.AIResults .contenedorImagen .display_image{
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 400px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

  }

  .contenedorInfo{
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }´

  .display_Info{
    display:grid;
    grid-template-columns: max-content max-content;
  }

.resultNegativo{
  display: flex;
  justify-items: flex-start;
  font-weight: 700;
  color: brown;
}

.resultPositivo{
  display: flex;
  justify-items: flex-start;
  font-weight: 700;
  color: rgb(77, 165, 42);
}

.contenedorInfo p{
  text-align: left;
}



/* Responsive Design */
  @media screen and (max-width:800px){
    .contenedorInfo{
      padding-top: 15px;
    }

    p + p{
      margin-top: 0em;
    }
  }

</style>


