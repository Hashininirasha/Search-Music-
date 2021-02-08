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
            Results
        </div>
    </div>
</div>    
</template>

<script>


    import SearchArea from './Searcharea.vue'

    export default{
        components:{
            'app-search':SearchArea
        }
    }

    

</script>

<style scoped>

</style>