import dayjs , {type Dayjs} from 'dayjs'
import 'dayjs/locale/ru'
//подключает локали, если она вам нужна

import isoWeek from 'dayjs/plugin/isoWeek'

import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)