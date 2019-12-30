<template>
    <div class="card">
        <div class="card-header">
            Grid With paging designed in vuejs
        </div>
        <div class="card-body" style="min-height:400px;">
            <pager v-bind:grd="grd" />
            
            <table class="table table-bordered table-hover" style="margin-top:10px">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>                        
                        <th>Country</th>   
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody v-show="grd.busy==false">
                    <tr v-for="r in grd.rows" v-bind:key="r.CustomerId"> 
                        <td><i class="fa fa-user"></i>&nbsp;{{r.FirstName}}</td>
                        <td>{{r.LastName}}</td>
                        <td>{{r.Country}}</td>
                        <td><a  v-bind:href="'tel:' + r.Phone"><i class="fa fa-mobile"></i>&nbsp;<span v-text="r.Phone"></span></a></td>
                        <td> <a  v-bind:href="'mailto:' + r.email"><i class="fa fa-envelope"></i>&nbsp;<span v-text="r.Email"></span></a></td>
                    </tr>
                </tbody>
            </table>
            <busy v-bind:grd="grd" /> -->
            
        </div>
        <div class="card-footer">
            <pager v-bind:grd="grd" />
        </div>
    </div>
        
</template>
<script>
import { testMe,cls1 } from "../code/test"
import { clsGrid } from "../code/clsGrid"
import busy  from "./busy"
import pager from './pager'

export default {
    name : "test"    
    , components : { busy,pager }
    , data() {
        var _grd = new clsGrid();
        _grd.view = "customers";

        return {
            grd : _grd
        }
    }
    ,methods : {
        click1 : function(e){
            this.grd.load();
        }
    }
    ,mounted : function(){
        this.grd.count=59;
        this.grd.load();
    }
}

</script>