---
layout: post
title: Using Knockoutjs' renderTemplate method
comments: true
url: /ko-render-template
---

# Knockout's renderTemplate method
Knockoutjs supplies a `renderTemplate` method, a way to dynamically generate this HTML at runtime and also data bind it to a separate view model. Unfortunately, this handy function is embarassingly underdocumented. [This](http://aboutcode.net/2012/11/15/twitter-bootstrap-modals-and-knockoutjs.html) blog post does a good job of explaining its use but it covers a rather specific use case and can be information overload when learning about this function for the first time.

### `renderTemplate` takes five parameters:

templateName
: The ID of the template to render

viewModel
: The view model to data bind to the template

options
: Additional options passed to the rendering engine. We'll be providing an afterRender callback here.

target
: Where to render the template, such as a <div> element.

renderMode
: When this is "replaceNode" the target element is replaced with the rendered output.
: The rendered elements do not necessarily appear in the DOM immediately.

## Use
Using `renderTemplate` requires two things:

* A `<script type="text/html">` tag with an id.
* A call to `ko.renderTemplate` somewhere in your JS.

### A simple example

* Our simple template
{% highlight html %}
<script type="text/html" id="uniqueTemplateId">
  <textarea data-bind="textInput: value" class="form-control">
</script>
{% endhighlight %}

* Rendering this template in ko
{% highlight javascript %}
ko.renderTemplate(
    // templateName
    'uniqueTemplateId',
    // ViewModel
    // just an empty object
    {},
    // Options
    {},
    // target
    this
);
{% endhighlight %}

Here, we create a simple textarea template that is called and bound to no ViewModel and passed no options. This is great for simple use cases such as rendering some html in a `bootbox` modal.

### A more complex example
* A template for a comment input
{% highlight html %}
<script type="text/html" id="comment">
<div class="input-group">
 <input class="form-control registration-editor-comment" type="text" data-bind="value: nextComment, valueUpdate: 'keyup'" />
  <span class="input-group-btn">
   <button class="btn btn primary" data-bind="click: $data.addComment,
   enable: $data.allowAddNext">
   Add
</script>
{% endhighlight %}

* Rendering this
{% highlight javascript %}
var Comment = function {
  var self = this;
  this.value = ko.observable();
}

// ...

ko.renderTemplate(
    // templateName
    'comment',
    // viewModel
    Comment,
    // options
    {
      afterRender: function (nodes) {
      // resolve some deferred element
      // or make a call to save the comment
      }
    },
    // target
    this
)
{% endhighlight %}

In this example, we bind the comment template to `Comment` viewModel, and pass `renderTemplate` an afterRender option that could resolve some deferred element, make some call, or do what ever needs to happen when this template renders.

---
That sould be all the information you need to start using `renderTemplate`. I definitely recommend reading the blog post I mentioned above. It provieds loads of information and much more nuanced examples.
