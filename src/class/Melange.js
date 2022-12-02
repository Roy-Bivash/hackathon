class Melange 
{
    constructor(id, x, y, lesGouttes){
        this.id = id;
        this.x = x;
        this.y = y;
        this.lst = lesGouttes;
    }


    
    createMelange(id, x, y,lstGouttes){
        let lesGouttes = [];
        for(let i = 0; i < lstGouttes.length; i++){
            lesGouttes.push(lstGouttes[i]);
        }
        return new Melange(id, x, y, lesGouttes);
    }



    
}
