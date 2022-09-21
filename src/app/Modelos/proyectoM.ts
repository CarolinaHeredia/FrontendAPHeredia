export class Proyecto {
    id? : number;
    name: string;
    description : string;
    buildingDate: string;
    link: string;
    url_img:string;
   
   

    constructor(name: string,description : string, buildingDate: string, link: string,url_img:string){
        this.name= name;
        this.description=description;
        this.buildingDate=buildingDate;
        this.link=link;
        this.url_img= url_img;
    }
}