function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("filter");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
$('#paratha').typeIt({
        speed: 100,
        autoStart: false
    })
    .tiType('PARATHA ?')
    .tiPause(1500)
    .tiBreak()
    .tiType('YES !')
    .tiPause(1500)
    .tiDelete(15)
    .tiPause(1000)
    .tiType('IDLI ?')
    .tiPause(500)
    .tiBreak()
    .tiType('YES !')