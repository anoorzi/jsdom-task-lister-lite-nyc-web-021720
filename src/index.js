document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  let ul = document.querySelector('#tasks')

  ul.addEventListener('click',function(event){
    if(event.target.className==='del'){
      let node = event.target
      node.parentNode.remove()

    }
  })
  form.addEventListener('submit',function(event){
    event.preventDefault()
    // let input = document.querySelector('#new-task-description')
    //console.log(form.des.value)
    let newPostList = document.getElementById('tasks')
    let li = document.createElement('li')
    li.innerHTML = `<p> ${form.des.value} </p>
    <button class='del'>delete</button>`
    newPostList.appendChild(li)
    form.reset()
  })



});
