import { education } from 'types'
import { A } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Study = ({ urlFile, institute, instituteLogo, title, endingDate }: education) => {
  const [show, element] = useIntersectionToShow<HTMLAnchorElement>()

  return (
    <A href={urlFile} target='_blank' ref={element}>
      {show && (
        <div>
          <img
            src={instituteLogo}
            alt={institute}
          />
          <div>
            <h3>{title}</h3>
            <h4>{institute}</h4>
            <span>{endingDate}</span>
          </div>
        </div>
      )}
    </A>
  )
}
