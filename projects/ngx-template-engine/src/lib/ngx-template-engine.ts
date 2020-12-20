/**
 * 关键字正则，用于判断模板中的某一行是否有此类关键字
 */
import {NgxTemplateParser} from './ngx-template-parser';
import {NgxTemplateConfigInterface, NgxTemplateDefaultConfig} from './ngx-template-default-config';
import {tagRegBuilder} from './util/tag-reg-builder';
import {NgxTemplateEngineExecutor} from './ngx-template';

export const keyWordsReg = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;

export class NgxTemplateEngine {

  constructor(private templateConfig: NgxTemplateConfigInterface = {}) {
    this.templateConfig = Object.assign(new NgxTemplateDefaultConfig(), templateConfig);
  }

  /**
   * 使用模板引擎时，可以只传入html模板，获取一个引擎执行器，用户可以使用这个执行器，多次绑定value.
   */
  // tslint:disable-next-line:ban-types
  buildExecutor(htmlStr: string): NgxTemplateEngineExecutor {
    if (typeof htmlStr !== 'string') {
      return new NgxTemplateEngineExecutor(new Function());
    }

    const tagReg = tagRegBuilder(this.templateConfig.startTag, this.templateConfig.endTag);
    const parsedHtmlStr = new NgxTemplateParser(tagReg, this.templateConfig.compress).parse(htmlStr);

    const templateFunc = new Function(parsedHtmlStr.replace(/[\r\n\t]/g, ''));
    return new NgxTemplateEngineExecutor(templateFunc);
  }

  template(htmlStr: string, data?: any): string {
    return this.buildExecutor(htmlStr).execute(data);
  }

}

