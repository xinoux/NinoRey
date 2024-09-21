export default function ServiceCard({image, label}){
return(
<div className="serviceCard">
    <img src={`${process.env.PUBLIC_URL}/img/${image}Logo.svg`} alt='serviceCardLogo' className="serviceCardLogo" />
    <p className="serviceCardLabel">{label}</p>
</div>
)
}