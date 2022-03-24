
function func(){


    let a=["blue","white","grey"]
    
    let b=["black", "blue"]
    let arr=[]
    for(i=0;i<a.length;i++){
        for(j=0;j<b.length;j++){
    
    if(a[i]==b[j])
    
    {
    arr.push(a[i]);
    
    }}}  return arr;}
    console.log(func());