import Application from '../../app'
import config from '../../config/environment'
import Ember from 'ember'
const {run} = Ember

const assign = Object.assign || Ember.assign || Ember.merge

export default function startApp (attrs) {
  let application

  let attributes = assign({}, config.APP)
  attributes = assign(attributes, attrs) // use defaults, but you can override

  run(() => {
    application = Application.create(attributes)
    application.setupForTesting()
    application.injectTestHelpers()
  })

  return application
}
