# Quartz 4 Customizations

This directory contains customizations to layer on top of the base Quartz 4 repository contents.

Rather than forking the Quartz repository and storing notes within it directly, each time
a build occurs it will be using a fresh clone of the Quartz repository. This means that
customizations will have to be reapplied on top of what is cloned each time, but this will
be handled during the build of the docker image.
