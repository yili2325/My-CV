import React, {useState} from "react";
import '../index.css';

function SkillBadge({imageUrl, color, size, note}) {
  const [showNote, setShowNote] = useState(false);/*ReactJS: state：内部; trops 别人给我的，外部*/
  return (<div className={'skillBadge'} style={{backgroundColor: color || 'none'}}
               onMouseOver={() => setShowNote(true)}
               onMouseLeave={() => setShowNote(false)}>
    {showNote && <p className="note">{note}</p>}
    <img style={{width: size, height: size}} src={imageUrl}/>

  </div>);
}

export default SkillBadge;
