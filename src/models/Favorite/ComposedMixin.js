import { types } from 'mobx-state-tree'

import FavoriteHelperMixin from './FavoriteHelperMixin'
import DataMixin from './DataMixin'

const ComposedMixin = types.compose(
  FavoriteHelperMixin,
  DataMixin,
)

export default ComposedMixin