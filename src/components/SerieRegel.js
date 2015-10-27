import React, {Component} from 'react';

export default class SerieRegel extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.serie.titel}</td>
        <td><a href="#">view</a></td>
      </tr>
    )
  }
}
