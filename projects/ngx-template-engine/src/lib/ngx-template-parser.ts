/**
 * 模板解析器.
 * 作用：将模板字符串解析成函数字符串
 * eg: '<%userName%> like basketball' 解析为 userName + 'like basketball'
 */
import {keyWordsReg} from './ngx-template-engine';
import {tagRegBuilder} from './util/tag-reg-builder';

export class NgxTemplateParser {

  constructor(private templateTagReg: RegExp = tagRegBuilder(),
              private compress = false) {
  }

  parse(template: string): string {
    let code = 'var r=[];\n';
    let cursor = 0;

    let match = this.templateTagReg.exec(template);
    while (match) {
      code += this.parseLine(template.slice(cursor, match.index));
      code += this.parseLine(match[1], true);
      cursor = match.index + match[0].length;

      match = this.templateTagReg.exec(template);
    }

    // 将没有包含表达式的字符串添加到最后一行
    code += this.parseLine(template.substr(cursor, template.length - cursor));
    code += 'return r.join("")';

    if (this.compress) {
      code = code.replace(/[\r\n\t]/g, '');
    }

    console.log(code);
    return code;
  }

  private parseLine(line: string, isJs: boolean = false): string {
    if (this.compress && line) {
      line = line.trim();
    }
    if (isJs) {
      line = line.match(keyWordsReg) ? `${line}\n` : `r.push(${line});\n`;
    } else {
      line = `r.push("${line.replace(/"/g, '\\"')}");\n`;
    }
    if (this.compress && line) {
      line = line.trim();
    }
    return line;
  }
}
