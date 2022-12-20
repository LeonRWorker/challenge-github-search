import { Container, FlexBox, Asset, Personal, Profile, Name, Username, Bio, Joined, Boxes, Box, Text, Icons, Icon } from "./styles"
import { FiMapPin, FiLink, FiTwitter } from "react-icons/fi"
import { FaBuilding } from "react-icons/fa"
import { useState, useEffect } from "react"

interface iFound {
  theme: string
  avatar: string
  name: string
  username: string
  bio: string
  repos: number
  followers: number
  following: number
  joined: string
  location: string
  twitter: string
  blog: string
  company: string
}

export const Found = (props: iFound) => {
  return (
    <Container >
      <FlexBox>
        <Asset src={props.avatar} />
        <Personal>
          <Profile>
            <Name>{ props.name }</Name>
            <Username>@{ props.username }</Username>
          </Profile>
          <Joined>{ props.joined }</Joined>
        </Personal>
      </FlexBox>
      <FlexBox>
        { !props.bio && (<Bio>Esse perfil não tem bibliografia</Bio>) }
        { props.bio && (<Bio>{ props.bio }</Bio>) }
      </FlexBox>
      <FlexBox>
        <Boxes>
          <Box>
            <Text>Repositórios</Text>
            <Text>{ props.repos }</Text>
          </Box>
          <Box>
            <Text>Seguidores</Text>
            <Text>{ props.followers }</Text>
          </Box>
          <Box>
            <Text>Seguindo</Text>
            <Text>{ props.following }</Text>
          </Box>
        </Boxes>
      </FlexBox>
      <FlexBox>
        <Icons>
          { props.location && (
            <Icon>
              <FiMapPin />
              <Text>{ props.location }</Text>
            </Icon>
          )}
          { !props.location && (
            <Icon style={{ filter: 'opacity(50%)' }} >
              <FiMapPin />
              <Text>Não informado</Text>
            </Icon>
          )}
          { props.blog && (
            <Icon>
              <FiLink />
              <Text>{ props.blog }</Text>
            </Icon>
          )}
          { !props.blog && (
            <Icon style={{ filter: 'opacity(50%)' }} >
              <FiLink />
              <Text>Não informado</Text>
            </Icon>
          )}
        </Icons>
        <Icons>
          { props.twitter && (
            <Icon>
              <FiTwitter />
              <Text>{ props.twitter }</Text>
            </Icon>
          )}
          { !props.twitter && (
            <Icon style={{ filter: 'opacity(50%)' }} >
              <FiTwitter />
              <Text>Não informado</Text>
            </Icon>
          )}
          { props.company && (
            <Icon>
              <FaBuilding />
              <Text>{ props.company }</Text>
            </Icon>
          )}
          { !props.company && (
            <Icon style={{ filter: 'opacity(50%)' }} >
              <FaBuilding />
              <Text>Não informado</Text>
            </Icon>
          )}
        </Icons>
      </FlexBox>
    </Container>
  )
}