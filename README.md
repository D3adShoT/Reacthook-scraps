-------------------------------

React - hooks ----> helps to access react features without writing a class (features like 'state of the component')
added after 16.8
DOnt work inside a class. since the classes dont minify very well and their hot reloading makes it more unreliable. To overcome that we use hooks.
there is no way to reuse stateful component code logic.. to establish that we use hooks

limitation of hooks -->
> always call hooks on the top level.
> Never call hooks inside a loop, recursion and conditions.
>always call them in react functional components NOT any javaScript components.



--------------------