export default function SideText({label,positionSide = 'left', origin = 'left top'}){
    const sideTextStyle = {
        position: 'absolute',
        [positionSide]: '2rem',  
        bottom: '19rem',         
        transform: 'rotate(-90deg)',
        transformOrigin: origin,  
        fontFamily: 'Playfair Display, serif',
        fontWeight: 600,
        textTransform: 'uppercase',
        color: '#414141',
        letterSpacing: '0.2rem',
    };
            
    return(
        
        <section className="sideTextContainer" >
            
            <div className="sideText" style={sideTextStyle}>
                {label}
            </div>
        </section>

    )
}