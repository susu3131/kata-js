console.log("test")

// 資料
const data = [
  {
    id: 1,
    content: '我是卡斯伯'
  },
  {
    id: 2,
    content: '我是小明'
  }
];






//新增按鈕
const addInput = document.querySelector("#inputByAdd")  //選取input
const  addButton = document.querySelector("#buttonByAdd") //選取按鈕
addButton.addEventListener("click",function(){
  addData(addInput.value)

})


function addData(content){
  let num = data.length ;
  num++;
  data.push({
    id:data.length,
    content
  })
  console.log(data)
}




