export const ngxDeepClone = (value: any, recursionData?: { [key: string]: any }): any => {
  /**
   * variables init
   */
  if (!recursionData) {
    recursionData = {
      cloneValueCache: [],
      count: 0
    };
  }
  const cloneValueCache = recursionData.cloneValueCache;
  recursionData.count++;
  console.log(`deep clone execute ${recursionData.count} times`);

  /**
   * recursion terminator
   */
  if (typeof value !== 'object' || value === null || value instanceof RegExp) {
    return value;
  }

  /**
   * 解决了两个问题：
   * 1、重复clone同一个对象
   * 2、循环依赖（ps：性能更好的做法是只追溯自己的父节点是否循环依赖，但是解决第一点的适合，第二点顺便解决了）
   */
  const index = cloneValueCache.find(obj => obj.oldValue === value);
  if (index) {
    return index.newValue;
  }

  /**
   * recursion process
   */
  const cacheValue = {oldValue: value} as any;
  cloneValueCache.push(cacheValue);

  if (value instanceof Array) {
    cacheValue.newValue = value.map(item => ngxDeepClone(item, recursionData));
  } else {
    cacheValue.newValue = {};
    Object.keys(value).forEach(key => cacheValue.newValue[key] = ngxDeepClone(value[key], recursionData));
  }

  return cacheValue.newValue;
};
