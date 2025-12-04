export default function showStats(player){
    let allTimeers = player.timeSeconds
    let sum = 0
    let average = 0
    for (let i = 0; i < allTimeers.length; i++) {
        sum += allTimeers[i];
    }
    average = sum / 2
    console.log(`sum:${sum},avr:${average}`);
    
    return sum, average        
}


