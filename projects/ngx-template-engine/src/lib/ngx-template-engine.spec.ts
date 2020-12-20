import {keyWordsReg, NgxTemplateEngine} from './ngx-template-engine';
import {tagRegBuilder} from './util/tag-reg-builder';

describe('NgxTemplateEngine', () => {

  beforeEach(() => {
  });

  it('simple template engine', () => {
    const templateEngine = new NgxTemplateEngine();
    const template = 'Hello, my name is <%this.name%>. I\'m <%this.age%> years old.';
    const val = templateEngine.template(template, {
      name: 'mhl',
      age: 29
    });
    expect(val).toEqual('Hello, my name is mhl. I\'m 29 years old.');
  });

  it('use template engine executor success', () => {
    const templateEngine = new NgxTemplateEngine();
    const template = 'Hello, my name is <%this.name%>. I\'m <%this.age%> years old.';
    const engineExecutor = templateEngine.buildExecutor(template);
    expect(engineExecutor.execute({
      name: 'mhl',
      age: 29
    })).toEqual('Hello, my name is mhl. I\'m 29 years old.');
    expect(engineExecutor.execute({
      name: 'hpy',
      age: 18
    })).toEqual('Hello, my name is hpy. I\'m 18 years old.');
  });

  it('use for each success and compress success', () => {
    const templateEngine = new NgxTemplateEngine({compress: true});
    const template = `
    <ul>
    <% for (var index=0;index<this.skills.length;index++){%>
    <li> <% this.skills[index] %></li>
    <% } %>
    </ul>
    `;
    const engineExecutor = templateEngine.buildExecutor(template);
    const result = engineExecutor.execute({
      skills: [0, 1, 2, 3, 4, 5]
    });
    console.log(result);
    expect(result).toEqual('<ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>');
  });

});

describe('engine tag reg builder', () => {
  it('get default engine tag reg success', () => {
    const defaultReg = tagRegBuilder();
    const defaultMatch = defaultReg.exec('dsajklsaddsa<%123%>asdjkldasj');

    expect(defaultMatch[0]).toEqual('<%123%>');
    expect(defaultMatch[1]).toEqual('123');

  });

  it('get custom engine tag reg success', () => {
    const customReg = tagRegBuilder('{{', '}}');
    const customMatch = customReg.exec('dsajklsaddsa{{123}}asdjkldasj');

    expect(customMatch[0]).toEqual('{{123}}');
    expect(customMatch[1]).toEqual('123');
  });
});

describe('key words reg', () => {
  it('judge key words success', () => {
    const match = keyWordsReg.exec('if');
    expect(match[0]).toEqual('if');

    const match2 = keyWordsReg.exec('eif');
    expect(match2).toBeNull();
  });
});



