
function func(){
    let arr=["arr1","arr2","arr3"]
    let result=""
    for (i=0;i<arr.length;i++) {
        if(i==arr.length-1){
            result=result+arr[i];
        }
        else{result=result+",";}}
        
    console.log(result)}
    func();