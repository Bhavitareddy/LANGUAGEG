import './index.css'

const LanguageGreetingsItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <li className="item-container">
        <img className="item-image" src={imageUrl} alt={'${imageAltText}'} />
      </li>
    </>
  )
}
export default LanguageGreetingsItem
