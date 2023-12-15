module.exports = {
  apps : [{
    script: 'index.js',
    instances: 2
  }],
  // aDeployment Configuration
  deploy : {
    production : {
       "user" : "ubuntu",
       "host" : ["127.0.0.1"],
       "ref"  : "origin/master",
       "repo" : "git@github.com:Hemachandra1233/express-demo.git",
       "path" : "/home/ubuntu/pm2-demo",
       "post-deploy" : "yarn install && yarn build && pm2 reload ecosystem.config.js --env production"
    }
  }
};
