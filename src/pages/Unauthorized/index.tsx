import { useNavigate } from 'react-router-dom'
import { TryAgainButton, UnauthorizedContainer } from './style'

export default function Unauthorized() {
  const navigate = useNavigate()

  return (
    <UnauthorizedContainer>
      <h1>Parece que algo deu errado, tente se conectar novamente!!</h1>
      <TryAgainButton onClick={() => navigate('/')}>
        Tente Novamente
      </TryAgainButton>
    </UnauthorizedContainer>
  )
}
