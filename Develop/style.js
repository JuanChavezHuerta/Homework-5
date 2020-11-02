//First i want to ping the server so i can get the info of "current day". 
//Then i want to append the data to the #currentDay as text (jSON)

//doc.ready function is so that nothing get executed until the page is finished loading.
$(document).ready(function(){

    var timeOfDay = parseInt(moment().format("HH"));
    
    //variable declarations
    
    //setting the text inside .description to what the user types in the text field
    //query selector

    $('.btn').click(function(){

        var text9 = $('#input9').val();
        var text10 = $('#input10').val();
        var text11 = $('#input11').val();
        var text12 = $('#input12').val();
        var text1 = $('#input1').val();
        var text2 = $('#input2').val();
        var text3 = $('#input3').val();
        var text4 = $('#input4').val();
        var text5 = $('#input5').val();
        

        localStorage.setItem( 'text9', text9);
        localStorage.setItem( 'text10', text10);
        localStorage.setItem( 'text11', text11);
        localStorage.setItem( 'text12', text12);
        localStorage.setItem( 'text1', text1);
        localStorage.setItem( 'text2', text2);
        localStorage.setItem( 'text3', text3);
        localStorage.setItem( 'text4', text4);
        localStorage.setItem( 'text5', text5);

       

       

    });

    $('#input9').val( localStorage.getItem('text9'));
    $('#input10').val( localStorage.getItem('text10'));
    $('#input11').val( localStorage.getItem('text11'));
    $('#input12').val( localStorage.getItem('text12'));
    $('#input1').val( localStorage.getItem('text1'));
    $('#input2').val( localStorage.getItem('text2'));
    $('#input3').val( localStorage.getItem('text3'));
    $('#input4').val( localStorage.getItem('text4'));
    $('#input5').val( localStorage.getItem('text5'));

   
    //setting the text box to the appropriate css style with a forloop, depending if its the current, past, or present time.
    function timeColor() {
        $("textarea").each(function () {
            var hour = parseInt($(this).attr("description"));
            if (hour === timeOfDay) {
                $(this).addClass("present");
            } else if (hour < timeOfDay) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            }
        });
    }
    
    //setting the current date inside of the id-currentDay with methods in the moment.js library
    $("#currentDay").text(moment().format('MMMM DD YYYY'));
    timeColor();
   });
   
   
//Second i want to make the cells in the planner visible. Set to the default color of grey. 
