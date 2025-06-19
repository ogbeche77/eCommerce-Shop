Seems the API does not support pagination. On logs, I can see the GraphQL query’s offset value is changing as you navigate to another page but the same articles are always returned.
There seems to be a backend limitation concerning the filter. I could not filter articles by category as the backend does not provide that information or does not actually filter by category id.
I started the implementation of the end to end test using playwright.However, due to time constraints, I couldn't finish up.
