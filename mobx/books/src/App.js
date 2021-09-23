import React, { Component } from 'react';
import BookContainer from './container/BookContainer';
import { Grid } from 'semantic-ui-react';
import BookListContainer from './container/BookListContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Grid container columns={2}>
          <Grid.Column>
            <BookListContainer/>
          </Grid.Column>
          <Grid.Column>
            <BookContainer/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;