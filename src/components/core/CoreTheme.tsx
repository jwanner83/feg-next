import { useEffect, useState } from 'react'

export default function CoreTheme() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system' | undefined>(
    undefined
  )

  const activateTheme = (mode: 'dark' | 'light' | 'system' | undefined) => {
    switch (mode) {
      case 'light':
        setLight(true)
        break
      case 'dark':
        setDark(true)
        break
      default:
        setSystem()
        break
    }
  }

  const setSystem = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setDark(false)
      : setLight(false)

    localStorage.setItem('theme', 'system')
  }

  const setDark = (persist: boolean) => {
    document.documentElement.classList.add('dark')

    if (persist) {
      localStorage.setItem('theme', 'dark')
    }
  }

  const setLight = (persist: boolean) => {
    document.documentElement.classList.remove('dark')

    if (persist) {
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [setTheme])

  useEffect(() => {
    activateTheme(theme)
  }, [theme])

  const button =
    'py-2 px-4 bg-gray-50 dark:bg-black dark:bg-opacity-10 text-black dark:text-white'
  const buttonActive =
    'py-2 px-4 bg-transparent font-bold text-black dark:text-white'

  return (
    <div className="p-2 bg-[#eee] dark:bg-[#1c1c1c] text-sm">
      <button
        className={theme === 'light' ? buttonActive : button}
        onClick={() => setTheme('light')}
      >
        Hell
      </button>
      <button
        className={theme === 'system' ? buttonActive : button}
        onClick={() => setTheme('system')}
      >
        System
      </button>
      <button
        className={theme === 'dark' ? buttonActive : button}
        onClick={() => setTheme('dark')}
      >
        Dunkel
      </button>
    </div>
  )
}
