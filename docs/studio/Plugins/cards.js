(function(){
         const card = /^#card\s[0-9]$\n^[A-Za-z]*\s*=*.*\n^[A-Za-z]*\s*=[A-Za-z0-9]+[a-z]*\s?,\n^[A-Za-z]*\s*=[A-Za-z0-9]*\s?,\n^[A-Za-z]=*.*/gm
    function parseMarkdown(content) {
            let cards = content.match(card) || [];
            cards.map((item, i ) => {
            let CardDetails = item.split('=')
            const logo = CardDetails[1].split(',')[0]
            const title = CardDetails[2].split(',')[0]
            const subTitle = CardDetails[3].split(',')[0]
            const link = CardDetails[4].split(',')[0]
            const linkName = CardDetails[3].split(',')[1]
                content = content.replace(item, () =>
                (
                    '<div class="card">'+
                        `<img src="${logo}" class="card-img-top" alt="img-logo">`+
                        '<div class="card-body">'+
                            `<h5 class="card-title font-weight-bold text-primary">${title}</h5>`+
                            `<h6 class="card-subtitle mb-2 text-muted">${subTitle}</h6>`+
                            '<p class="card-text ">Some Description about the card</p>'+
                            `<a href="${link}" class="card-link text-primary">${linkName}</a>`+
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
