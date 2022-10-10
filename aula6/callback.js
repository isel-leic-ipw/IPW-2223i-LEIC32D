
function async1(a, fa){
            
}

function async2(b,fb){
            
}

function async3(b, fc){
            
}

function main(){

    async1(1, aa => {
        async2(2, bb =>{
            async3(3, cc =>{
            })
        })
    })
    

}