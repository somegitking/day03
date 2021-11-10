// const arr = [
//     [90, 87, 140],
//     [120, 130, 150],
//     [180, 240, 200],
//     [180, 140, 190]
// ]
//
// //가장 매출이 좋았던 분기
// //각 분기별 매출 평균을 만든다
// //그중에서 최대 평균을 찾는다.
//
// const parr = []
// for (let i = 0; i <arr.length ; i++) { //arr[i] 숫자가 아니라 배열
//     const tempArr = arr[i]
//     console.log(tempArr)
//
//     let sum = 0
//     for (let j = 0; j < tempArr.length; j++) {
//         sum = sum + tempArr[j]
//     }
// //    console.log(sum)
// //    console.log( sum / (tempArr.length)).toFixed(2)
//
//     const tempAvg = (sum/ tempArr.length).toFixed(2) // toFixed 숫자를 ->문자로 변환
//     parr.push(parseFloat(tempAvg))
// }
// console.log(parr)

//최고 매출 금액
// let max = 0
// let period = 0
// for (let i = 0; i < parr.length; i++) {
//     if(parr[i] > max){
//         max  = parr[i]
//         period = i
//
//     }
//
// }
// console.log("max: " + max)
// console.log("period: " + (period+1) + "분기 입니다.")

//최고 매출 금액



//배열 평균 구하는 함수를 재사용 하고 싶음

//최고 매출 월


let arr =
 [
    [100, 231, 244],
    [305, 432, 434],
     [324, 355, 665],
     [200, 133, 200]
]

console.log(arr)

const sum = []

for (let i = 0; i <  arr.length; i++) {

    console.log(arr[i].length)

}


