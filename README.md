# Next.js Learning

## Next.js
It's a framework{libs+conventions+utils} built on top of React.

- ### Structure
  /app is the router folder, here the /app is the router directory where every folder acts as a routing for the app.
  
  eg:  ```/app/user``` makes it so that localhost:3000/user becomes a link, and every such folder requires to have a page.* file which is a simple React Arrow Function.

- ### Rendering
  - Client-Side Rendering
    - Less secure
    - Resource Intensive
    - No SEO
    - Large bundles
    
  - Server-side Rendering
    - More secure
    - Resource efficient
    - SEO
    - Smaller bundles
    
    - <b> But can't</b>
        - Listen to browser events, access browser API, maintain state, use effects.
  <br>
  Usually mixture of both of these if used where only components necessarily needed for client server rendering as done at client side, in Next.Js by default all the components inside it are server sided.

    -  Static/Dynamic Rendering
    
  ```
  'use client';
  //To be placed at the top of the component 
  ```
  This causes the whole component and the one calling it be rendered on the client.

- ### Fetching
  - Client Bad Server Good.
    - Extra round-trip
    - Resource intensive
    - no SEO
    - less secure
    
    fetch() is used the same as in JS but here it automatically caches the results for further usage, and we can also manipulate this behaviour.
    
  Eg, 
    ```
      fetch("", {
          cache:"no-store"
          or
          next: {revalidate:10}
      });
    ```