import Header from '../header'
import { Home } from '../home'
import { Section } from '../sectionData'
import { Job } from '../job'
import { Study } from '../study'
import { Menu } from '../menu'
import { useEffect, useState } from 'react'
import { getLocaleData } from 'services/locale-service'
import { getData } from 'services/data-service'
import { portfolio } from 'types'
import { Photo } from '../photo'
import { Info } from '../info'

type mainProps = {
  navLanguage: string;
}

export const Main = ({ navLanguage }: mainProps) => {
  const validLanguages = ['es', 'en']
  const language = validLanguages.includes(navLanguage) ? navLanguage : 'en'
  const [isNotSpanish, setIsNotSpanish] = useState<boolean>(language !== 'es')
  const [locale, setLocale] = useState<Record<string, string>>({})
  const [data, setData] = useState<portfolio>({})
  const { profile, skills, experience, courses, education, photoInfo, information } = data

  const toggleLanguage = () => setIsNotSpanish(prev => !prev)

  useEffect(() => {
    Promise.all([getLocaleData(isNotSpanish), getData(isNotSpanish)])
      .then(([localeData, portfolioData]) => {
        setLocale(localeData)
        setData(portfolioData)
      })
  }, [isNotSpanish])

  if (!profile || !skills || !experience || !courses || !education || !photoInfo || !information)
    return <p>Loading...</p>

  return (
    <>
      <Header>
        <Menu
          sectionKeys={Object.keys(data)}
          locale={locale}
          toggleLanguage={toggleLanguage}
        />
      </Header>
      <Home>
        <Photo {...photoInfo} />
        <Info {...information} />
      </Home>
      <div className='container'>
        <Section title={locale['about'] || 'about'}>
          <p>{profile.greetings} <strong>{profile.name}</strong></p>
          <p>{profile.description}</p>
        </Section>
        <Section title={locale['skills'] || 'skills'}>
          {skills.map(skill =>
            <span key={skill} className='skill'>{skill}</span>
          )}
        </Section>
        <Section title={locale['experience'] || 'experience'}>
          <div className='separated'>
            {experience.map((item, index) => (
              <Job
                key={index}
                achievementsText={locale['achievements']}
                responsibilityText={locale['responsibilities']}
                {...item}
              />
            ))}
          </div>
        </Section>
        <Section title={locale['courses'] || 'courses'}>
          <div className='separated'>
            {courses.map((item, index) => (
              <Study key={index} {...item} />
            ))}
          </div>
        </Section>
        <Section title={locale['education'] || 'education'}>
          <div className='separated'>
            {education.map((item, index) => (
              <Study key={index} {...item} />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}
