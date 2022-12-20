import { Content, Text } from "./styles"
import { FiGithub } from "react-icons/fi"

export const NotFound = () => {
  return (
    <Content>
      <FiGithub size={30} />
      <Text>Não foi possível encontrar um usuário com os valores informados</Text>
    </Content>
  )
}