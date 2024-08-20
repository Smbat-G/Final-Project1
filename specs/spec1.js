
import {Test } from '../test.js'

function test1(){
    let x = [1,2,3,4,5,6]
    for(let i = 0; i <x.length; i++){
        if(x[i] % 2 === 0){
        }else{
            throw new Error('not evn number')
        }
    }
    }
    
    function test2(){
    if(1+1 === 2){
        console.log('chisht patasxan');
    }else{
        throw new Error('not evn number')
    }
    }
    
    function test3(){
    let y = [1,2,3,4,5,6]
    let count = 0
    for(let i = 0; i < y.length; i++){
        if(y[i] % 2 === 0){
            count++
            console.log(count);
        }else{
            throw new Error('not evn number')
        }
    }
    }
    
    export default [
        Test.Case(test1, '@regression', 1),
        Test.Case(test2, '@smoke', 2),
        Test.Case(test3, '@regression', 3)
    ]