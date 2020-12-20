export class NgxTemplateEngineExecutor {

  // tslint:disable-next-line:ban-types
  constructor(private templateFunc: Function) {
  }

  execute(data: any): string {
    if (typeof data !== 'object') {
      throw new Error('data is not object');
    }
    return this.templateFunc.apply(data);
  }
}
