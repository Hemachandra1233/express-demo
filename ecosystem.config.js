module.exports = {
  apps : [{
    script: 'index.js',
  }, {
    script: 'index.js'
  }],
   
  // aDeployment Configuration
  deploy : {
    production : {
       "user" : "ubuntu",
       "host" : ["127.0.0.1"],
       "ref"  : "origin/master",
       "repo" : "git@github.com:Hemachandra1233/pm2-demo.git",
       "path" : "/home/ubuntu/express-demo",
       "post-deploy" : "npm pack"
    }
  }
};
