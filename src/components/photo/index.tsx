import { photoInfo } from 'types'
import { ImageDiv } from './styles'

export const Photo = ({ link, alt }: photoInfo) => (
  <ImageDiv>
    <div>
      <figure>
        <img
          rel='pre-connect'
          src={link}
          alt={alt}
        />
      </figure>
    </div>
  </ImageDiv>
)
