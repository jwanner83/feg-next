import { useEffect, useState } from 'react'

export default function CoreTheme() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system' | undefined>(
    undefined
  )

  const activateTheme = (mode: 'dark' | 'light' | 'system' | undefined) => {
    console.log('mode', mode)

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
    setTheme('dark')

    if (persist) {
      localStorage.setItem('theme', 'dark')
    }
  }

  const setLight = (persist: boolean) => {
    document.documentElement.classList.remove('dark')
    setTheme('light')

    if (persist) {
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    console.log('localstorage', localStorage.getItem('theme'))
    activateTheme(
      localStorage.getItem('theme') as 'dark' | 'light' | 'system' | undefined
    )
  }, [])

  return (
    <div
      className="rounded-full bg-gray-200 p-4 h-16 w-16 md:p-2 md:h-8 md:w-8 relative overflow-hidden cursor-pointer"
      onClick={() => (theme === 'dark' ? setLight(true) : setDark(true))}
    >
      <div className="rounded-full bg-black h-full">
        <div
          className={`rounded-full absolute top-0 left-0 h-10 w-10 md:h-5 md:w-5 bg-gray-200 transition-transform ${
            theme === 'dark' && 'scale-0'
          }`}
        ></div>
      </div>
    </div>
  )
}
