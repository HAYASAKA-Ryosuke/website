$(function(){
        window.onload = function(){
            $("#pages").hide();
            $("#pages").load('top.html');
            $("#pages").fadeIn("slow");
            $("body").css("background-image",'url("{{media_url('img/topbackground.png')}}")');
        }
        $("#myTab1 li a").click(function(){
            var value = $(this).attr("href");
            if(value=="#top" || value==""){
                $("#pages").hide();
                $("#pages").load('top.html');
                $("#pages").fadeIn("slow");
                $("body").css("background-image",'url("{{media_url('img/topbackground.png')}}")');
    		$('html, body').animate({scrollTop: 0}, 0);
            }
            else if(value=="#about"){
                $("#pages").hide();
                $("#pages").load('about.html');
                $("#pages").fadeIn("slow");
                $("body").css("background-image",'url("{{media_url('img/aboutbackground.png')}}")');
    		$('html, body').animate({scrollTop: 0}, 0);
            }
            else if(value=="#software"){
                $("#pages").hide();
                $("#pages").load('software.html');
                $("#pages").fadeIn("slow");
                $("body").css("background-image",'url("{{media_url('img/softwarebackground.png')}}")');
    		$('html, body').animate({scrollTop: 0}, 0);
            }
            else if(value=="#books"){
                $("#pages").hide();
                $("#pages").load('books.html');
                $("#pages").fadeIn("slow");
                $("body").css("background-image",'url("{{media_url('img/booksbackground.png')}}")');
    		$('html, body').animate({scrollTop: 0}, 0);
            }
            });
        });
