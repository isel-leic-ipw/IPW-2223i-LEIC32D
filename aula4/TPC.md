Implement the following JavaScript functions:

1. `filterProperties(propNames,obj)`

   Receives a string array in `propNames` and an object in `obj`. Returns a new object with the properties from `obj` whose names are present in `propNames`. If `propNames` contains names that do not exist in `obj`, those properties are not added to the returned object.

   Example:

   ```javascript
   const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}

   const props = ['b', 'd', 'g', 'a']
   const oFiltered = filterProperties(props, o)
   // oFiltered: {a: 1, b: 'Thor', d: {x: 10}}
   ```

1. `filterPropertiesN(propNames,objs)`

   Receives a string array in `propNames` and an object array in `objs`. Returns a new object array with objects produced by applying the `filterProperties` function with `propNames` to each object in `objs`.

   NOTE: In this implementation, the usage of any cycle instruction (for/while) or the `Array.forEach` method reduces the grade in 50%.

   ```javascript
   const objs = [
      {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
      {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
      {x: 'Vision', y: false}
   ]

   const props = ['b', 'd', 'g', 'a']
   const objsFiltered = filterPropertiesN(props, objs)
   /*
    objsFiltered: [
      {a: 1, b: 'Thor', d: {x: 10}},
      {b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
      { }
   */
   ```
