
let removes=Array.from(document.getElementsByClassName("remove"));
Array.from(document.getElementsByClassName("record")).forEach(element => {
  element.addEventListener('mouseover',function(){
    removes.forEach(item=>{
      item.style.display="block";
    })
  });
  element.addEventListener('mouseout',function(){
    removes.forEach(item=>{
      item.style.display="none";
    })
  })
});
removes.forEach(item=>{
  item.addEventListener('click',function(e){
    if(confirm('确定要删除此记录吗？')){
      return true;
    }else{
      e.preventDefault();
    }
  })
})