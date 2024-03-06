function func(){
    // let add_div=document.querySelector('todolist');

    let textid=document.getElementById('task');
    let textvalue=textid.value
    // console.log(textvalue)
    // console.log(typeof add_div)

    let new_ta=document.createElement('textarea')
    new_ta.textContent=textvalue
    let btn_chk= document.createElement('input')//innerText='check button' 
    btn_chk.type='checkbox'
    btn_chk.id='tick'
    btn_chk.innerText='✔'

    let new_cls=document.createElement('div');
    new_cls.className='atask';
    new_cls.appendChild(new_ta)
    new_cls.appendChild(btn_chk)
    // console.log(new_cls)

    document.getElementById('addlist').appendChild(new_cls)
    
    textid.value=''


}

