import { TopTracksContainer } from "./style"

type CardComponentProps = {
  title: string,
  index: number
//   image: string,
//   url: string
}

export default function TopTracksComponent({ title, index }: CardComponentProps) {
  return (
    <TopTracksContainer>
      {/* <img src={image} alt="#"/> */}
      <h1>{index}.{" "}{title}</h1>
    </TopTracksContainer>
  )
}