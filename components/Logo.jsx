import Link from "next/link"
import Image from "next/image"

const logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' width={54} height={54} priority alt="" />
    </Link>
  )
}

export default logo