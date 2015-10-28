import React, {Component} from 'react';

import SerieRegel from './SerieRegel';
//import GeenResultaat from './GeenResultaat';

export default class SeriesTabel extends Component {
  render() {

    let rows;
    if(this.props.series.length > 0) {
      rows = this.props.series.map(function(serie){
        return <SerieRegel key={serie.titel} serie={serie} />;
      });
    }

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
