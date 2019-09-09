import {
    tv,
    thermostat,
    lock,
    lamp,
    ac,
    sunRiseIcon,
    moonIcon,
    dayLight,
} from './Assets'

const devicesList = [
    {
        name: 'Thermostat',
        image: thermostat,
        description: 'In Dining room',
        mode: [
            {
                name:'Morning',
                icon: sunRiseIcon,
                defaultIntensity: 50,
            },
            {
                name:'Day',
                icon: dayLight,
                defaultIntensity: 100,
            },
            {
                name:'Night',
                icon: moonIcon,
                defaultIntensity: 30,
            }
        ],
        intensity: {
            start: 0,
            end: 100,
            defaultValue: 64,
        },
    },
    {
        name: 'Bed Lamp',
        image: lamp,
        description: 'In Bed room',
        shades: [
            {
                color: "#FF4563",
                isSelected: true,
            },
            {
                color: "#8245E6",
                isSelected: false,
            },
            {
                color: "#4AC0E0",
                isSelected: false,
            },
            {
                color: "#1089EB",
                isSelected: false,
            },
            {
                color: "#C791CD",
                isSelected: false,
            }
        ],
        mode: [
            {
                name:'Morning',
                icon: sunRiseIcon,
                defaultIntensity: 50,
            },
            {
                name:'Day',
                icon: dayLight,
                defaultIntensity: 30,
            },
            {
                name:'Night',
                icon: moonIcon,
                defaultIntensity: 100,
            }
        ],
        intensity: {
            start: 0,
            end: 100,
            defaultValue: 64,
        }
    },
    {
        name: 'Noria AC',
        image: ac,
        description: 'In Bed room',
        mode: [
            {
                name:'Morning',
                icon: sunRiseIcon,
                defaultIntensity: 50,
            },
            {
                name:'Day',
                icon: dayLight,
                defaultIntensity: 100,
            },
            {
                name:'Night',
                icon: moonIcon,
                defaultIntensity: 30,
            }
        ],
        intensity: {
            start: 0,
            end: 100,
            defaultValue: 64,
        }
    },
    {
        name: 'Door Lock',
        image: lock,
        description: 'In Bed room'
    },
    {
        name: 'LG TV',
        image: tv,
        description: 'In Living room'
    },
    {
        name: 'Thermostat',
        image: thermostat,
        description: 'In Bed room',
        mode: [
            {
                name:'Morning',
                icon: sunRiseIcon,
                defaultIntensity: 50,
            },
            {
                name:'Day',
                icon: dayLight,
                defaultIntensity: 100,
            },
            {
                name:'Night',
                icon: moonIcon,
                defaultIntensity: 30,
            }
        ],
        intensity: {
            start: 0,
            end: 100,
            defaultValue: 64,
        }
    }
]

export {
    devicesList,
}