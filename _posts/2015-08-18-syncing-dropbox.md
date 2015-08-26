---
layout: post
title: Instant text file syncing
comments: true
excerpt_separator: <!--more-->
url: /sycing-dropbox
---

# Sync plain text files through Dropbox outside of the ~/Dropbox folder
I love using [Org-mode](http://orgmode.org/), a plain text outlining and task management envrionment/tool/lifestyle. As such, I typically have a `~/org/` directory on all of my machines which pretty much contains all of my life in them. In the past, I have generally kept them in sync by keeping them as a git repository pushing and pulling changes. This became problematic quickly; sometimes before leaving work I would forget to commit and push my changes from the day and my files at home are out of date. That's when I came up with this solution.

<!--more-->
## What
This method uses Dropbox, a tool I was using anyway, to instantly sync files that I want to keep out of the `~/Dropbox` folder. In order to do this, I use symlinks from the external file or folder to `~/Dropbox/some/path`. Then, when any change is made to the symlinked directory, changes will be monitored and synced through to all other machines.


## How
To make this work, open up a terminal and enter the following commands:

{% highlight bash %}
ln -s /path/to/folder/that/you/want/to/sync/ ~/Dropbox/folder/name
{% endhighlight %}

**That's it!** This link can be created on as many machines as you want, just link the directory from each computer to the same Dropbox folder. Note: for best results, start with the directory having the same contents on each computer so you don't overwrite anything. After that, carry on knowing that changes will be synced instantly.

## A word of caution

While this method works great for links to external files and directories, things can get *pretty* messed up if you attempt to symlink files to other files or directories within the Dropbox folder. While they may seem to work at first, Dropbox does not support this and it can lead to some pretty strange behavior. You can read more about this [here](http://www.paulingraham.com/dropbox-and-symlinks.html).
