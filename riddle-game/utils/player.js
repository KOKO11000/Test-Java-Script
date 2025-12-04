export default function createPlayer(name) {        
    console.log(`Wolcome ${name}`);
    return {
        name:name, 
        timeSeconds:[]
    }   
}
