<template>
    <div class="card">
        <div class="card-header">
            Customer Grid...........
        </div>
        <div class="card-body">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="r in grd.rows" v-bind:key="r.CustomerId"> 
                        <td>{{r.FirstName}}</td>
                        <td>{{r.LastName}}</td>
                        <td>{{r.Address}}</td>
                        <td>{{r.City}}</td>
                        <td>{{r.Country}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card-footer">
            <button  class="btn btn-primary" v-on:click="click1($event)">Load Data</button>
        </div>
    </div>
        
</template>
<script>
import { testMe,cls1 } from "../code/test"
import { clsGrid } from "../code/clsGrid"

export default {
    name : "test"    
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
}

</script>