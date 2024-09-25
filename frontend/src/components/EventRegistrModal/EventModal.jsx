import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import ModalClose from '@mui/joy/ModalClose';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { RegisterForm, Thumb, Input, Button } from './EventModal.styled';
import { addUser } from '../../redux/users/usersApi';

const userSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Full name is required!')
    .min(2, 'Full name must be at least 2 characters long')
    .matches(
      /^[A-Za-zА-Яа-яЁёЄєЇїІіҐґÜüÖöÄäßçÇşŞğĞ\s.]+$/,
      'Full name must contain only letters, dots, and spaces'
    ),
  email: Yup.string()
    .email()
    .required('Email is required!')
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      'Invalid email address'
    ),
  date: Yup.date()
    .nullable()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),
});

const EventModal = ({ title, idtitle, closeModal }) => {
  const dispatch = useDispatch();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    const payload = { ...data, title, idtitle };
    dispatch(addUser(payload));
    reset();
    closeModal();
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <ModalClose
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        />
        <Thumb>
          <Input
            name="fullname"
            label="Full name"
            type="text"
            margin="normal"
            {...register('fullname')}
            error={!!errors.fullname}
            helperText={errors.fullname?.message}
          />

          <Input
            name="email"
            label="Email"
            type="email"
            margin="normal"
            placeholder="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  label="Date of Birth"
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  format="DD-MM-YYYY"
                  slotProps={{
                    textField: {
                      margin: 'normal',
                      error: !!errors.date,
                      helperText: errors.date?.message,
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">
              Where did you hear about this event?
            </FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={<Checkbox name="socmedia" />}
                label="Social media"
                {...register('socmedia')}
              />
              <FormControlLabel
                control={<Checkbox name="friends" />}
                label="Friends"
                {...register('friends')}
              />
              <FormControlLabel
                control={<Checkbox name="found" />}
                label="Found myself"
                {...register('found')}
              />
            </FormGroup>
          </FormControl>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit">Add event participant</Button>
          </div>
        </Thumb>
      </RegisterForm>
    </>
  );
};

export default EventModal;
