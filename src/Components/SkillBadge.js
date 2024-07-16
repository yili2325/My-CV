import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import '../index.css';
class SkillBadge extends Component {
  render() {
   const {imageUrl, color, size} = this.props;

    return (
      <div className={'skillBadge'} style={{backgroundColor: color||'none'}}>
        <img style={{width: size, height: size}} src={imageUrl} />
      </div>
    );
  }
}

export default SkillBadge;
