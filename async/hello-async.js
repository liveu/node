/**
 * Created by shchoi on 2015-11-21.
 */

console.log('Challenge : ');

function printInTwoSeconds(message){
    //setTimeout 2000
    // console to print message var
    setTimeout(function(){
        console.log(message);
    }, 2000);
}

printInTwoSeconds('Hello async!');
