require('dotenv').config();

const config = {
    app:{
        name: process.env.APP_NAME || 'DefaultAPP',
        version: process.env.APP_VERSION || '1.0.0',
        port: process.env.PORT || 8080,
        env: process.env.NODE_ENV
    }
}
module.export = config;
