export interface IResultView {
    message:string|null;
    isSuccess:boolean;
    entity: {
        id:never;
        title:string;
        author?:string;
        genre?:string;
        publishedYear?:number;
      }
}
