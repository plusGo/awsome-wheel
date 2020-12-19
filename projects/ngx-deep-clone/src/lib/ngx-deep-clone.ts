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
