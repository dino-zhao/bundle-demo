/// <reference types="react" />
export interface IHelloProps {
    /**
     * @description       也可以显式加上描述名
     * @default           支持定义默认值
     */
    title: string;
}
declare const _default: ({ title }: IHelloProps) => JSX.Element;
export default _default;
