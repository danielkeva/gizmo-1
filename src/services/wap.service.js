const wap =
{
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [
        {
            id: 'cmp100',
            type: 'app-nav',
            info: {
                subClass: 'light-and-shiny / dark-and-magic',
                logo: 'gizmo',
                links: [
                    {
                        to: 'footer Id',
                        txt: 'go down'
                    }
                ]
            }
        },
        {
            id: 'cmp101',
            type: 'app-header',
            info: {
                subClass: 'light-and-shiny / dark-and-magic',
                title: 'We Sell Corona',
                subTitle: 'and alcojel',
                callToAction: 'Try it now!'
            }
        },
        {
            id: 'cmp102',
            type: 'app-map',
            info: {
                title: 'We Sell Corona',
                subType: 'sattelite',
                center: {lat: 32.519, lng: 34.9045 },
                markers: [{ position: {lat: 32.519, lng: 34.9045 } }]
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
                title: 'Do it now',
                subClass: 'or later',
                imgUrl: ''
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
        },
        {
            id: 'cmp108',
            type: 'app-social-links',
            info: {
                links:[
                    {to: 'facebook', url: 'www.facebook.com'}
                ]
            }
        }
    ]
}

export const wapService = {
    query,
    addCmp
}

function query() {
    return Promise.resolve(wap);
}


function addCmp(cmp) {
    cmp.id = _makeId()
    wap.cmps.push(cmp);
    return Promise.resolve(cmp)
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

// app-social-links