const sUrl = "https://express2.amitjha211.repl.co/getData?table=[table]&limit=[limit]&offset=[offset]";

function post_for_json(sView
    ,offset
    ,limit
    ,fncallBack)
{

    let _url = sUrl;
    
    _url = _url.replace("[table]",sView);
    _url = _url.replace("[limit]",limit);
    _url = _url.replace("[offset]",offset);
    console.log(_url);

    let request  = $.ajax({
        url: _url,
        contentType: false,
        data: {},
        processData : false,
        type: 'POST'
    });

    request.done(function(data){
        fncallBack(data,"success");
    });

    request.fail(function(error){
        fncallBack(null,"error");
    });
}

export class clsGrid
{

    constructor()
    {

        this.url = "";
        this.view = ""

        this.currentPage = 2;
        this.count = 100;
        this.pageSize = 10;
        
        this.rows = [];
        this.busy = false;
        
    }

    load(){
        
        self  = this;
        this.busy = true;
        let iOffset = ((this.currentPage - 1) * this.pageSize);

        console.log("offset : " +iOffset);

        post_for_json(this.view,iOffset,this.pageSize,function(result,status ){
            if(status == "success") self.rows = result.data;
            self.busy=false;
        });
    }

    gotoPage(iPage)
    {
        this.currentPage = iPage
        this.load();
    }
}