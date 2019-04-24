import { types } from 'mobx-state-tree'

const DataMixin = types
  .model('DataMixin', {
    favorite: types.frozen(),
  })

export default DataMixin
