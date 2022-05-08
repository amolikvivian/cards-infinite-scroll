# virtual-cards

### Techologies:

-   Vue3
-   Vuex - State Management
-   TailwindCSS

### Features:

- Infinite Scroll using ```Intersection Observer API```
- Tab views ```[Your, All, Blocked]``` with tab change handled through routes
- Filtering based on card type and cardholder name
- Search using card names

### Paths

```/``` : Home View

```/cards/:id``` : Cards - **id** acts as route params handling tab view 
change and data fetching, filtering and searching.

### Mock API

The mock API was generated with [JSON Placeholder](https://jsonplaceholder.typicode.com/). It sets the API with the ```db.json``` file from the current repository.

JSON Placeholder comes with its own method of pagination by using `_limit` and `_page` query parameters, which was used to with the infinite scroll component.

### For this project, we have set the ```limit - 4``` as the mock data is a total 6 objects.

Base URL -
``` https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data ```

GET Request example endpoint [here.](https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?_page=1&_limit=4&status=active )

 -  limit - 4
 -  page - 1
 -  status - active



## Setup Project


### Install dependencies

```npm install```

### Compile and hot-reload for development

```npm run serve```

### Compile and minify for production

```npm run build```

### Lints and fixes files

```npm run lint```