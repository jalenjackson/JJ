
function project(id, projectAnimation, bodyColorAnimation, clickerText1, clickerText2){
   if($(window).width() > 800){
       upperWidth(id, projectAnimation, bodyColorAnimation, clickerText1, clickerText2);
   } else {
       lowerWidth(id)
   }
}

if($(window).width() < 800){
    $(".clicker h1").css({
        opacity: "1",
        fontSize: "45px",
        marginTop: "2vh"
    });
    $(".clicker p").css({
        opacity: "1",
        fontSize: "16px",
        marginTop: "40px"
    });
}



function lowerWidth(id){
    $('html, body').animate({scrollTop: '0px'}, 300);
    $(".clicker p").css({
        opacity: "0"
    });


    if($(".project").hasClass(".project" + id)){
    }
    else {
        $(".project").addClass("hide-elem");

        setTimeout(function(){
            $(".project" + id).removeClass("hide-elem").css({
                position: "absolute",
                top: "-10vh",
                right: 0,
                bottom: 0,
                left: 0,
                margin: "auto",
                width: "100%",
                height: "100vh"
            });

            $(".clicker h1").css({
                opacity:"1",
                fontSize: "60px",
                marginTop: "30vh"
            });

            $(".webpage").css({
                display: "block"
            });
            if($(".project").hasClass(".project" + id)){

            } else {
                $(".project").css({
                    display: "none"
                });
                $(".project" + id).css({
                    display: "block"
                })
            }

            $(".navbar h1").css({
                opacity: "0"
            });
            $(".exit").css({
                opacity:"1"
            });
            $(".clicker").css({
                pointerEvents: "none"
            });

        },1000);

    }
}

function upperWidth(id, projectAnimation, bodyColorAnimation, clickerText1, clickerText2){
    $(".project" + id).addClass(projectAnimation);
    $(".mouse-info").addClass("hide-elem");
    if($(".project").hasClass(".project" + id)){
    }
    else {
        $(".project").addClass("hide-elem");
        $(".project" + id).removeClass("hide-elem");
    }
    $(".circle5").addClass("run-circle-animation");
    $("body").addClass(bodyColorAnimation);
    $(".clicker h1").addClass("show-clicker-h1");
    $(".clicker h1").html(clickerText1);



    setTimeout(function(){
        $(".clicker h1").css({
            transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
            WebkitTransition: "-webkit-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            MozTransition:"-moz-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            MsTransition:"-ms-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            OTransition:"-o-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            transform: "translateY(0px)",
            opacity: "1"
        });
    },1200);

    setTimeout(function(){
        $(".clicker h1").css({
            transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
            WebkitTransition: "-webkit-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            MozTransition:"-moz-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            MsTransition:"-ms-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            OTransition:"-o-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            transform: "translateY(30px)",
            opacity: "0"
        });

    },2200);


    setTimeout(function(){
        $(".clicker h1").html(clickerText2);

        $(".project" + id).removeClass(projectAnimation).css({
            position: "absolute",
            top: "-5vh",
            right: 0,
            bottom: 0,
            left: 0,
            margin: "auto",
            width: "100%",
            height: "100vh",
        });


    },2700);


    setTimeout(function(){
        $(".clicker h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            fontSize: "150px",
            transform: "translateY(50px)",
            opacity: "1"
        });
    },3300);

    setTimeout(function(){
        $(".about").addClass("changed1");
        $(".contact").addClass("changed2");
        $(".github").addClass("changed3");
    },3600);

    setTimeout(function(){
        $(".navbar h1").css({
            transform: "translateX(-50px)",
            opacity: "0"
        });

    },3900);

    setTimeout(function(){
        $(".exit").css({
            opacity: "1",
            transform: "rotate(360deg) scale(1)"
        });

        if($(".project").hasClass(".project" + id)){

        } else {
            $(".project").css({
                display: "none"
            });
            $(".project" + id).css({
                display: "block"
            })
        }

        $(".project-margins").css({
            marginTop: "30vh"
        });
        $(".clicker").css({
            pointerEvents:"none"
        });
        $("body").css({
            overflow: "auto",
            overflowX: "hidden"
        });

    },4200);

    setTimeout(function(){
        $(".webpage").css({
            display: "block"
        })
    },4300)
}



function exitProject(){

    if($(window).width() > 800){
        exitProjectUpperWidth();
    } else {
        exitProjectLowerWidth();
    }

}


function exitProjectLowerWidth(){

    $(".project").addClass("hide-elem");
    $(".project").removeClass("hide-elem").css({
        transform: "translate3D(0,0,0)",
        opacity: "1",
        width: "100%",
        left: "0",
        top: "0",
        height: "230px",
        display: "inline-block",
        position: "relative",
        marginLeft: "-4px",
        marginTop: "-6px"
    });
    $(".clicker").css({
        pointerEvents: "auto"
    });
    $(".clicker h1").css({
        transform: "translateY(0px)",
        fontSize: "50px",
        opacity: '0'
    });
    $(".project-margins").css({
        marginTop: 0
    });

    $(".exit").css({
        opacity: "0",
        transform: "scale(0.5)"
    });

    $(".navbar h1").css({
        transform: "translateX(0px)",
        opacity: "1"
    });

    $(".mouse-info").removeClass("hide-elem" +
        "").css({
        display: "block",
        opacity: "1"
    });

    $(".webpage").css({
        display: "none"
    });
    $(".clicker h1").css({
        opacity: "1",
        fontSize: "45px",
        marginTop: "5vh"
    });
    $(".clicker p").css({
        opacity: "1",
        fontSize: "16px",
        marginTop: "40px"
    });
    var lastClass = $('body').attr('class').split(' ').pop();
    $("body").removeClass(lastClass).css({
        background: "white"
    })
}

