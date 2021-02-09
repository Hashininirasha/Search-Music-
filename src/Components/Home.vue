<template>
<div class="container">
    <div class="raw">
            <form class="form-horizontal">
                <fieldset>
                <legend>Music App</legend>
                <app-search></app-search>
                    
            </fieldset>
            </form>
    </div>

    <div class="row">

        <div class="col-md-12">
            <app-result></app-result>
            {{results}}
        </div>
    </div>
</div>    
</template>

<script>


    import SearchArea from './Searcharea.vue'
    import ResultArea from './Resultarea.vue'

    export default{

        data(){
            return{
                results:[]
            }
        },
        components:{
            'app-search':SearchArea,
            'app-result':ResultArea,
        }
    }

    

</script>

<style scoped>

</style>