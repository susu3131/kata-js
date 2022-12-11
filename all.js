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

const addBtn = document.querySelector("#buttonByAdd")
const inputText = document.querySelector("#inputByAdd")
const dataList = document.querySelector(".list")


function render(){
  let str = "";
  data.forEach(function(item){
    str += `
    <li>${item.content}<button class="delete" data-id="${item.id}">刪除</button></li>`
  })
  dataList.innerHTML = str ;

  const deleteBtn = document.querySelectorAll(".delete")
  deleteBtn.forEach(function(item){
    item.addEventListener("click",function(e){
      const id = e.target.dataset.id 
      deleteData(id)
    })
  })
}


function add(text){
  let num = data.length;
  num++;
  data.push({
    id:num,
    content:text
  })
  console.log("成功新增",data);
  render()
}

addBtn.addEventListener("click",function(e){
  add(inputText.value)
  inputText.value = ""
})

function deleteData(id){
  const index = data.findIndex((item)=>item.id == id)
  data.splice(index,1)
  console.log("成功刪除",data);
  render()
}



render()
add("我是阿花")

