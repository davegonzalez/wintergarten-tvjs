import ATV from 'atvjs';

ATV.Page.create({
    name: 'home',
    // use a template function from your favourite templating engine
    // or pass a raw template function
    template(data) {
        return `<document>
                  <alertTemplate>
                    <title>${data[0].title}</title>
                    <img src="${data[0].thumbnail.large}" width="1280" height="720"/>
                  </alertTemplate>
                </document>`;
    },
    // pass some raw data to be applied
    // or a data function that returns the data
    ready(options, resolve, reject) {
      ATV.Ajax
         .get('http://api.crystal.dev/videos', {
           headers: {
             Authorization: `Basic ${btoa('bBwUWJzz7JkwpjVEu1nVL2cE3V9uzmXc')}`
           },
           data: JSON.stringify({ query: 'term' })
         })
         .then((xhr) => {
           let response = xhr.response._embedded.videos;
           resolve(response);
         }, (xhr) => {
            // xhr failed
            let response = xhr.response;
            reject({
                status: xhr.status,
                message: response.message
            });
         });
    },
});

// later in your application you can do something like below to navigate to the page
ATV.Navigation.navigate('home')
