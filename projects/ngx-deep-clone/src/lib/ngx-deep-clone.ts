export const ngxDeepClone = (value: any, objs: any[] = []): any => {
  if (typeof value !== 'object' || value === null || value instanceof RegExp) {
    return value;
  }
  const index = objs.find(obj => obj.oldValue === value);
  if (index) {
    return index.newValue;
  }
  objs.push(value);
  if (value instanceof Array) {
    const result = value.map(item => ngxDeepClone(item, objs));
    objs.push({
      oldValue: value,
      newValue: result
    });
    return result;
  } else {
    const result = {};
    Object.keys(value).forEach(key => result[key] = ngxDeepClone(value[key], objs));
    objs.push({
      oldValue: value,
      newValue: result
    });
    return result;
  }
};
