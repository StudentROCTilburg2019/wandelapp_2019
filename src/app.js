import {hikingapp} from './hikingapp';

// Server that stores route data
const remoteserver = 'http://nodejs-mongo-persistent-wandelappbackend-v2.a3c1.starter-us-west-1.openshiftapps.com';

document.addEventListener('DOMContentLoaded', () => {
    //Load the app with the REST server
    hikingapp(remoteserver);
});
