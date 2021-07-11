import Image from "next/image"

const myLoader = () => {
  return `https://images.unsplash.com/photo-1547321911-4613f6df223a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80`
}

const MyImage = () => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
export default MyImage
