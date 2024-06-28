# Quickstart 

1. Clone repo 
2. Run below commands

```
yarn
yarn dev
```

3. App should run on localhost:3000
4. To run the test suite run the following command

```
yarn test
```



### Overview & Approach 
- This project was built to display products for a fictional e-commerce store to potenial customers. 
- With that consideration performance and SEO were considered primary drivers for the decisions made in the front end.
- SSG was implemented in order to optimise the above as new pages are created on each request. If product data changes this is immediately reflected (vs SSG)
- SSG is favourable to client side fetching for faster page loads and enhanced SEO (as crawler can see whole page)
- For navigation/sorting between categories URL query parameters were used to track state of selected filtering. They provide an additional benefit to a consumer in
allowing links to specific categories which could not be done if tracked purely on the client (e.g. in a useState).
- Server side fetching also ensures the client has no access to the product data endpoint which increase the security of our application.
- Angular commit messaging convention was used for commits

### Process
- Followed create next app
- Followed configuration for pages router
- Created basic folder structure and routes
- Implemented components and data fetching
- Finished UI
- Installed testing config

## known issues

- Warning on running test suite with Next Image expecting fetchPriority prop
- Problem should resolve with upgrade to Next 14 or React 19.
- source: https://github.com/vercel/next.js/issues/65161
