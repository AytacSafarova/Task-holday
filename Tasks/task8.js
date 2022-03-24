

function func(words, letter){
    let result =[]
    
    for (i=0;i<words.length;i++){
    if(words[i][0]== letter){
    result.push(words[i])}
    
    }
    console.log(result)}
    func(["Black","Baku","Sky"], "B")