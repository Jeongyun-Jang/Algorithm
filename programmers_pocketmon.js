function solution(nums) {
    var answer = 0;
    const arr = nums.filter((p,index)=>{
        return nums.indexOf(p)===index;
    })
    answer = arr.length;
    if(answer >= nums.length/2){
        answer = nums.length/2        
    }
    return answer;
}