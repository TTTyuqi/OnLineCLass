export class ICrudQuery {
  where?:any
  size?: number =10
  page?: number = 1
  sort?: string | any
  populate?: string | any
  select?: string | any
}