export interface GetHoroscope{
    name:string;
    horoscopeMessage:string;
    sign:string;
    daysUntilBirthday:number;    
}
export interface EmptyGetHoroscope{
    name:"";
    horoscopeMessage:"";
    sign:"";
    daysUntilBirthday:"";    
}
