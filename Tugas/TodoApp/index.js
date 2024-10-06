require("@snipkode/server");

ROUTE("GET /", function(){
    this.view("index")
});

HTTP("debug");