(function(hook) {
    var header = [
        '<header class="card>',
       '<img src="../Assets/logo.png" />',
       '<span>Main Text</span>',
       '</header>',
    ].join('');

    hook.beforeEach(function(html) {
        return html + header;
      });
})

