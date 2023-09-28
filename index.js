// code your solution here
function saturdayFun( activity ='roller-skate'){



    return `This Saturday, I want to ${activity}!`

}
const mondayWork = function(activity = 'go to the office'){
    
    return `This Monday, I will ${activity}.`;

}
mondayWork("work from home");
function wrapAdjective(string){
  return inner = function ( adjective ="special"){
  
        return `You are ${string}${adjective}${string}!`
    }
   
     
}
 wrapAdjective("*")("a hardworker");
 wrapAdjective("||")("a dedicated programmer");