import { Request, Response, NextFunction } from "express";

export const getHomePage = async ( req: Request , res: Response, next: NextFunction ) => {
    try {
        
        return res.status(200).json({
            ok: true,
            status: 200,
            msg: `Home`,
        });

    } catch (error) {
        res.sendStatus(500);
    }
}
