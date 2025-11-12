import { useContext } from 'react'
import { themeConfig } from '../../contexts/theme'
import { ThemeContext } from '../../contexts/ThemeContext'

interface ToDoContainerProps {
    children: React.ReactNode;
}

export const ToDoContainer = ({ children } : ToDoContainerProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
            <div className={`${themeConfig[theme].layout.heroClass}`}>
                <div className="max-w-175 m-auto p-8">
                    {children}
                </div>
            </div>
        </main>
    )
}