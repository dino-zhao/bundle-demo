import React from "react";

export interface IHelloProps {
  /**
   * @description       也可以显式加上描述名
   * @default           支持定义默认值
   */
  title: string; // 支持识别 TypeScript 可选类型为非必选属性
}

export default ({ title }: IHelloProps) => <h1 className="dino">{title}</h1>;
