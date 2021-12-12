export default function CoreFooter() {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-[#1c1c1c]">
      <div className="flex justify-between max-w-6xl p-8 w-full">
        <div>
          <p className="dark:text-white">feg © {new Date().getFullYear()}</p>
        </div>
        <div>
          <p className="dark:text-white">
            Powered by{' '}
            <a target="_blank" rel="noreferrer" href="https://wanner.work">
              wanner.work
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
