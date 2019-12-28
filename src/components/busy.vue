<template>
<div class="row" v-show="grd.busy">
    <div class="col-md-12 text-center" >
        <img src="https://amitjha211.github.io/cdn_global/global/admin/css/GIF/ajax-loader.gif"  />
    </div>
</div>
</template>
<script>
import { clsGrid } from '../code/clsGrid'
export default {
    name : "busy"
    ,props : {
        grd : clsGrid
    }
}
</script>