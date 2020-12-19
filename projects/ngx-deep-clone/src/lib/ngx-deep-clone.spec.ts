import {ngxDeepClone} from './ngx-deep-clone';

describe('NgxDeepClone', () => {

  beforeEach(() => {
  });

  it('should light copy', () => {
    const source = {field: 1};
    const cloneValue = source;
    expect(cloneValue).toEqual(source);
    expect(cloneValue.field).toEqual(source.field);

    source.field = 1;
    expect(cloneValue.field).toEqual(1);
  });

  it('should deep copy', () => {
    const source = {field: 1};
    const cloneValue = ngxDeepClone(source);
    expect(cloneValue === source).toBeFalsy();
    expect(cloneValue.field === source.field).toBeTruthy();
  });

  it('should deep copy with regexp', () => {
    const source = {reg: new RegExp('/"/g')};
    const cloneValue = ngxDeepClone(source);
    expect(cloneValue === source).toBeFalsy();
    expect(cloneValue.reg === source.reg).toBeTruthy();
  });

  it('should deep copy with 5level', () => {
    const source = {level1: {level2: {level3: {level4: {level5: 'dest'}}}}};
    const cloneValue = ngxDeepClone(source);
    expect(cloneValue === source).toBeFalsy();
    expect(cloneValue === source).toBeFalsy();
    expect(cloneValue.level1 === source.level1).toBeFalsy();
    expect(cloneValue.level1.level2 === source.level1.level2).toBeFalsy();
    expect(cloneValue.level1.level2.level3 === source.level1.level2.level3).toBeFalsy();
    expect(cloneValue.level1.level2.level3.level4 === source.level1.level2.level3.level4).toBeFalsy();
    expect(cloneValue.level1.level2.level3.level4.level5 === source.level1.level2.level3.level4.level5).toBeTruthy();
  });

  it('should deep copy with same variable1', () => {
    const originVariable = {name: 'originVariable'};
    const source = {fieldA: originVariable, fieldB: originVariable};
    const cloneValue = ngxDeepClone(source);
    expect(source.fieldA === source.fieldB).toBeTruthy();
    expect(cloneValue.fieldA === source.fieldB).toBeFalsy();
    expect(source.fieldA === cloneValue.fieldB).toBeFalsy();
    expect(cloneValue.fieldA === cloneValue.fieldB).toBeTruthy();
    expect(JSON.stringify(cloneValue.fieldA) === JSON.stringify(cloneValue.fieldB)).toBeTruthy();
  });

  it('should deep copy with same variable2', () => {
    const originVariable = [1, 2, 3, 3, 3, 3, 3, 3];
    const source = {array1: originVariable, array2: originVariable};
    const cloneValue = ngxDeepClone(source);
    expect(source.array1 === source.array2).toBeTruthy();
    expect(cloneValue.array1 === cloneValue.array2).toBeTruthy();
    expect(JSON.stringify(cloneValue.fieldA) === JSON.stringify(cloneValue.fieldB)).toBeTruthy();
  });
});



