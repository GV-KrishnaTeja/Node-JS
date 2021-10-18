const yargs = require("yargs");

//add 

yargs.command({
    command : 'add',
    describe : 'adding the notes to u!!!',
    builder : {
        title :{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe :'body of title',
            demandOption : true,
            type : 'string'
        },
    },
    handler:function (argv) {
        console.log('title : ' + argv.title);
        console.log('body : ' +argv.body);
        
    }

})
yargs.parse()