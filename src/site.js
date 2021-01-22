require('./common')
require('./images/radar_legend.png')
require('./gtm.js')

const CSVDocument = require('./util/factory')

var sheet;
sheet = CSVDocument()
sheet.init().build()
