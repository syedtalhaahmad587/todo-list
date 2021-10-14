const button_text = document.querySelector('.button-text');
   
   const updateLSData = () => {
      const textareaData = document.querySelectorAll('textarea');
      const notes = [];
      console.log(textareaData)
      textareaData.forEach( (note) => {
          return notes.push(note.value)
      } );
      localStorage.setItem('note' , JSON.stringify(notes));

   }

 var starttasks = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');

    const dataHTML = `
    <div class="operation">
    <button class="edit"> <i class="fas fa-edit"></i> </button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
  <div class="main" ${text ? "hidden" : "" } ></div>
  <textarea class="${text ? "" : "hidden" }" ></textarea> `

  note.insertAdjacentHTML('afterbegin' , dataHTML )
  console.log(note)

  const updatedel = note.querySelector('.delete');
  const update_edit = note.querySelector('.edit');
  const updatemain = note.querySelector('.main');
  const textarea = note.querySelector('textarea');

   updatedel.addEventListener('click' , () => {
     note.remove();
     updateLSData();
   } );
   // localStorage.setItem akr ap ko local system pr kuch add krna rha tou setItem 
   // or akr localstorage se lena ho to get ka method lage ga yani koyi chez phely se localstorage pr hai 
   // tou wo wapis maghwane kheliye getItem ka method lage ga //
   // Toggle using edit button //
   // change mean yani data lek kr console main aram se dekhata hai or input furan furan ap ko change hi use krna chahiye //
   textarea.value = text;
   updatemain.innerHTML = text;
   update_edit.addEventListener('click' , () => {
      updatemain.classList.toggle('hidden');
      textarea.classList.toggle('hidden');

   });
   textarea.addEventListener('change' , (event) => {
       const value = event.target.value
       console.log(value);
       updatemain.innerHTML = value;

      updateLSData();
      
    } );

  document.body.appendChild(note);
 }
    const notes = JSON.parse(localStorage.getItem('note'  ));
    if(notes) {
      notes.forEach((note) => starttasks(note)) 
    };

button_text.addEventListener('click' , () =>  starttasks() ); 

// const button_text = document.querySelector('.button-text');

// const addnewnode = (text = '') => {
//     const note = document.createElement('div');
//     note.classList.add('note');
//     const htmlData = `
//     <div class="operation">
//     <button class="edit"><i class="fas fa-edit"></i> </button>
//     <button class="delete"><i class="fas fa-trash-alt"></i></button>
//     </div>
//     <div class="main"></div>
//     <textarea class=""></textarea>
//     `
//     note.insertAdjacentHTML('afterbegin' , htmlData);
//    document.body.appendChild(note);
// }

// button_text.addEventListener('click' , () => addnewnode() );
