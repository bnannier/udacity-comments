import development from './development.js'

const Config = {
    environment: process.env.NODE_ENV.toLowerCase(),
    settings : ''
};

if(Config.environment === "development" || Config.environment === "dev"){
    Config.settings = development;
}else{

}

export default Config;