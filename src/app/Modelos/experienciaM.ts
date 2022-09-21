export class Experiencia {
    id? : number;
    company: string;
    position : string;
    description : string;
    img_url:string;
    mode: string;
    start:string;
    end:string;
    timeElapsed:string;

   

    constructor(company: string,position : string, description : string,img_url:string, mode: string,
        start:string,  end:string,timeElapsed:string){
        this.company= company;
        this.position= position;
        this.description=description;
        this.img_url= img_url;
        this.mode=mode;
        this.start=start;
        this.end=end;
        this.timeElapsed=timeElapsed;
    }
  
}