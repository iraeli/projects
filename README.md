# projects
This repository is shared by Ira, Marina and Kobi to upload projects and exercises from our meetings.

## Angular Templates (19/07/2019)
What we have discussed today
- We have seen ng-template tag, and noticed that it's content does not appear on the DOM when the page is displayed
- We talked about ng-container, and saw an example of how to use it to add 2 * directives on the same elements
- We have seen how to use ng-container in order to "inject" the template into the container, using **ngTemplateOutlet** strctural directive directive

```html
<ng-container *ngTemplateOutlet="myTemplate">  
</ng-container>
```

- We have also seen that we can create a local variable inside the template using the let-something directive as such:
```html
<ng-template #myTemplate1 let-a="x" let-b="y">
  <h2>I am an h2 element</h2>
  <h3>And I am an h3 element</h3>
</ng-template>
```

- Last, we saw that if we have a property called `$implicit` we do not need to name it specifically so we can define a variable like this:
```html
<ng-template #myTemplate1 let-a="x" let-b="y" let-c>
  <h2>I am an h2 element</h2>
  <h3>And I am an h3 element</h3>
</ng-template>
```
SO here - c is a local variable that is copied from the context's property called `$implicit`

- As a final exmaple, assume we have the following field in the typescript file

```typescript
  dataContext1 = {
    x: 100,
    y: 200, 
    $implicit: {color: 'blue', size: '16px'}
  };

  dataContext2 = {
    x: -20,
    y: 314, 
    $implicit: {color: 'red', size: '42px'}
  };
```

We can define the template like this:
```html
<ng-template #myTemplate let-a="x" let-b="y" let-data>
  <h2>I am an h2 element</h2>
  <h3>And I am an h3 element</h3>
  <div [style.color]="data.color" [style.font-size]="data.size">
    the first variable is = {{a}} 
    B = {{b}}  
  </div>
</ng-template>
```

and use it in ng-container like this:
```html
<ng-container *ngTemplateOutlet="myTemplate;context:dataContext1"></ng-container>
<ng-container *ngTemplateOutlet="myTemplate;context:dataContext2"></ng-container>
```

## Exercise
- Create a component called app-price-list
- Accept input called prices of type number []
- The component should display the list of prices
- Each price that is greater than 1000, should be displayed differently
- To decide how to display the large numbers, the component should also receive an additional input of type TemaplateRef<any> that is called "expensiveTemplate"
- All "exepensive" prices should be displayed using this template
- Use the component 3 times to display the same list but the expensive items should be displayed in different ways:
    - In red
    - In Bold
    - In larger font
