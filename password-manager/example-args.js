/**
 * Created by shchoi on 2015-11-16.
 */
var argv = require('yargs')
    .command('hello', 'Greets the user', function(yargs){
        yargs.option({
            name: {
                demand: true,
                alias: 'n',
                description : 'Your first name goes here',
                type: 'String'
            },
            lastname:{
                demand:true,
                alias:'l',
                description:'Your last name goes here',
                type:'String'
            }
        }).help('help');
    })
    .command('get', 'some description', function(yargs){

    })
    .help('help')
    .argv;
var command  = argv._[0];//access first of array


if(command === "hello" && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
    console.log('hello ' + argv.name + " " + argv.lastname + '!');
}else if(command === "hello" && typeof argv.name !== 'undefined' && typeof argv.lastname == 'undefined'){
    console.log('hello ' + argv.name );
}else if(command === "hello" && typeof argv.name == 'undefined' && typeof argv.lastname == 'undefined'){
    console.log('hello ');
}

