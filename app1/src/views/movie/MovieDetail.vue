<template>
    <div  v-if="isShow">
        电影详情页
        {{$route.params.movieid}}
        {{detail.title}}
        <img :src="detail.images.small">    
    </div>
</template>

<script>
import Axios from "axios"
    export default {
        data(){
            return {
                detail:{},
                isShow:false
            }
        },
        created() {
            Axios.get("/moviedetail.json").then(result=>{
                console.log(result.data);
                this.detail = result.data;
            }).catch();
            this.isShow = true;
        },
        
    }
</script>

<style scoped>

</style>