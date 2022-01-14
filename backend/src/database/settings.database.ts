

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        
        await mongoose.connect( process.env.MONGO_URL || 'null' );

        console.log(`Database online.`);
        
    } catch (error) {
        throw error;
    }
}