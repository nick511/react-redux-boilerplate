import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './state/store'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App/App'

const root = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'))

registerServiceWorker()
