(function(){
    const card = /^<!-- (.*$)/gim;

        function parseMarkdown(content) {
        const htmlText = content
            .replace(card,  () => [
                '<div class="card">',
                  '<h4><b>Name</b></h4>',
                    '<p>Description</p> ',
                '</div>'
                ].join(''))
                content = content.replace(card, () => htmlText)
        return content
    }
     function documentationCard(hook, vm) {
        let cardRendered = false;
          return  hook.beforeEach(function(content) {
              cardRendered = card.test(content);
              if (cardRendered) {
                    content = parseMarkdown(content)
              }
              return content;
          });
        };
    
    if (window ) {
        var dom = Docsify.dom;
        $docsify.plugins = [].concat(documentationCard, $docsify.plugins);
    }
})()



