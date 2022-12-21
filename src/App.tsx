import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { FiSearch } from "react-icons/fi"
import { Container, Search, Fields, Field, Button } from "./global"
import { NotFound } from "./components/NotFound"
import { Found } from "./components/Found"

export default function App () {
  const queryRef: any = useRef(null)
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
  const [avatar, setAvatar] = useState('')
  const [joined, setJoined] = useState('')
  const [bio, setBio] = useState('')
  const [repos, setRepos] = useState(0)
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [location, setLocation] = useState('')
  const [blog, setBlog] = useState('')
  const [twitter, setTwitter] = useState('')
  const [company, setCompany] = useState('')
  const [found, setFound] = useState(0)
  const [background, setBackground] = useState('Wykg')
  const handleSearchUser = () => {
    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro']
    const baseURL = 'https://api.github.com/'
    axios.get(`${baseURL}users/${queryRef.current.value}`).then(response => {
      const date = new Date(response.data.created_at);
      setAvatar(response.data.avatar_url)
      setName(response.data.name)
      setLogin(response.data.login)
      setJoined(`Desde ${date.getDay()} de ${month[date.getMonth()]} ${date.getFullYear()}`)
      setBio(response.data.bio)
      setRepos(response.data.public_repos)
      setFollowers(response.data.followers)
      setFollowing(response.data.following)
      setLocation(response.data.location)
      setBlog(response.data.blog)
      setTwitter(response.data.twitter_username)
      setCompany(response.data.company)
      setFound(2)
    }).catch(error => {
      console.log(error)
      setFound(3)
    })
  }
  return (
    <Container className={ background }  >
      <Search>
        <Fields>
          <FiSearch size={22} color={'#0863cb'} />
          <Field type={'text'} ref={queryRef} placeholder="Procure usuários do GitHub..." />
        </Fields>
        <Button onClick={handleSearchUser}>Pesquisar</Button>
      </Search>
      { found == 2 && (
        <Found
          theme={background}
          avatar={avatar}
          name={name}
          username={login}
          bio={bio}
          joined={joined}
          repos={repos}
          followers={followers}
          following={following}
          location={location}
          twitter={twitter}
          blog={blog}
          company={company}
        />
      ) }
      { found == 3 && <NotFound /> }
    </Container>
  )
}