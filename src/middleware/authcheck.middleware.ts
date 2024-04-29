import { NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction , Request , Response } from "express";

export class AuthcheckMiddleware implements NestMiddleware{
    use(req:Request , res:Response , next:NextFunction){
        if(req.headers.authorization) next()
        // return res.status(403).json({"error":"you are not authorized "})
        throw new UnauthorizedException();
    }
}