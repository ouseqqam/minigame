let tab = ["img/sky.jpg","img/banane.jpg", "img/download.jpg", "img/peach.jpg"];
var img = [];
var id1 = -1;
var i = -1;

function myImg(id) {
    if (id == 0 || id == 4)
    {
        if (i == -1 || i == 0)
        {
            document.getElementById(id).src = tab[3];
            i = 0;
        }
        else
        {
            document.getElementById(id1).src = tab[0];
            document.getElementById(id).src = tab[0];
        }
        id1 = id;
    }
}