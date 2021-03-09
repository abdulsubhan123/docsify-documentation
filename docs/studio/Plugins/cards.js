(function(){
    const card = /^#card*\s*[0-9]*$[\r\n]*\s*title=[A-Za-z]+[a-z]*\s*[A-Za-z]+/gm;
    function parseMarkdown(content) {
            let cards = content.match(card) || [];
            cards.map((item, i ) => {
            let CardDetails = item.split('=')
                content = content.replace(item, () => 
                (
                    '<div class="card">'+
                        '<img src="/studio/Assets/logo.png" class="card-img-top" alt="img-logo">'+
                        '<div class="card-body">'+
                            `<h5 class="card-title font-weight-bold text-primary">${CardDetails[1]}</h5>`+
                            '<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>'+
                            '<p class="card-text ">Some Description</p>'+
                            '<a href="/#/studio/AssetStore/ListOfAsset" class="card-link text-primary">List of Asset Stores</a>'+
                        '</div>'+
                    '</div>'
                ))
            })
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
