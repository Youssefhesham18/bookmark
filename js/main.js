
var siteName = document.querySelector("#sitename")
var siteURL = document.querySelector("#siteurl")

var bookmarkList =[]
if (localStorage.getItem("bklist") != null) {
  bookmarkList = JSON.parse(localStorage.getItem("bklist"))
  display()
}

function submit(){
    var siteName = document.querySelector("#sitename").value
    var siteURL = document.querySelector("#siteurl").value 

    var urllist=
      {
        name :siteName,
        url :siteURL
      }
      bookmarkList.push(urllist)
      localStorage.setItem("bklist", JSON.stringify(bookmarkList))
resetForm()
display()

}





function resetForm(){
  siteURL.value="";
  siteName.value="";
}

function display(){
  var bookmarkList = JSON.parse(localStorage.getItem('bklist'));
  var booktable = document.querySelector('#booktable');
  booktable.innerHTML = '';
  for(var i = 0; i < bookmarkList.length; i++){
  var name = bookmarkList[i].name;
  var url = bookmarkList[i].url;

  booktable.innerHTML +=
   '<div class="bookcont">'+
  '<h2>'+name+'</h2>'+
  '<i class="fa-brands fa-'+name+' mx-3"></i>' +
  ' <a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> ' +
  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '+
  '</div>';
}
}


function deleteBookmark(url){
  bookmarkList.splice(url, 1)
    localStorage.setItem("bklist", JSON.stringify(bookmarkList))
    display()
}

 



