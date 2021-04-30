import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';

class CreatureList extends Component {
  render() {
    const creatures = this.props.creatures;

    return (
      <ul className="CreatureList">
        {creatures.map(creature => (
          <CreatureItem key={creature.title} creature={creature}/>        
        ))}
      </ul>
    );
  }
}

export default CreatureList;