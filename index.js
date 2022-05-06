// code your solution here
function superbowlWin(array){
    let iterator = (object) => {
       return (object.result === "W")
    }
   if (array.find(iterator)!==undefined){
     return array.find(iterator).year
   } return array.find(iterator)
}
