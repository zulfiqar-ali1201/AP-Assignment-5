const yargs=require('yargs');
const commands=require('./commands');

let command=yargs.argv._[0];
let title=yargs.argv.title;
let desc=yargs.argv.desc;
let author=yargs.argv.author;

if(command=="add"){
    if(title && desc && author){
        commands.add(title, desc, author);
    }

}
else if(command=="remove"){
    if(title){
        commands.remove(title);
    }
}
else if(command=="update"){
    if(title){
        commands.update(title,desc,author);
    }

}
else if(command=="print"){
    commands.print();

}
else{
    console.log("unkown Command");
}

