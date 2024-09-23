export default function SideText({label,positionSide = 'left'}){
    const sideTextStyle = {
        [positionSide]: '-2rem',           
    };
            
    return(
        
        <section className="sideTextContainer" >
            
            <div className="sideText" style={sideTextStyle}>
                {label}
            </div>
        </section>

    )
}