export default function Badge() {
  return <>
    <div className="relative h-24 flex justify-between items-center px-7 cursor-pointer">
      <h2 className="relative z-20 font-bold text-white">Angebote</h2>
      <div className="relative z-20">
        <svg fill="#fff"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12l-11-8v6h-13v4h13v6z"/></svg>
      </div>
      <div className="absolute z-10 h-full w-full left-0 bg-gradient-to-r from-black to-transparent" />
      {/*<img className="absolute h-full w-full top-0 left-0 object-cover" src="https://feg-gossau.ch/wp-content/uploads/2020/09/laughing-scaled.jpg" />*/}
    </div>
  </>
}