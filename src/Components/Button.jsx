
const Button = ({name,containerClass,isBeam = false}) => {
  return (
    <button className={`btn ${containerClass}`} >
      
        
       {isBeam ? <span className="relative flex h-3 w-3">
            <span className="btn-ping"/>
            <span className="btn-ping_."/>

        </span> : null }
        {name}
        </button>
  )
}

export default Button