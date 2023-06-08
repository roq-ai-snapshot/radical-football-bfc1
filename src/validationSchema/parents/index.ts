import * as yup from 'yup';
import { parentPlayerValidationSchema } from 'validationSchema/parent-players';

export const parentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  parent_player: yup.array().of(parentPlayerValidationSchema),
});
