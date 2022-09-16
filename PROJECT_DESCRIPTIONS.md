# picgif

Picgif (no pun intended 👌) allows users to pick their favorite gifs through a live search that goes deep into the GIPHY API. It also lets you stare at random gifs for as long as you want if you want.

## Architecture

### SDK

For this project, I went with the Expo SDK since it provides a list of tools that simplify the creation and development of apps.

The funcionalities were pretty simple and concise, so there was no concern about needing modules and libraries that would require an ejection of the project.

#### TypeScript

Expo also allows projects to get started very easily with it's TS options.

### Navigation and routes

The app's navigation was made with `React Navigation V6` as it is a very resourceful library that allows us to create and customize navigators.

In the scope of this project, we just needed a Stack navigator, so that's what was done.

#### Screens

##### Home

The home screen is the initial route that the app goes to when it finishes loading all its resources and fonts.

It is here that the random gif is generated periodically with the `GifShowcase` component checks if it already has a gif to show and, if not, starts the job to get a random gif every 10 seconds.

This component uses the fixed_height object inside the GIF object that we get from the GIPHY API, which is a little bit more lighter and, as said by them in the docs, it's great for mobile use.

We also have the search bar, which is responsible for huge part of the complexity of the screen. When the user starts typing, we debounce his input so that we don't flood GIPHY's API (and don't get blocked by it also :D).

Every `X`ms delay after the user stops typing we will send out the request to fetch the gif results. We show the results in a 3x3 grid format with animated gifs.

P.S.:

- I noticed that some GIF objects could come without title or even without the url that we used.

  - No title case: I displayed `[picgif]: gif has no title` in the title section
  - No url case: I displayed an error message instead of the image

- One of the requirements stated that the list of results didn't have to be animated, but it never said it should not be. Yes, we do waste more of the user's data when we shows all GIFs, but we could maybe have a data-saver setting that would make all results only show static thumbnails.

##### GifDetails

This screen does exactly as the name suggests. It provides details about a gif.

It represents `Screen 2` from the specifications, where the user goes to after clicking a gif from the result list.

### Styling

The styling of the app was made almost entirely using the `styled-components` library, as it makes it extremely easy to build reusable components that are easy to port to the web if needed.

Also, it allows us to create with very little time a sort of theme for our application, which TS will understand and pickup the autocomplete when we style our components on the styles files.

For the fonts, I did use `react-native-responsive-fontsize`, which allows us to make our texts visibly similar size-wise when comparing many devices. I used this to avoid any sort of unwanted UI deformations with very small/big devices.

### Hooks

The only custom hook created was `useDebounce`. It takes uses React's useState and useEffect in order to, given a certain `X`ms delay, only set the state's value if the incoming value isn't modified in the last `X`ms.

### API

The api was reached using the `axios` lib, which is a promise based http client that is very used.

#### Important mention:

The API key provided was added to the created api's params, in the `api_key` field. The ideal would be to put it in an environment variable with some sort of module to help us pass it from the .env to the app's source code, but I've spared this effort, since it would only take time to implement this with the Expo managed project.
