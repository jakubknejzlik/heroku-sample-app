var CronJob = require('cron').CronJob;

var job = new CronJob('*/5 * * * * *',function(){
    console.log('cron',new Date())
});

job.start()