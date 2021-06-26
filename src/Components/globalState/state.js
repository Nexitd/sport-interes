export let state = {
    TournirCards: [{
            id: 1,
            name: 'Футбол',
            color: 'foot',
            icon: '/assets/images/TournirCards/Group 78.png',
            background: '/assets/images/TournirCards/image 30.jpg'
        },

        {
            id: 2,
            name: 'Хоккей',
            color: 'hoc',
            icon: '/assets/images/TournirCards/Group 330.png',
            background: '/assets/images/TournirCards/image 33.jpg'
        },

        {
            id: 3,
            name: 'Баскетбол',
            color: 'bas',
            icon: '/assets/images/TournirCards/Group 329.png',
            background: '/assets/images/TournirCards/image 31.jpg'
        }
    ],

    PointsTitle: 'Начисление очков',

    Points: [
        {
            count: '+5',
            text: 'за угаданный счет'
        },

        {
            count: '+3',
            text: ' за угаданный исход и разницу мячей'
        },

        {
            count: '+1',
            text: 'за угаданный исход'
        }
    ],

    RulesTitle: 'Правила',

    Rules: [
        {
            icon: '/assets/images/Main/MainBody/Rules/analytics (2) 1.svg',
            text: 'Оцени статистику'
        },

        {
            icon: '/assets/images/Main/MainBody/Rules/Group.svg',
            text: 'Сделай прогноз'
        },

        {
            icon: '/assets/images/Main/MainBody/Rules/soccer-gear 1.svg',
            text: ' Следи за матчем в режиме онлайн'
        },

        {
            icon: '/assets/images/Main/MainBody/Rules/business-and-finance 10.svg',
            text: 'Получи выигрыш'
        }
    ],
}