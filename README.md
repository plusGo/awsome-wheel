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
    const resultHtml = engineExecutor.execute({name: 'Tom',age: 29})      
    
    expect(resultHtml).toEqual('Hello, my name is mhl. I\'m 29 years old.');
```

## Promise([source_code](https://github.com/plusGo/awsome-wheel/tree/main/projects/ngx-template-engine))
*API*
```TypeScript
  ```

## RXJS([source_code](https://github.com/plusGo/awsome-wheel/tree/main/projects/ngx-template-engine))
*API*
```TypeScript
  ```

