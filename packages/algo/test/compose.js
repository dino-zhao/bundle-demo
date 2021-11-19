const compose = require("../jsHandwrite/koaCompose");

async function logger(ctx, next) {
  console.log("打印前");
  await next();
  console.log("打印后");
}

async function time(ctx, next) {
  const start = Date.now();
  console.log("开始时间");
  await next();
  const ms = Date.now() - start;
  console.log("总用时" + ms);
}

const run = compose([logger, time]);

run("context", function () {
  console.log("all middleware done!");
});
