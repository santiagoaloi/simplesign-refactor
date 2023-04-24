// https://motion.vueuse.org/
import { MotionPlugin } from '@vueuse/motion'

export const install = (app) => {
  app.use(MotionPlugin)
}
