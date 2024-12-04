export interface IResultDataList {
    entities: {
        id:never;
        title:string;
        author?:string;
        genre?:string;
        publishedYear?:number;
      }[];
      count: number;
}
