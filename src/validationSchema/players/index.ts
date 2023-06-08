import * as yup from 'yup';
import { parentPlayerValidationSchema } from 'validationSchema/parent-players';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  academy_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
  parent_player: yup.array().of(parentPlayerValidationSchema),
});
