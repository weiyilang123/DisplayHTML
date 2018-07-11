var jq = document.createElement("script");

jq.addEventListener("load", proceed); // pass my hoisted function
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.querySelector("head").appendChild(jq);

function proceed() {

function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");


  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

$(".toggleButton").hover(
  function() {
  $(this).addClass("highlightedButton");
},
  function() {
    $(this).removeClass("highlightedButton");
}
);

$(".toggleButton").click(
  function() {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");

    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width($(window).width() / numberOfActivePanels - 10);
  }
);

$("textarea").height($(window).height() - $("#header").height() - 15);
$(".panel").height($(window).height() - $("#header").height() - 15);
$(".panel").width($(window).width() / 2 - 10);
updateOutput();

$("textarea").on('change keyup paste', function() {
updateOutput();
});
}
