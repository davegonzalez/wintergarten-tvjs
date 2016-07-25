import ATV from 'atvjs';

ATV.Page.create({
    name: 'home',
    // use a template function from your favourite templating engine
    // or pass a raw template function
    template(data) {
        return `<document>
                    <alertTemplate>
                        <title>${data.title}</title>
                        <description>${data.description}</description>
                    </alertTemplate>
                </document>`;
    },
    // pass some raw data to be applied
    // or a data function that returns the data
    data: {
        title: 'Now this is working yeah?',
        description: 'This is my super awesome homepage created using ATVjs.'
    }
});

// later in your application you can do something like below to navigate to the page
ATV.Navigation.navigate('home')
