let arr=[1,2,3,4];
let b=arr.length;
let sum=0
let average=0
function func ( arr=[1,2,3,4]
){
for(i=0;i<b;i++){
    sum=sum+arr[i]
}
average=sum/b;

for(i=0;i<b;i++){
    if(average<arr[i]){
        console.log(arr[i])
    }

}}
func()