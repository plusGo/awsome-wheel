/**
 * 模板tag的构建器，默认是<%%>，用户可定制化，如：{{}}，{%%}等
 * 1、默认产生的正则如：/<%([^%>]+)?%>/g
 *  正则表达式解析：
 *  a、<% %>：匹配收尾符合的字符串
 *  b、()：小括号达标提取里面的内容
 *  c、[^%>+]:中括号+^表示不是%>的内容，+是提取多次，中括号表示范围
 */

export const tagRegBuilder = (startTag = '<%', endTag = '%>'): RegExp => {
  return new RegExp(`${startTag}([^${endTag}]+)?${endTag}`, 'g');
};
