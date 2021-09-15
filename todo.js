let fieldInput = document.getElementById('field-input')
let addButton = document.getElementById('add-button')
let listOfTasks = document.getElementById('task-list')


addButton.addEventListener('click', () => {
    let list = document.createElement('li')
    // list.style.textDecoration = 'none'
    list.innerText = fieldInput.value
    list.style.paddingLeft = '2rem'
    list.style.paddingTop = '0.3rem'
  if (fieldInput.value === '') {
    alert("You must write something!");
  } else {
    listOfTasks.appendChild(list)
  }
    fieldInput.value = ""
    list.addEventListener('click', () => {
        list.style.backgroundColor = '#a2e4f2'
    })
    list.addEventListener('dblclick', ()=> {
        listOfTasks.removeChild(list)
    })
})