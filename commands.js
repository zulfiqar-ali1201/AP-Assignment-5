const fs=require('fs');

//Add commnad is here
///---------------------------
const add=(title, desc, author) =>{
   //notes array list
    let noteslist=[];
 try{
     //reading the JSOn file
     noteslist=JSON.parse(fs.readFileSync("noteslist.json"));
 }catch(e){
     //console.log(e);
 }
 //this will find if same note is already available
 let index=noteslist.findIndex((x)=>x.title==title);
 //if index = -1 it means that note is not availble in noteslit json file
 if(index==-1){
     noteslist.push({title, desc, author});

     console.log("Note Added")
 }else{
    console.log("note is already avaialble");
 }
fs.writeFileSync("noteslist.json", JSON.stringify(noteslist)); 
 
}

//Remove commnad is here
///---------------------------
const remove=(title)=>{
    let noteslist=[];
    try{
        //reading the JSOn file
        noteslist=JSON.parse(fs.readFileSync("noteslist.json"));
    }catch(e){
        //console.log(e);
    }

    //following command will find the noteslist which are not matched the given command and the next command will rewrite the find notelist
    const filteredlist=noteslist.filter((x)=>x.title != title);
    fs.writeFileSync("noteslist.json", JSON.stringify(filteredlist)); 
    console.log('note removed');
}


//Print  commnad is here
///---------------------------

const print=()=>{
    let noteslist=[];
    try{
        //reading the JSOn file
        noteslist=JSON.parse(fs.readFileSync("noteslist.json"));
    }catch(e){
        //console.log(e);
    }
    console.log(noteslist);

}

//update commnad is here
///---------------------------

const update=(title, desc,author)=>{
    let noteslist=[];
    try{
        //reading the JSOn file
        noteslist=JSON.parse(fs.readFileSync("noteslist.json"));
    }catch(e){
        //console.log(e);
    }
    let index=noteslist.findIndex((x)=>x.title==title);
    //const filteredlist=noteslist.filter((x)=>x.title == title);
    if(index==1){
        console.log("title found and updated");
        noteslist[index].desc = desc;
        fs.writeFileSync("noteslist.json", JSON.stringify(noteslist)); 

        noteslist[index].author = author;
        fs.writeFileSync("noteslist.json", JSON.stringify(noteslist));
        
    }
    else{
        console.log("Title Not Found");
    }
}

module.exports={
    add,
    remove,
    print,
    update
}