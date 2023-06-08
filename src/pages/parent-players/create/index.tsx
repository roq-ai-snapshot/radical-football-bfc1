import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
import { createParentPlayer } from 'apiSdk/parent-players';
import { Error } from 'components/error';
import { parentPlayerValidationSchema } from 'validationSchema/parent-players';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { ParentInterface } from 'interfaces/parent';
import { PlayerInterface } from 'interfaces/player';
import { getParents } from 'apiSdk/parents';
import { getPlayers } from 'apiSdk/players';
import { ParentPlayerInterface } from 'interfaces/parent-player';

function ParentPlayerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ParentPlayerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createParentPlayer(values);
      resetForm();
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ParentPlayerInterface>({
    initialValues: {
      parent_id: (router.query.parent_id as string) ?? null,
      player_id: (router.query.player_id as string) ?? null,
    },
    validationSchema: parentPlayerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Create Parent Player
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        <form onSubmit={formik.handleSubmit}>
          <AsyncSelect<ParentInterface>
            formik={formik}
            name={'parent_id'}
            label={'Select Parent'}
            placeholder={'Select Parent'}
            fetcher={getParents}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <AsyncSelect<PlayerInterface>
            formik={formik}
            name={'player_id'}
            label={'Select Player'}
            placeholder={'Select Player'}
            fetcher={getPlayers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'parent_player',
  operation: AccessOperationEnum.CREATE,
})(ParentPlayerCreatePage);
