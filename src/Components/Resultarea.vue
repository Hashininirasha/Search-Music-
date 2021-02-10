<template>
<div>
    <h2>Results from ResultArea Component</h2>
     <div class="row carousel-row">
        <div class="col-xs-8 col-xs-offset-2 slide-row" slide-row>
            <div id="carousel-1" class="carousel slide slide-carousel" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="item active">
                        <img v-bind:src="res.album.images[0].url" alt="Image">
                    </div>
                      </div>
            </div>
            <div class="slide-content">
                <h4>Name</h4>
                <p>
                    Album
                </p>
            </div>
            <div class="slide-footer">
                <span class="pull-right buttons">
                    <button class="btn btn-sm btn-default"><i class="fa fa-fw fa-eye"></i> Show More</button>
</div>
</template>

<script>
export default {
    props:['reslist']
    
}
</script>

<style scoped>

</style>