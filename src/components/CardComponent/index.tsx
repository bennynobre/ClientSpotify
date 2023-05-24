import { CardContainer } from './style'

type CardComponentProps = {
  title: string,
  image: string,
  url: string
}

export default function CardComponent({ title, image, url }: CardComponentProps) {
  return (
    <CardContainer onClick={() => window.open(url)}>
      <img src={image} alt="#"/>
      <h1>{title}</h1>
    </CardContainer>
  )
}
