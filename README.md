# React + TypeScript + Vite (Starter)

## Scripts

```json
  "scripts": {
    // stock
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",

    //custom
    "test": "vitest", // runs all unit tests in src/test directory
    "clean": "rm -rf node_modules package-lock.json && npm install", // clean install
    "gc": "bash scripts/gc.sh $1" // creates component in src/components directory
  }
```

## Components 

### Vite Components (using stock CSS)
Located in ``src/components/vite``

- Anchor
- Button
- Container
- Text

### Helper Components (using stock CSS)
Located in ``src/components/``

#### RenderIf
```jsx
// before
  {
    condition? <ComponentA/>: <ComponentB/>
  }
```

```jsx
// after
<RenderIf condition={condition} fallback={<ComponentB/>}>
  <ComponentA/>
</RenderIf>
```

#### Break 

```html
<!-- before -->
<br/>
<br/>
<br/>
...
```

```jsx
// after
<Break num={3} />
```
## Functions

### Hooks

#### useCount
```ts
const [count, increment, decrement, reset] = useCount() // default value is 0
```

#### useToggle
```ts
const [active, toggle] = useToggle() // default value is false
```

#### useArray
```ts
const {
  arr,
  pushBack,
  pushFront,
  insert, 
  popBack,
  popFront,
  remove,
  clear,
  reset,
  sort
} = useArray<E>() // default value is blank array
```

### useRandom

```ts
const rand = useRandom<string>(["msi", "asus", "gigabyte", "asrock"])
```


### usePublisher

```tsx
const publish = usePublisher()

...
<button onClick = {() =>publish<E>("EVENT_NAME", DATA)}>click me</button>

```

### useSubscriber

```ts
useSubscriber<E>("EVENT_NAME", (eventData:E) =>{
  // perform action on eventData
})

```

### Regular Functions
Located in ``src/helper/functions``

- ``optionals`` avoid undefined/null errors by wrapping possibly undefined/null values in param and returning a default value
  
  - ``optional<E>`` => default value required
  - ``optionalAny`` => default value required
  - ``optionalObject`` => blank object
  - ``optionalArray<E>`` => blank array
  - ``optionalNumber`` => 1
  - ``optionalBoolean`` => true
  - ``optionalString`` => blank string

- ``updateState<E>`` used for updating complex states through reducers via key-value setting

- ``blankClick`` click events w/ no effect

- ``sorting criteria`` used for sorting arrays

  
  ```ts
  //ascending
  arr.sort(ascending)

  // descending
  arr.sort(descending)
  ```

  