```
<template>
  <div class="container">
    <Alert showIcon>info</Alert>
    <Alert showIcon type="success">success</Alert>
    <Alert showIcon type="warning">warning</Alert>
    <Alert showIcon type="error">error</Alert>
    <Alert closable>closable</Alert>
    <Alert closable closeText="关闭">可自定义关闭字样</Alert>
    <Alert>not showIcon</Alert>
    <Alert showIcon>
      <template v-slot:icon>
        <Icon name="lightbulb"></Icon>
      </template>
      自定义icon
    </Alert>
    <Alert desc="Desc" closable showIcon>desc</Alert>
    <Alert type="warning" banner>banner</Alert>
    <Alert closable @onClose="hintText=`closed`">{{hintText}}</Alert>
  </div>
</template>
```

```
npm install vue
```
