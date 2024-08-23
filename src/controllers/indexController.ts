import { Request, Response } from "express";

class IndexController{
    public index(req : Request, resp : Response){
        resp.send('GDS0633!!!');
    }
}
export const indexController = new IndexController();