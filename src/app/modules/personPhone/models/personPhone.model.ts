import  { PhoneNumberType } from '../../phoneNumberType/models/phoneNumberType.model';

export interface PersonPhone {
  id: number
  phoneNumber: string
  phoneNumberType: PhoneNumberType
}
