const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const f=process.argv[2];
for(const [w,cs] of [[390,'light'],[390,'dark']]){const p=await b.newPage({viewport:{width:w,height:800},colorScheme:cs});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.cwd()+'/out/'+f);
const ov=await p.evaluate(()=>{const W=document.documentElement.clientWidth;return [...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>W+1&&!e.closest('.tw,pre,nav,.diawrap')}).map(e=>e.tagName+'.'+e.className).slice(0,8)});
console.log(cs,'overflow:',ov,'errs:',errs, 'mcq:',await p.$$eval('.mq',x=>x.length));
await p.screenshot({path:`/home/claude/fr/${f}-${cs}.png`,fullPage:false});
if(cs=='light'){if(await p.$('.mq .opt'))await p.click('.mq .opt');await p.evaluate(()=>document.querySelectorAll('details').forEach(d=>d.open=true));await p.screenshot({path:`/home/claude/fr/${f}-full.png`,fullPage:true});}
}await b.close()})();
