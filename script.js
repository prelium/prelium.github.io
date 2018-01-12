var mydata = JSON.parse(data);
var table = document.getElementById("myTable");
for ( i = 0; i < mydata.length ; i++)
{
  var para = document.createElement("p");
  var node = document.createTextNode(mydata[i].name);
  para.appendChild(node);
  var element = document.createElement("div");
  if(i%2==0)
    element.className = 'div' + 1;
  else
    element.className = 'div' + 2;
  document.getElementsByTagName('body')[0].appendChild(element);
  var myImage = new Image(960, 540);
  myImage.src = mydata[i].photo;
  myImage.className = 'img';
  element.appendChild(myImage);
  element.appendChild(para);
  table.appendChild(element);
}


function myFunction() {
  
  var input, filter, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  tr = document.getElementsByTagName("div");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("p")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
