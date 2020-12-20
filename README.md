# AwesomeWheel
nice wheels for TypeScript

## DeepClone([source code](https://github.com/plusGo/awsome-wheel/blob/main/projects/ngx-deep-clone/src/lib/ngx-deep-clone.ts))
*API*
```TypeScript

  const cloneValue = ngxDeepClone(source);        

```

## TemplateEngine([source_code](https://github.com/plusGo/awsome-wheel/tree/main/projects/ngx-template-engine))
*API*
```TypeScript
    const templateEngine = new NgxTemplateEngine();
    const html = 'Hello, my name is <%this.name%>. I\'m <%this.age%> years old.';    
    const engineExecutor = templateEngine.buildExecutor(html); 
    const resultHtml = engineExecutor.execute({name: 'mhl',age: 29})      
```
