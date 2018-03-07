import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../app';
import Booking from "../components/Booking";
import Messages from "../components/Messages";
import Ads from "../components/Ads";
import AdDetail from "../components/Ads/ad_detail";
import CreateAd from "../components/Ads/create_ad";
import Admin from '../components/Admin';
import Therapists from '../components/Admin/Therapists';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404!</h1>
    </div>
  )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} exact={true} />
        <Route path="/booking" component={Booking}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/ads" component={Ads}/>
        <Route path="/addetail" component={AdDetail} />
        <Route path="/createAd" component={CreateAd} />
        <Route path="/admin/therapists" component={Therapists} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;

