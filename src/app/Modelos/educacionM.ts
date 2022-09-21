export class Educacion {

    id? : number;
    school: string;
    title : string;
    url_img:string;
    score: string;
    start:string;
    end:string;
    

    constructor(school: string,title : string,url_img:string, score: string,
        start:string,  end:string){
        this.school= school;
        this.title= title;
        this.url_img= url_img;
        this.score=score;
        this.start=start;
        this.end=end;
    }
  


}



