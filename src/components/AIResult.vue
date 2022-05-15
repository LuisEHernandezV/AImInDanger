<template>
    <div class="AIResults" id="AIResults">
        <div class="contenedorImagen" id="contenedorImagen"> 
            <img src="" alt="" id="output">
        </div>
        <div class="contenedorInfo" id="contenedorInfo"> </div>
    </div>
</template>

<script>
export default { name: 'AIResult',
mounted(){    
    this.$store.dispatch('AIResults');
}

}
</script>