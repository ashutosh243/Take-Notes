console.log("Added");
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

     let addtext = document.getElementById('addtext');
     let notes = localStorage.getItem("notes");
     if (notes == null) {
          notesarr = [];
     }
     else {
          notesarr = JSON.parse(notes);
     }
     notesarr.push(addtext.value);
     localStorage.setItem("notes", JSON.stringify(notesarr));
     addtext.value = '';
     // console.log(notesarr);
     shownotes();

})
// function to show local storage
function shownotes() {

     let notes = localStorage.getItem("notes");
     if (notes == null) {
          notesarr = [];
     }
     else {
          notesarr = JSON.parse(notes);
     }
     let html = "";
     notesarr.forEach(function (element, index) {
          html += `  
              <div class="card mx-3 my-3" id ="notes" style="">
            
               <div class="card-body">
               <h5 class="card-title">Notes${index + 1}</h5>
               <p class="card-text" >${element}</p>
               <a id="${index}"onclick="deletenote(this.id)" class="btn btn-outline-primary">Delete</a>
               </div>
               </div>   
          `;
     });

     let notesele = document.getElementById("notes");
     if (notesarr.length != 0) {
          notesele.innerHTML = html;
          // console.log(notesarr.length);
     }
     else 
     {


          notesele.innerHTML = `Write above to add notes`     
     }

}
// function to Delete notes
function deletenote(index)
{
     //     console.log(index);

     let notes = localStorage.getItem("notes");
     if (notes == null) {
          notesarr = [];
     }
     else 
     {
          notesarr = JSON.parse(notes);
     }
      notesarr.splice(index,1);
      localStorage.setItem("notes", JSON.stringify(notesarr)); 
      shownotes();

}
let search=document.getElementById("searchtext");
search.addEventListener("input",function()
{     
     inputval=search.value.toLowerCase();
     // console.log("reading",inputval);
     let card=document.getElementsByClassName("card");
     Array.from(card).forEach(function(element){
      let cardtxt=element.getElementsByTagName("p")[0].innerText;
      if(cardtxt.toLocaleLowerCase().includes(inputval)==1)
      {
          element.style.display="block";
      }
      else
      {
          element.style.display="none";
      }



     });
    
})

     let clear=document.getElementById("clearbtn");
     clear.addEventListener("click",function()
     {    if(confirm("Do you want to clear your notes"))
         {
          console.log("clearing");
          localStorage.clear();
          shownotes();
         }
     })

