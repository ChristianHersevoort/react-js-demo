import React, {Component} from 'react';

import SeriesZoekbalk from './SeriesZoekbalk';
import SeriesTabel from './SeriesTabel';

import alleSeries from './alleSeries';

export class SeriesFilterScherm extends Component {

  constructor(props) {
    super(props);
    this.state = {series: alleSeries};
  }

  render() {
    return (
      <div className="col-lg-4 col-lg-offset-4">
        <h2>Series zoeken</h2>
        <SeriesZoekbalk onZoeken={this.onZoeken} />
        <hr />
        <SeriesTabel series={this.state.series} />
      </div>
    )
  }

  // Mooie filter methode
  onZoeken = (e) => {
      this.setState({series: alleSeries.filter(serie => {
        var searchTerm = e.target.value.toLowerCase();
        return serie.titel.toLowerCase().indexOf(searchTerm) > -1;
      })});
  }
}
