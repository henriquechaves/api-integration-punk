import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Components
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
            <div>
                <Helmet
                    title="Beer Site"
                    titleTemplate="%s"
                    meta={[
            { charset: 'utf-8' },
                      {
                        'http-equiv': 'X-UA-Compatible',
                        content: 'IE=edge',
                      },
                      {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1',
                      },
                    ]}
                />
                <Header />
                {this.props.children}
                <Footer />
            </div>
    );
  }
}

App.propTypes = { children: PropTypes.object.isRequired };

export default App;
