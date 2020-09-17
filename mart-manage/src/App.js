import React, { Component } from 'react'
import { connect } from 'dva';
import Layout from '@/components/layout';
import RouterView from '@/router';

@connect((store) => store)
class App extends Component {

  render() {
    const { history, routes } = this.props;
    return <Layout>
      <RouterView history={history} routes={routes}></RouterView>
    </Layout>
  }
}
export default App;