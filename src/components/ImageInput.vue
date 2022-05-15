<template>

<div class="imageInput">
    <h2>Analizador de Animales</h2>

    <label>Selecciona una imagen</label>

    <div>
        <input type="file" @change="$store.dispatch('previewFile')" id="inputImagen" accept="image/jpeg, image/png, image/jpg"><br>
        <img src="" height="200" alt="Image preview..." id="imagenImg">
    </div>
   
    <!-- <div>
        <img src="" alt="" id="output">
        <input id="file-input" name="photo" type="file" accept="image/*" 
        onchange="var img = window.URL.createObjectURL(this.files[0]);
        document.getElementById('output').src = img;
        this.imagen = img;
        console.log(this.imagen);">
    </div> -->
    
    <router-link to="/results">
    <button class="uploadButton" @click="$store.commit('botonLocal')">
        <span class="uploadText">Upload Image</span>
        <span class="uploadIcon"><img src="../assets/cloud-upload.svg" alt="upload-icon" width="25" height="25"></span>
    </button>
    </router-link>


    <label>Introduza el URL de la Imagen</label>
    <input type="url" id="linkImageUpload" v-model="$store.state.photoLink" class="linkImageUpload">
    <router-link to="/results">
    <button class="cloudUploadButton" @click="$store.commit('botonLink')">
        <span class="uploadText">Upload Link</span>
        <span class="uploadIcon"><img src="../assets/cloud-upload.svg" alt="upload-icon" width="25" height="25"></span>
    </button>
    </router-link>

    


</div>
    
</template>

<script>
//Install avios
//npm install --save axios
import axios from "axios";

export default { name: 'ImageInput',
data(){
    return{
        selectedFile: null
    }
},

methods:{
    onFileSelected(event){
        this.selectedFile = event.target.files[0]
        console.log(event)
    },
    onUpload(){
        //Sends FormData using Axios
        const fd = new FormData();
        //add new data to fd
        fd.append("image",this.selectedFile,this.selectedFile.name)
        url=""
        axios.post(url,fd)
            .then(res =>{
                console.log(res)
            })
    },
    previewFile() {
        const preview = document.getElementById("output");
        const file = document.getElementById("inputImagen").files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convierte la imagen a una cadena en base64
            preview.src = reader.result;
        }, false);
        console.log("e")
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
},


}
</script>