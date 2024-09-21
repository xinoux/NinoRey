export default function SocialMediaIcon({image}){
    return(
    <div className="socialMediaIcon">
        <img src={`${process.env.PUBLIC_URL}/img/${image}Icon.svg`} alt="socialMediaIcon" className="socialMediaIcon" />
    </div>
    )
    }