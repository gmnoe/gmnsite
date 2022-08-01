import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'JavaScript', count: 10 },
  { value: 'Reactjs', count: 8 },
  { value: 'Nodejs', count: 8 },
  { value: 'jQuery', count: 7 },
  { value: 'ES6', count: 7 },
  { value: 'Redux', count: 5 },
  { value: 'React Native', count: 8 },
  { value: 'HTML5', count: 10 },
  { value: 'CSS3', count: 10 },
  { value: 'Bootstrap', count: 7 },
  { value: 'Git', count: 5 },
  { value: 'Github', count: 3 },
  { value: 'MongoDB', count: 7 },
  { value: 'Expo SDK', count: 5 },
  { value: 'Responsive Web Design', count: 3 },
  { value: 'Expressjs', count: 5 },
  { value: 'JSON', count: 5 },
  { value: 'XML', count: 5 },
  { value: 'RESTful API \' s', count: 5 },
  { value: 'Postman', count: 3},
  { value: 'Virtual Studio Code', count: 3}
]

const options = {
    luminosity: 'light',
    hue: '#143AA2'
}

const SkillCloud = () => (
  <TagCloud
    minSize={20}
    maxSize={58}
    tags={data}
    style={{ textAlign: 'center'}}
    colorOptions={options}
  />
)

export default SkillCloud;