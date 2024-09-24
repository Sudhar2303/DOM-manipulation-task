function reqOneSqr()
{
    var side = 4;
    document.getElementsByClassName('sqr-text')[0].innerHTML  = `<p>Side : ${side}</p>`;
    var area = side*side;
    document.getElementsByClassName("sqr-area")[0].value = area;
}
function reqOnetri()
{
    var length = 4;
    var breath = 5;
    document.getElementsByClassName('tri-text')[0].innerHTML  = `<p>Length : ${length} Breath : ${breath}</p>`;
    var area = 0.5*length*breath;
    document.getElementsByClassName("tri-area")[0].value = area;
}
function reqOnecir()
{
    var radius = 4;
    document.getElementsByClassName('cir-text')[0].innerHTML  = `<p>Radius : ${radius}</p>`;
    var area = Math.PI*radius;
    document.getElementsByClassName("cir-area")[0].value = area;
}
function reqTwoSqr()
{
    var side = 4;
    document.getElementsByClassName('sqr-text')[1].innerHTML  = `<p>Side : ${side}</p>`;
    var area = side*side;
    document.getElementsByClassName("area")[0].value = area;
}
function reqTwotri()
{
    var length = 4;
    var breath = 5;
    document.getElementsByClassName('tri-text')[1].innerHTML  = `<p>Length : ${length} Breath : ${breath}</p>`;
    var area = 0.5*length*breath;
    document.getElementsByClassName("area")[0].value = area;
}
function reqTwocir()
{
    var radius = 4;
    document.getElementsByClassName('cir-text')[1].innerHTML  = `<p>Radius : ${radius}</p>`;
    var area = Math.PI*radius;
    document.getElementsByClassName("area")[0].value = area;
}
// function reqThreeSqr()
// {
//     document.getElementsByClassName('input-field')[0].innerHTML = `<input type="number" class="value">`
// }
// function reqThreecir()
// {
//     document.getElementsByClassName('input-field')[0].innerHTML = `<input type="number" class="value">`
// }
// function reqThreetri()
// {
//     document.getElementsByClassName('input-field')[0].innerHTML = `<input type="number" class="value">`
// }