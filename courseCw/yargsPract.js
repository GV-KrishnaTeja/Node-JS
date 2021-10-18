const yargs = require("yargs");

//add 

yargs.command({
    command : 'add',
    describe : 'adding the notes to u!!!',
    handler:function () {
        console.log('ADDING WAS DONEEEEEE');
        
    }

})

//remove
yargs.command({
    command: 'remove',
    describe:'removing from the note',
    handler:function () {
        console.log('REMOVE THE ENTIRE PROCESS!');
        
    }
})

//list

yargs.command({
    command:'list',
    describe :'listing the stuff',
    handler :function () {
        console.log('JUST LIST THE NOTESSSSS');
             
    }
})






















console.log(yargs.argv)

