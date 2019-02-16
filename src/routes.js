import React  from 'react';
import Layout from './Hoc/layout.jsx';

import { Switch, Route} from 'react-router-dom';


const Routes = () => {
  return(
    <Layout>
      <Switch>
          <Route path="/" exact component={home}/>
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
      </Switch>
    </Layout>
  )
}
export default Routes;