function reverseK(s, k){
    let list = [...s]
    for(let i=0;i<list.length; i+=(2*k)){
        let firstLeft = i;
        let firstRight = (k - 1) + i;
        
        if( list.length < (firstRight+1)){
            firstRight = list.length - 1;
        }
        
        while (firstLeft<firstRight){
                let temp = list[firstLeft];
                list[firstLeft] = list[firstRight];
                list[firstRight] = temp;
                firstLeft++;
                firstRight--;
        }
    }
    return list.join("");
}


let s = "abcdefg";
console.log(s);
console.log(reverseK(s, 3));