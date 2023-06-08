import * as yup from 'yup';

export const coachValidationSchema = yup.object().shape({
  name: yup.string().required(),
  academy_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
