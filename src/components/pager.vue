<template>
    <div class="row">
        <div class="col-md-12">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <div class="btn-group " role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-outline-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Page Size : {{grd.pageSize}}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="javascript:;" v-for="i in [5,10,20,30,40,50]" v-bind:key="i" v-on:click="setPageSize(i)">{{i}} </a>
                    </div>
                </div>

                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" v-for="button in pageButtons"  v-bind:class="['btn','btn-sm',{ 'btn-outline-primary' : button.num != grd.currentPage , 'btn-primary' : button.num == grd.currentPage  }]"  v-bind:key="button.num" v-text="button.num" v-on:click="grd.gotoPage(button.num)"></button>
                </div>

                &nbsp;&nbsp;<label>Page : <span class="badge badge-primary" v-text="grd.currentPage"></span> of  <span class="badge badge-info" v-text="grd.getPageCount()"></span> | Records : <span class="badge badge-info" v-text="grd.count"></span>  </label> 

                <!--
                
                -->
            </div>            
        </div>
    </div>
</template>

<script>

import { clsGrid } from '../code/clsGrid';

export default {
    name  : 'pager'
    ,props :{
        grd : clsGrid   
    }
    ,data(){
        return {
            pageButtons : [
                 { num : 1 }
                ,{ num : 2 }
                ,{ num : 3 }
                ,{ num : 4 }
            ]
        }
    }
    , methods :{
        setPageSize(iSize){
            this.grd.pageSize = iSize;
            this.grd.gotoPage(1);;
        }
    }
    , computed : {
    }
}
</script>