import { CardContainer } from './style'

type CardComponentProps = {
  title: string,
  image: string
}

export default function CardComponent({ title, image }: CardComponentProps) {
  return (
    <CardContainer>
      <img src={image} alt="#" />
      <h1>{title}</h1>
    </CardContainer>
  )
}
