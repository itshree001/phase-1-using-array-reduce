const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function getTotalBatteries(battery){
    const totalBatteries= battery.reduce((accumulator,cv)=>{
        // console.log(accumulator,cv)
        return  accumulator + cv
    },0)
    return totalBatteries
}

console.log(getTotalBatteries(batteryBatches))