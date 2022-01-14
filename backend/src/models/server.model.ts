
import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { connectDB } from '../database/settings.database';

import homeRoute from '../routes/home.route';

class Server {

    private app: Application;
    private port: string;
    private api: string = `/api`;
    private apiRoutes: any = {
        home: `${this.api}`,
        auth: {
            signup: `${this.api}/auth/signup`,
            signin: `${this.api}/auth/signin`,
            recover: `${this.api}/auth/recover`,
            renew: `${this.api}/auth/renew`,
        },
        panel: {
            dashboard: `${this.api}/dashboard`,
            enterprises: `${this.api}/enterprises`,
            workerTypes: `${this.api}/enterprises/worker-types`,
            workers: `${this.api}/enterprises/workers`,
            vouchers: `${this.api}/enterprises/vouchers`,
            cashAccount: `${this.api}/enterprises/accounts/cash`,
            foreignCurrencyAccount: `${this.api}/enterprises/accounts/foreign-currency`,
            socialCapitalAccount: `${this.api}/enterprises/accounts/social-capital`,
            salaryAccount: `${this.api}/enterprises/accounts/salary`,
            expenseAccount: `${this.api}/enterprises/accounts/expenses`,
        }
    }

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT || '3001';
        
        this.connectDB();
        this.middlewares();
        this.routes();

    }

    async connectDB() {
        await connectDB();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( logger('dev') );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: false }) );
        this.app.use( cookieParser() );
        this.app.use( express.static('./src/public') );
    }

    routes() {
        this.app.use( this.apiRoutes.home, homeRoute);
    }

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`Server on port: ${this.port}`);
        });
    }

}

export default Server;