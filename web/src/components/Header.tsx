import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      data-testid="header"
      className="w-full h-20 center bg-neutral-700 flex justify-center items-center"
    >
      <Link href={'/dashboard'}>
        <Image
          src={'/logo.png'}
          alt="Picture of the author"
          width={120}
          height={120}
          aria-label="logo"
        />
      </Link>
    </header>
  )
}

export default Header
