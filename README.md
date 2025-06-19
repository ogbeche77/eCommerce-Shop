## home24 Frontend Tech Task

## Table of contents

- [Screen recording](#screen-recording)
- [Features Implemented](#features-implemented)
- [How to run the app](#How-to-run-the-app)

## Screen recording

![ScreenRecording-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/60bc5777-8859-4146-bf96-f1e96f09e0e1)

## Features implemented

- Implemented Hamburger menu, Pagination and Search functionality
- Converted existing components to Functional component and used react hooks where needed
- Replace XMLHttpRequest with fetch
- Added error handling and loading state where appropriate
- Styled using Emotion styled components
- Implemented add to cart functionality and data persistence in local storage
- Designed new checkout page with provided data from graph ql
- Persisted cart state, and ability to increase, decrease and remove product quantity from cart. Total price was also added
- All cart operationsare available via router context
- Lazy load implemented using Intersection observer API so images are only available on view to improve performance
- Unit test was added for ArticleCard, CheckoutPage and ProductList components
- e2e test (Playwright) was also implemented

## How to run the app

Both the server and client need to be installed and started.

##### Server

1. `cd server`
2. `yarn`
3. `yarn start`

##### Client

1. `cd ../client`
2. `yarn`
3. `yarn start`
