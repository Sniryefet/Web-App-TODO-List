
$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
  
});

//click on X to delete TODO
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });

    //stop the bubbling effect
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    // checks if "Enter" key was pressed
    if(event.which === 13){
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");

    
        $(this).val("");
    }
});

$(".fa-list").click(function(){
    $("input[type='text']").fadeToggle();
});