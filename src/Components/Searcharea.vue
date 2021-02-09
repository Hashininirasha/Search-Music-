<template>
    <div class="form-group">
            <label for="inputEmail" class="col-lg-2 control-label">Search Music</label>
                    <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail" placeholder="Type here" @input="keypress">
                    </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data(){

        return{
                newset:[]

        }
        
    },
    methods:{
        keypress(event){
            var key = event.target.value;
            axios.get("https://api.mixcloud.com/search/?q="+key+"&amp;type=cloudcast")
                .then(response=>{
                    this.newset=response.data;
                })
                .catch(e=>{
                    this.error.push(e)
                })
        }
    }
    

}
</script>

<style scoped>

</style>