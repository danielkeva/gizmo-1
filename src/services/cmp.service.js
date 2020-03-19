const cmps = [
    {
        id: 'cmp101',
        type: 'app-nav',
        info: {
            subClass: 'light-and-shiny',
            logo: 'Youre logo here',
            links: [
                {
                    to: '#',
                    txt: 'link'
                }
            ]
        }
    },
    {
        id: 'cmp102',
        type: 'app-header',
        info: {
            subClass: 'light-and-shiny',
            title: 'Header title',
            subTitle: 'Description',
            callToAction: 'Try it now!'
        }
    },
    {
        id: 'cmp112',
        type: 'app-article',
        info: {
            subClass: 'light-and-shiny',
            title: 'Article title',
            subTitle: 'Article title',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
        }
    },

    {
        id: 'cmp103',
        type: 'layout-columns',
        info: {
            children: [
                {}, {}
            ]
        }
    },
    {
        id: 'cmp104',
        type: 'app-card',
        info: {
            title: 'Image Title',
            subClass: 'light-and-shiny',
            imgUrl: 'Youre image here'
        }
    },
    {
        id: 'cmp105',
        type: 'app-footer',
        info: {
            title: 'Cofferights',
            subClass: 'light-and-shiny',
        }
    },
    {
        id: 'cmp106',
        type: 'app-contact',
        info: {
            title: 'Get in touch',
            address:'Tel Aviv Bacher 4',
            phone: '123-456-7890',
            subClass: 'light-and-shiny',
        }
    },
    {
        id: 'cmp107',
        type: 'app-chat',
        info: {
            title: 'Chat',
        }
    }
]

export const cmpService = {
    getById,
    query
}

function query() {
    return Promise.resolve(cmps);
}

function getById(cmpId) {
    let cmp = cmps.find(currCmp => currCmp.id === cmpId)
    let cmpCopy = JSON.parse(JSON.stringify(cmp))
    return Promise.resolve(cmpCopy)
}



