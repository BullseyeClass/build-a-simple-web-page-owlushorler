
function lam(){
  document.body.classList.toggle("lov")
}

// calculator//

fam = []
 let lll = ''

call = (man) => {
  if (man === 1 ){
    pp = 1
  }else if (man === 2){
    pp = 2
  }
  else if (man === 3) {
    pp = 3
  }else if (man === 4){
    pp = 4
  }
   else if (man === 5) {
     pp = 5
   } 
   else if (man === 6) {
     pp = 6
   }else if (man === 7) {
     pp = 7
   }
   else if (man === 8) {
     pp = 8
   }
   else if (man === 9) {
     pp = 9
   }else if (man === 0) {
     pp = 0
   }

 else if (man === '+'){
    pp = ('+')
  }
  else if (man === '-') {
    pp = '-'
  }else if (man === '*') {
    pp = '*'
  }else if (man === '/') {
    pp = '/'
  }else if (man === '.') {
    pp = '.'
  }
  fam.push(pp)
 loo()
   
  console.log(fam)
  }
  
   // for loop// 
  loo = ()=>{
    let lll = ''
   
     
  for (i= 0; i<fam.length; i++){
    let koll = fam[i]
    lll += koll
    document.querySelector('.book').innerHTML = lll
    console.log(lll)
    
  }
}


zero = () =>{
   return (fam = [])
}   
   
//equal to//
 joop =() => {
   lloop = ''
       lll = eval(fam.join(''))
   document.querySelector('.bookk').innerHTML = lll
  zero()
  document.querySelector('.book').innerHTML = lll
  fam.push(lll)
 console.log(lll)
   
    console.log(eval(fam.join('')))
 }
 
 //del//
  del =() =>{
 if(fam == ''){
     document.querySelector('.book').innerHTML = ''

   }else if (fam !== []) {
     fam.pop()
     loo()
   }
   console.log(fam)
   
 }
 
c = ()=>{
   zero()
        document.querySelector('.book').innerHTML = ''
     document.querySelector('.bookk').innerHTML = ''

   
 }
 
 
 // game//
 win = 0

loss = 0



gam = (lop) =>  {
    re = ""
    lo = ''
    wo =''
    let math = Math.random()
    if (lop === 'pure'){
        if(math > 0 && math < 0.5 ){
           re =  'head'
           win ++
           lo += 'head'
           wo = 'win'

        }else if (math >= 0.5 && math<= 1){
            re = 'tail'
            loss ++
            lo += 'head'
            wo = 'loss'
        }
    }else if (lop === 'table'){
        if(math > 0 && math < 0.5 ){
            re =  'tail'
            win ++ 
            lo = 'tail'
            wo = 'win'
         }else if (math >= 0.5 && math<= 1){
             re = 'head'
             loss ++
             lo = 'tail'
             wo = 'loss'
         }
    }return (document.getElementById("table").innerHTML= `win${win} loss${loss}`,
    document.getElementById("ta").innerHTML=`you pick ${lo} and computer picked ${re}`
    , document.getElementById('taa').innerHTML = `you ${wo}`)
}


function re(){
return (document.getElementById("table").innerHTML= `win${win === 0} loss${loss = 0}`,
document.getElementById("ta").innerHTML=`you pick ${lo = ''} and computer picked ${re = ''}`
, document.getElementById('taa').innerHTML = `you ${wo = ''}`)
}