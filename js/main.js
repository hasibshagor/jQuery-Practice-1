$(document).ready(function() {
    $(".hide").click(function() {
        $(".box").hide("slow")
    })

    $(".show").click(function() {
        $(".box").show("slow")
    })

    $(".toggle").click(function() {
        $(".box").toggle("slow")
    })

    $(".fadein").click(function() {
        $(".box").fadeIn("slow")
    })

    $(".fadeout").click(function() {
        $(".box").fadeOut("slow")
    })

    $(".fadetoggle").click(function() {
        $(".box").fadeToggle("slow")
    })

    $(".hover-hide").hover(function() {
        $("p").hide("slow")
    })

    $(".hover-show").hover(function() {
        $("p").show("slow")
    })

    $(".btn").click(function() {
        $(".login-form").hide("slow")
        $(".success-note").fadeIn("slow")
    })

    $(".dblclick").dblclick(function() {
        alert("Are You Sure To Reload...!")
    })
})