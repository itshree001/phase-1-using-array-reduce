const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function getTotalBatteries(batteryBatches){
    let i=0
    const total= batteryBatches.reduce((accumulator,cv)=>{
        return  cv[i]
    },'Hello')
    
    return total
}

getTotalBatteries(batteryBatches)