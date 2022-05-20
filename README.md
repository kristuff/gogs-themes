# gogs-themes
> A attempt to make my self-hosted gogs ***dark*** and ***responsive***

This is very hacky, we need to overide 3 CSS libraries 😭. But is does the job, at least on my machine 😆. 

Not all page will be *fully* responsive, but main public pages look more frendly. 
Not all pages have been treated. At this time, maybe missing things, mostly on admin pages.

## Screenshots

![project-commit-desktop](/screenshots/project-commit-desktop.png)

![project-desktop](/screenshots/project-desktop.png)

![project-desktop](/screenshots/project-desktop.png)

![project-desktop](/screenshots/project-list-mobile.png)

![project-desktop](/screenshots/project-list-desktop.png)

Small bonus, you can choose the accent color among the following:
yellow, red, blue, green magenta.

![themes](/screenshots/themes.png)

## Usage

You need to the follow the instructions [here](https://gogs.io/docs/features/custom_template).

-   First place the `.css` file(s) under the public directory (`custom/public/css/`). 

-   Then link the desired `.css` in your custom template:

    Edit the file `custom/templates/inject/head.tmpl` and add a link to desired stylesheet: 

    ```
    <link rel="stylesheet" href="/css/kristuff.gogs.dark.min.css">
    ```

    Or

    ```
    <link rel="stylesheet" href="/css/kristuff.gogs.dark-accent-blue.min.css">
    ```

- You need to restart **gogs** to apply changes to template. Then, you don't need to restart to apply changes in `.css`.  

## License

The MIT License (MIT)

Copyright (c) 2022 Christophe Buliard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.