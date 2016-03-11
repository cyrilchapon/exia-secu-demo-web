# ROADMAP.md

## Main features

### Create *'Customer'* Model service

One should create a service (ie. a *Model* service) for **Customer** resource, according to [backend roadmap](https://github.com/cyrilchapon/exia-secu-demo-api/blob/fce523b0f17e89ec0192f5e1a520d395b2e7bc83/ROADMAP.md#add-customer-resource)

The model service should :
- Be a wrapper for HTTP RESTful calls (using [Restangular](https://github.com/mgonto/restangular))
- Define a clear convention for it's methods (egg. `function save(customer)`, `function fetchAll()`, ...)
- Each of those methods should be asynchronous, idealy returning a [$q](https://docs.angularjs.org/api/ng/service/$q) promise
- Be documented in [README.md](README.md) and contract-implemented, before being actually implemented, so we can start implementing interfaces stuff with the temporary mock service

### Create auth services

We need a service for authentication. Obviously, backend exposes a [jwt](https://github.com/cyrilchapon/exia-secu-demo-api/tree/fce523b0f17e89ec0192f5e1a520d395b2e7bc83#authentication) auth

The service must :
- Wrap HTTP call for signin (using [Restangular](https://github.com/mgonto/restangular))
- Expose an asynchronous `signin` method. Idealy, returning a [$q](https://docs.angularjs.org/api/ng/service/$q) promise

### Create auth route and interface

We need an authentication user interface.

It should :
- Use auth service
- Be displayed whenever we are not authenticated (403 received on any API call ?)
- Display an "email" field, a "password" one, and a "authenticate" button

### Create customers route and interface

We want to have a list of customers displayed in a page

The page should :
- Use customer model service to fetch all users from backend
- Display customers inside a [bootstrap table](http://getbootstrap.com/css/#tables)

## Auxiliary features

### Pagination on customers

Customers list view could be paginated, using [https://angular-ui.github.io/bootstrap/#/pagination](https://angular-ui.github.io/bootstrap/#/pagination)

**Only talking about **client-side** pagination*
