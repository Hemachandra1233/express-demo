module.exports = {
  apps : [{
    script: 'index.js',
    instances: 1,
  },
   
  // aDeployment Configuration
  deploy : {
    production : {
       "user" : "ubuntu",
       "host" : ["127.0.0.1"],
       "ref"  : "origin/master",
       "repo" : "git@github.com:Hemachandra1233/express-demo.git",
       "path" : "/home/ubuntu/pm2-demo",
       "post-deploy" : "pm2 start ecosystem.config.js --env production"
    }
  }
};
