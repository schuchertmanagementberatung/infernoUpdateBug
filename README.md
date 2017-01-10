# infernoUpdateBug

Minimal Reproduction case for an inferno bug.

## Setup
```
yarn
yarn dev
```
Starts webpack-dev-server.

## Bug
If you click on the button it will change your route. (The query ?p)
This will cause inferno to unmount your components for some reason. Therefore updating the Pure! timestamp. This is not neccesary.
Using React instead of inferno does not have this bug. React properly tracks the Component and does not unmount it. Therefore reducing unneccesary renderings.
