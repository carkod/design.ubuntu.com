# design.ubuntu.com

The codebase for <http://design.ubuntu.com>.

## Local development

The simplest way to run the site locally is with the [dotrun snap](https://snapcraft.io/dotrun):

```bash
dotrun
```

And browse to <http://127.0.0.1:8011>.

### Building CSS

For working on [Sass files](_sass), you may want to dynamically watch for changes to rebuild the CSS whenever something changes.

To setup the watcher, open a new terminal window and run:

``` bash
./run watch
```

# Deploy
You can find the deployment config in the deploy folder.
