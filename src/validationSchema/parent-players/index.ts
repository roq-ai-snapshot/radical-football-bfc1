import * as yup from 'yup';

export const parentPlayerValidationSchema = yup.object().shape({
  parent_id: yup.string().nullable().required(),
  player_id: yup.string().nullable().required(),
});
