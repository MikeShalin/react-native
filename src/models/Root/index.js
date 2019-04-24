import Photos from '../Photos'
import Favorite from '../Favorite'
import { types } from 'mobx-state-tree'

const RootStore = types
  .model('RootStore', {
    photosStore: types.optional(Photos, {
      photos: [],
      isFetching: false,
      error: null,
    }),
    favoriteStore: types.optional(Favorite, {
      favorite: {
        c: {
          Curiosity: {
            3132: {
              name: 'Curiosity',
              cameras: 'CHEMCAM',
              date: '2012-08-16',
              img: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380645PRCLF0030000CCAM04010L1.PNG',
            },
            58870: {
              name: 'Curiosity',
              cameras: 'CHEMCAM',
              img: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ccam/CR0_398381687EDR_F0030000CCAM05010M_.JPG',
              date: '2012-08-16',
            },
          },
        },
        m: {
          MAST: {
            424926: {
              name: 'MAST',
              cameras: 'FHAZ',
              date: '2012-08-16',
              img: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg',
            },
          },
        },
      },
    }),
  })
  .views(self => ({
    getModel(name) {
      return self[name]
    },
  }))

export default RootStore