import React, {Component} from 'react';

export default class SeriesZoekbalk extends Component {
  render() {
    return <input type="search" className="form-control" placeholder="Zoeken"
      onChange={this.props.onZoeken} />
  }
}
