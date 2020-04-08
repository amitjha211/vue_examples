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
                    <a type="button" class="btn btn-sm btn-outline-primary" v-on:click="page_buttons_shift_previous()"><i class="fa fa-angle-double-left"></i></a>
                    <a type="button" v-for="button in grd.pageButtons"  v-bind:class="['btn','btn-sm',{ 'btn-outline-primary' : button.num != grd.currentPage , 'btn-primary' : button.num == grd.currentPage  }]"  v-bind:key="button.num" v-text="button.num" v-on:click="grd.gotoPage(button.num)"></a>
                    <a type="button" class="btn btn-sm btn-outline-primary" v-on:click="page_buttons_shift_next()"><i class="fa fa-angle-double-right"></i></a>
                </div>

                &nbsp;&nbsp;<label>Page : <span class="badge badge-primary" v-text="grd.currentPage"></span> of  <span class="badge badge-info" v-text="grd.getPageCount()"></span> | Records : <span class="badge badge-info" v-text="grd.count"></span>  </label> 
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
        console.log(this.grd);
        return { }
    }
    , methods :{
        setPageSize(iSize){
            this.grd.pageSize = iSize;
            this.grd.gotoPage(1);;
        }
        ,page_buttons_shift_previous()
        {
            if(this.grd.pageButtons[0].num <= 1)
            {
                alert("Sorry ! You are on the first page !");
                return ;
            } 

            for(let i=0;i < this.grd.pageButtons.length;i++)
            {
                this.grd.pageButtons[i].num -= 1;
            }

            this.grd.gotoPage(this.pageButtons[0].num);


        }
        ,page_buttons_shift_next()
        {
            if(this.grd.pageButtons[this.grd.pageButtons.length -1 ].num >= this.grd.getPageCount())
            {
                alert("Sorry ! You are on the last page, you can't move further");
                return;
            }
             

            for(let i=0;i < this.grd.pageButtons.length;i++)
            {
                this.grd.pageButtons[i].num += 1;
            }
            this.grd.gotoPage(this.grd.pageButtons[0].num);
        }
    }
    , computed : {
    }
}
</script>