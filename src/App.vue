<script>
import './assets/main.css'
export default {

    methods: {
        scrollToTop() {
            document.querySelector("#app").scrollTo(0, 0);
        }
    },
    data() {
        return {
            naved: false,
        }
    },
    components: {},
}
</script>

<template>
    <header>
        <div class="constraint">
    
            <RouterLink to="/">
              
            </RouterLink>
           
        </div>
    
    </header>
    <div class="lightbox-base" :class="{ lightbox: naved }" @click="naved = false"> </div>
    <RouterView />
    <footer>
    
    </footer>
</template>

<style lang="scss">
@media (max-width: 1024px) {
   
}
</style>
