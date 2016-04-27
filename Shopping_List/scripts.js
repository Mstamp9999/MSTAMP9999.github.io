$(
    function(){
        
    $("#btn2").click(function(){
        var item = $("#Items").val();
        $("ul").append("<li>"+ item +"</li>");
    });
  
    $("#btn1").click(function(){
        var item = $("#Items").val();
        //$(item).remove();
        var list_items = $("li");
        
        
        for (var i = 0; i < list_items.length; i++)
            {
                console.log("list items at index " + i + " = " + list_items[i].textContent);
                
                if (list_items[i].textContent == item){
                    console.log("found a match");
                    list_items[i].remove();
                }
            }
    });
});