function exitProjectUpperWidth(){
    $(".project").addClass("hide-elem");
    $(".circle5").removeClass("run-circle-animation");
    $(".project").removeClass("hide-elem").css({
        transform: "translate3D(0,0,0)",
        opacity: "1",
        width: "35%",
        left: "0",
        top: "0",
        height: "230px",
        display: "inline-block",
        position: "relative",
        marginLeft: "-4px",
        marginTop: "-6px"
    });
    $(".about").removeClass("changed1");
    $(".contact").removeClass("changed2");
    $(".github").removeClass("changed3");

    $(".clicker").css({
        pointerEvents: "auto"
    });
    $(".clicker h1").css({
        transform: "translateY(30px)",
        fontSize: "50px",
        opacity: '0'
    });
    $(".project-margins").css({
        marginTop: 0
    });

    $(".exit").css({
        opacity: "0",
        transform: "scale(0.5)"
    });

    $(".navbar h1").css({
        transform: "translateX(0px)",
        opacity: "1"
    });

    $(".mouse-info").removeClass("hide-elem" +
        "").css({
        display: "block",
        opacity: "1"
    });

    $(".webpage").css({
        display: "none"
    });
    var lastClass = $('body').attr('class').split(' ').pop();
    $("body").removeClass(lastClass).css({
        background: "white"
    })
}


$(document).bind('mousemove', function(e){
    $('.mouse-info').css({
        left:  e.pageX ,
        top:   e.pageY - 45
    });
});


$(".project1").hover(function(){
    $("body").css({background: "rgba(124,160,223,0.3"});
   $(".mouse-info h1").html("StoryMi - Revolutionizing Story Telling");
   $(".mouse-info").css({
       opacity: "1",
       width: "360px",
       background: "rgb(49,52,98)"

   });
    setTimeout(function(){
        $(".mouse-info h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            opacity: "1",
        });

    },400);
}, function(){
    $(".mouse-info h1").css({
        transition: "none",
        opacity: "0"
    });

});
$(".project2").hover(function(){
    $("body").css({background: "rgba(216,41,46,0.3)"});

    $(".mouse-info").css({
        opacity: "1",
        width: "440px",
        background: "#cd0000"
    });
    $(".mouse-info h1").html("Modern Fitness - A community dedicated to fitness");

    setTimeout(function(){
        $(".mouse-info h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            opacity: "1"
        });
    },400);
}, function(){
    $(".mouse-info h1").css({
        transition: "none",
        opacity: "0"
    });
});




$(".project3").hover(function(){
    $("body").css({background: "rgba(226,207,82,0.3)"});

    $(".mouse-info").css({
        opacity: "1",
        width: "240px",
        background: "#EDB91F"
    });
    $(".mouse-info h1").html("Chalkboard For Education");
    setTimeout(function(){
        $(".mouse-info h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            opacity: "1"
        });
    },400);
}, function(){
    $(".mouse-info h1").css({
        transition: "none",
        opacity: "0"
    });
});

$(".project4").hover(function(){
    $("body").css({background: "rgba(216,41,46,0.3)"});

    $(".mouse-info").css({
        opacity: "1",
        width: "350px",
        background: "#cd0000"
    });
    $(".mouse-info h1").html("Vanmar Lending - Buy your first house")
    setTimeout(function(){
        $(".mouse-info h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            opacity: "1"
        });
    },400);

}, function(){
    $(".mouse-info h1").css({
        transition: "none",
        opacity: "0"
    });
});
$(".project5").hover(function(){
    $("body").css({background: "rgba(226,207,82,0.3)"});

    $(".mouse-info").css({
        opacity: "1",
        width: "240px",
        background: "#EDB91F"
    });
    $(".mouse-info h1").html("GameCam - Augmented Reality")
    setTimeout(function(){
        $(".mouse-info h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            opacity: "1"
        });
    },400);
}, function(){
    $(".mouse-info h1").css({
        transition: "none",
        opacity: "0"
    });
});
$(".project6").hover(function(){
    $("body").css({background: "rgba(124,160,223,0.3"});
    $(".mouse-info h1").html("Tutorial - Build An App")

    $(".mouse-info").css({
        opacity: "1",
        width: "200px",
        background: "rgb(49,52,98)"

    });
    setTimeout(function(){
        $(".mouse-info h1").css({
            transition: "opacity 500ms ease-in-out",
            WebkitTransition: "opacity 500ms ease-in-out",
            MozTransition:"opacity 500ms ease-in-out",
            MsTransition:"opacity 500ms ease-in-out",
            OTransition:"opacity 500ms ease-in-out",
            opacity: "1",
        });

    },400);
}, function(){
    $(".mouse-info h1").css({
        transition: "none",
        opacity: "0"
    });
});

$(".project").hover(function(){
    $(".mouse-info").css({
        opacity: "1"
    });
}, function(){
   $(".mouse-info").css({
       opacity: "0"
   });

});


$(window).on("load", function(){

    setTimeout(function(){
        $(".text900").css({
            transform: "translateY(50px)",
            opacity: "0"
        });
    },6900);
    setTimeout(function(){
        $(".intro").css({
            transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
            WebkitTransition: "-webkit-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            MozTransition:"-moz-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            MsTransition:"-ms-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            OTransition:"-o-transform 500ms ease-in-out, opacity 500ms ease-in-out",
            opacity: "0",
            pointerEvents:"none"
        });
        $(".logo h1, .footer").css({
            opacity: "1"
        })
    },7200)

});