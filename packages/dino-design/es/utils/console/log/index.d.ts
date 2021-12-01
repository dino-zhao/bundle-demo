export interface LogParams {
    /**
     * @description       也可以显式加上描述名
     * @default           支持定义默认值
     */
    base: string;
    extra: string;
}
export default function ({ base, extra }: LogParams): string;
