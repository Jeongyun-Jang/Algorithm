let oneToMill = [];
for(let i=1;i<=10000;i++){
    oneToMill.push(i);
}

let num = 1;

for(let i=0;i<=10000;i++){
    let numResult = 0;
    let sumOfNumIndex = 0;

    for(let j=0;j<i.toString().length;j++){
        sumOfNumIndex += Number(i.toString()[j]);
    }

    numResult = i+ sumOfNumIndex;
    let idx = oneToMill.indexOf(numResult)
    if(idx != -1){
        oneToMill.splice(idx,1)//idx번째 인덱스에서 1개 요소 제거
    }
}

oneToMill.forEach(el=>{
    console.log(el);
})
