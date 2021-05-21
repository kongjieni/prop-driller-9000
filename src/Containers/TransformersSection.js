import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  renderProptimii = () => {
    return this.props.proptimii.map(transformer => {
      return <Transformer transformer={transformer} key={transformer.id}/>
    })
  }

  render(props) {
    return (
      <section className = "transformers-section">
        {this.renderProptimii()}
      </section>
    );
  }
}

export default TransformersSection;
