import { types } from 'mobx-state-tree'

import CollectionHelperMixin from './CollectionHelperMixin'
import DataMixin from './DataMixin'

const ComposedMixin = types.compose(
  CollectionHelperMixin,
  DataMixin,
)

export default ComposedMixin