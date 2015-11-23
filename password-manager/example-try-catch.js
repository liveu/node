/**
 * Created by shchoi on 2015-11-20.
 */
function dowork(){
    // throw error that say 'unable to do work'
    throw new Error('unable to do work!');
}
try{
    //call dowork
    dowork();
}catch (e){
    console.log(e.message);
}finally{
    console.log('Finally block executed!')
}

console.log('try catch ended');