//btn1
getEle("btn1").addEventListener("click", function() {
    alert("Hello Mother fucker!");
  });

  getEle("messageDiv").innerHTML = "Xin Chào";
getEle("messageDiv").addEventListener("mouseover",function(){
    getEle("messageDiv").style.color = "red";
});
getEle("messageDiv").addEventListener("mouseout",function(){
    getEle("messageDiv").style.color = "black";
});
  function getEle(id){
    return document.getElementById(id);
  }