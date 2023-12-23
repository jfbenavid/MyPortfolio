import { education } from "./education"
import { experience } from "./experience"
import { information } from "./information"
import { photoInfo } from "./photo-info"
import { profile } from "./profile"

export type portfolio = {
  photoInfo?: photoInfo
  information?: information
  profile?: profile
  skills?: Array<string>
  experience?: Array<experience>
  courses?: Array<education>
  education?: Array<education>
}