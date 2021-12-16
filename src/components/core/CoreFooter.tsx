import Link from 'next/link'
import CoreTheme from './CoreTheme'

export default function CoreFooter() {
  return (
    <div className="bg-gray-50 mt-20 dark:bg-black dark:bg-opacity-10">
      <div className="max-w-6xl p-8 w-full m-auto">
        <div className="flex justify-between pb-12 pt-10 font-thin dark:text-white">
          <div>
            <h4 className="font-bold mb-1">Wo Sie uns finden</h4>
            <a
              href="https://goo.gl/maps/BvLuxJ7uWyUBH62S7"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                Mooswiesstrasse 32
                <br />
                9200 Gossau SG
              </p>
            </a>
          </div>
          <div className="flex items-center">
            <CoreTheme />
          </div>
        </div>
        <div className="flex justify-between border-t border-white border-solid pt-4 text-white text-sm font-thin opacity-25">
          <div>
            <Link href="/">feg-gossau.ch</Link> - Ein Angebot der Freien
            Evangelischen Gemeinde in Gossau
          </div>
          <div>
            Realisiert durch{' '}
            <a href="https://wanner.work" target="_blank" rel="noreferrer">
              wanner.work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
