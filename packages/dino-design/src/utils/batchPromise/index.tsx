export interface Params<S, T> {
  /**
   * @description       异步调用的参数数组
   * @default
   */
  paramArr: S[];
  /**
   * @description       异步调用函数
   * @default
   */
  iteratorFun: (item: S) => Promise<T>;
  /**
   * @description       最大并发数
   * @default           6
   */
  batchSize?: number;
}

export default async <S, T>({
  paramArr,
  iteratorFun,
  batchSize = 6,
}: Params<S, T>) => {
  const result: any[] = [];
  while (paramArr.length > 0) {
    const data = await Promise.all(
      paramArr.splice(0, batchSize).map((item) => iteratorFun(item))
    );
    result.push(...data.flat());
  }
  return result;
};
