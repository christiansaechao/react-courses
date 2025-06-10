
const ShopItem = ({ heading, subheading, buttonText }) => {
  return (
    <div>
        <h3>{heading}</h3>
        <p>{subheading}</p>
        <button>{buttonText}</button>
        <img src="https://www.apple.com/v/home/cf/images/promos/apple-card/promo_apple_card__5cm7draujpey_large.jpg" alt="" />
    </div>
  )
}
export default ShopItem