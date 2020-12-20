export interface NgxTemplateConfigInterface {
  /**
   * 开始标签 默认为 '<%'
   */
  startTag?: string;

  /**
   * 结束标签 默认为 '%>'
   */
  endTag?: string;

  /**
   * 是否压缩输出的html 默认为false
   */
  compress?: boolean;

  /**
   * 默认是否对输出内容进行html转义 默认为true
   */
  escape?: boolean;
}

export class NgxTemplateDefaultConfig implements NgxTemplateConfigInterface {

  startTag = '<%';


  endTag = '%>';


  compress = false;


  escape = false;
}
