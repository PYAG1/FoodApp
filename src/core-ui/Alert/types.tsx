export interface AlertTypes{
    type: "success" | "error",
    message:string,
    list?:string[]
    toastAction:any
}