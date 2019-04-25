import { types } from 'mobx-state-tree'

const DataMixin = types
  .model('DataMixin', {
    favorite: types.frozen(),
    lastPhoto: types.union(types.frozen(), types.null),
  })

export default DataMixin
