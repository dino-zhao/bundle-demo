# Basic One-Way Example

This example demos a basic host application loading remote component.

- `app1` is the host application.
- `app2` standalone application which exposes `Button` component.

# Running Demo

yarn
Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3010/) (HOST)
- [localhost:3002](http://localhost:3011/) (STANDALONE REMOTE)

## 说明

yarn workspace 不能执行 yarn workspaces run start，而是只能启动一个，

且不能只执行其中一个的命令，比如指定安装目录 lerna add lodash --scope=app1,其他命令可以用 lerna exec，比如 lerna exec yarn remove lodash --scope=app1

注意在 lerna list 时要加--all，因为 private 设为 true 了

参考https://segmentfault.com/a/1190000019350611
