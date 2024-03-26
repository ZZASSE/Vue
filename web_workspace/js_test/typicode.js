//typicode.js


testAjax();
function testAjax(){
    $.ajax({        
        url:"https://jsonplaceholder.typicode.com/posts/",
        dataType:"json",
        success: function(data){
            console.log(data);
            $.each(data, function(idx, item){
                console.log(item);
            });
        },
        error:function(){
            console.log("통신에러");
        }
    })
}
