let tab = ["img/nature.jpeg","img/banane.jpg", "img/download.jpg", "img/peach.jpg"];
var i = 0;
var a = 0;
var b = 0;
var c = 0;
var k = 0;
var x;

function myImg(id) {
    
    if ((id == 0 || id == 3) && (i == 0 || i == 1))
    {
        if (i == 0)
            x = document.getElementById(id);
        document.getElementById(id).src = tab[1];
        i++;
        a++;
    }
    if ((id == 1 || id == 4) && (i == 0 || i == 2))
    {
        if (i == 0)
            x = document.getElementById(id);
        document.getElementById(id).src = tab[2];
        i += 2;
        b++;
    }
    if ((id == 2 || id == 5) && (i == 0 || i == 3))
    {
        if (i == 0)
            x = document.getElementById(id);
        document.getElementById(id).src = tab[3];
        i += 3;
        c++;
    }
    k++;
    if (k == 2)
    {
        if (i != 2 && i != 4 && i != 6)
        {
            x.src = tab[0];
            document.getElementById(id).src = tab[0];
        }
        k == 0;
        i = 0;
    }
}