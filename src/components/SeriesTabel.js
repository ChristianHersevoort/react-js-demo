import React, {Component} from 'react';

import SerieRegel from './SerieRegel';

export default class SeriesTabel extends Component {
  render() {

    var rows = this.props.series.map(function(serie){
      return <SerieRegel key={serie.titel} serie={serie} />;
    });

    return (
      <table className="table">
          <thead>
              <tr>
                  <th>Titel</th>
                  <th>Link</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    )
  }
}
