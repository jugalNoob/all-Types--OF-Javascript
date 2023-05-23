///Rest & spread operator  different

//rest operator

function addNumber(a, b , c, ...other){
console.log(other[1])
    console.log(a + b +c)

}

addNumber(2 , 5 , 6 , 8 , 9)


//sprede


let a=["jugal" , "karan" , "anku"]


function allName(...a){

    console.log(a)
}


allName()

