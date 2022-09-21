export class Persona {

    id? : number;
    name: string;
    lastName : string;
    profession: string;
    ubication: string;
    aboutMe: string;
    url_img:string;
    url_backimg:string;
   
   
    constructor(name: string, lastName:string, profession:string, ubication: string, aboutMe: string, url_img:string, url_backimg:string){
        this.name= name;
        this.lastName=lastName;
        this.profession=profession;
        this.ubication=ubication;
        this.aboutMe=aboutMe;
        this.ubication=ubication;   
        this.url_img=url_img;
        this.url_backimg=url_backimg;    
    }

  
}
