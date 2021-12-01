import React from "react";

export interface LogParams {
  /**
   * @description       也可以显式加上描述名
   * @default           支持定义默认值
   */
  base: string; // 支持识别 TypeScript 可选类型为非必选属性
  extra: string;
}

export default function ({ base, extra }: LogParams) {
  // return base + extra;
}
