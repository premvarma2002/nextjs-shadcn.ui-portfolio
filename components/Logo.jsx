import Link from "next/link"
import Image from "next/image"

const logo = () => {
  return (
    <Link href='/'>
      {/* <Image src='/logo.svg' width={54} height={54} priority alt="" /> */}
      <div className="font-bold text-4xl text-gray-900 dark:text-white">Prem.</div>
    </Link>
  )
}

export default logo