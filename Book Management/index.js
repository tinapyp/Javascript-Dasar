require("@snipkode/server");

ROUTE("GET /", function(){
    this.view("pages/landing_page")
});

ROUTE("GET /dashboard", function(){
    this.view("pages/dashboard")
});

ROUTE("GET /todo", function(){
    this.view("pages/todo")
});

HTTP("debug", {port: 8000});