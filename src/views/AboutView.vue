<template>
  <div class="about">
    <Header/>

    
    
        <div style='text-align:center'><img src="../assets/logo3.png" style="float:right" width="450">
            <p class="TituloAbout">About Us</p >
            <p class="TituloWeb">AI'm in Danger?</p>
            <p class="TituloObjetivo">OBJETIVO</p>
            <p class="Parrafo1">Es un proyecto que intenta utilizar la tecnología de Microsoft Azure (IA), que pueda ayudar a la biología marina, y además de poder reconocer de una manera más sencilla y eficaz a un animal marítimo en peligro de extinción o que no este en peligro.</p>
            <p class="Parrafo2">También brindara información general a la persona sobre del animal subido y deseado</p>
        </div>
        <div style='text-align:center'><img src="../assets/ImagenAbout1.png" style="float:left" width="300"><img src="../assets/ImagenAbout1.png" style="float:right" width="300">
          <p class="TituloObjetivo2">MISION</p>
          <p class="Parrafo3">Ayudar a la preservación  de las especies marinas. </p>
          <p class="Parrafo4">“Océanos sanos y un mundo libre de amenazas e impactos humanos negativos para los Animales Maritimos”</p>
        </div>
        <div style='text-align:center'>
          <p class="TituloObjetivo3">INTEGRANTES</p>
          <p class="Parrafo5">Hector Gerardo Bravo (Líder)</p>
          <p class="Parrafo6">Maria Oralia Hernandez Salinas</p>
          <p class="Parrafo7">Luis Eduardo Hernandez </p>
          <p class="Parrafo8">Santiago Quintana</p>
          <p class="Parrafo9">Erick Enrique Romero Zuñiga</p>
        </div>
    <Footer/>
  </div>
</template>


<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default {
  name: 'About',
  components: {
    Header,
    Footer,
}
}
</script>
<style> 
.about{
  background-color: #FAFFFD;
}
.TituloWeb{
  font-size: 40px;
  font-weight: 700;
  color: #FA824C;
}
.TituloAbout{
  font-size: 60px;
  font-weight: 800;
  color: #FA824C;
  padding-top: 0px;
  padding-right: 450px;
  padding-bottom: 0px;
  padding-left: 0px;
    
}
.TituloObjetivo{
  font-size: 50px;
  font-weight: 800;
  color:black;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 0px;
  padding-right: 450px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.TituloObjetivo2{
  font-size: 50px;
  font-weight: 800;
  color:black;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 0px;
  padding-right: 450px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.TituloObjetivo3{
  font-size: 50px;
  font-weight: 800;
  color:black;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 200px;
}
.Parrafo1{
  font-size: 25px;
  font-weight: 800;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  color:black;
}
.Parrafo2{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 450px;
    padding-bottom: 0px;
    padding-left: 0px;
  color:black;
  
}
.Parrafo3{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 450px;
    padding-bottom: 0px;
    padding-left: 0px;
  color:black;
}
.Parrafo4{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 450px;
    padding-bottom: 0px;
    padding-left: 0px;
  color:black;
}
.Parrafo5{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 200px;
  color:black;
}.Parrafo6{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 200px;
  color:black;
}
.Parrafo7{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 200px;
  color:black;
}.Parrafo8{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 200px;
  color:black;
}
.Parrafo9{
  font-size: 25px;
  font-weight: 800;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 200px;
  color:black;
}
</style>

