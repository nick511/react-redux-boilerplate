import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './state/store'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App/App'

const root = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'))

registerServiceWorker()
