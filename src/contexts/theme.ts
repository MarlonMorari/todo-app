import IconSun from '/images/icon-sun.svg'
import IconMoon from '/images/icon-moon.svg'

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor: 'bg-purple-300',
            textColor: 'text-navy-850',
        },
        todo: {
            backgroundColor: 'bg-gray-50',
            borderColor: 'border-purple-300',
            textColor: 'text-navy-850',
        },
        icon: IconMoon
    },

    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor: 'bg-navy-950',
            textColor: 'text-gray-300',
        },
        todo: {
            backgroundColor: 'bg-navy-900',
            borderColor: 'border-purple-700',
            textColor: 'text-gray-300',
        },
        icon: IconSun
    }

}