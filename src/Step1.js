import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";
// Added and Installed react-select for dropdown
import Select from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

// const options = [
//   { value: "alternative", label: "•	Alternative" },
//   { value: "anime", label: "• Anime" },
//   { value: "blues", label: "•	Blues" },
//   { value: "childrenmusic", label: "•	Children’s Music" },
//   { value: "classical", label: "•	Classical" },
//   { value: "comedy", label: "•	Comedy" },
//   { value: "country", label: "•	Country" },
//   { value: "dance", label: "•	Dance" },
//   { value: "disney", label: "•	Disney" },
//   { value: "easylistening", label: "•	Easy Listening" },
//   { value: "electronic", label: "•	Electronic" },
//   { value: "enka", label: "•	Enka" },
//   { value: "frenchPop", label: "•	French Pop" },
//   { value: "germanFolk", label: "•	German Folk" },
//   { value: "germanPop", label: "•	German Pop" },
//   { value: "fitness & Workout", label: "•	Fitness & Workout" },
//   { value: "hip-HopRap", label: "•	Hip-Hop/Rap" },
//   { value: "holiday", label: "•	Holiday" },
//   { value: "indiePop", label: "•	Indie Pop" },
//   { value: "industrial", label: "•	Industrial" },
//   {
//     value: "inspirationalChristianGospel",
//     label: "•	Inspirational – Christian & Gospel",
//   },
//   { value: "instrumental", label: "•	Instrumental" },
//   { value: "jPop", label: "•	J-Pop " },
//   { value: "jazz", label: "•	Jazz" },
//   { value: "KPop", label: "•	K-Pop" },
//   { value: "karaoke", label: "•	Karaoke" },
//   { value: "kayokyoku", label: "•	Kayokyoku" },
//   { value: "latin", label: "•	Latin" },
//   { value: "metal", label: "•	Metal" },
//   { value: "newAge", label: "•	New Age" },
//   { value: "opera", label: "•	Opera" },
//   { value: "pop", label: "•	Pop" },
//   { value: "R&BSoul", label: "•	R&B/Soul" },
//   { value: "reggae", label: "•	Reggae" },
//   { value: "rock", label: "•	Rock" },
//   { value: "singerSongwriter", label: "•	Singer/Songwriter" },
//   { value: "soundtrack", label: "•	Soundtrack" },
//   { value: "spokenWord", label: "•	Spoken Word" },
//   { value: "texmexTejano", label: "•	Tex-Mex / Tejano" },
//   { value: "vocal", label: "•	Vocal" },
//   { value: "world", label: "•	World" },
// ];

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors, control, setValue } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Input
          ref={register}
          id="artistName"
          type="text"
          label="Artist Name"
          name="artistName"
          error={!!errors.artistName}
          helperText={errors?.artistName?.message}
        />
        {/* <Select options={options} ref={register} /> */}
        <Input
          ref={register}
          id="songTitle"
          type="text"
          label="Song Title"
          name="songTitle"
          error={!!errors.songTitle}
          helperText={errors?.songTitle?.message}
        />
        <Input
          ref={register}
          id="label"
          type="text"
          label="Record Label Name"
          name="label"
        />
        <h3>Music Genre</h3>
        <Controller
          name="Genre"
          // ref={register}
          control={control}
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
            { value: "alternative", label: "•	Alternative" },
            { value: "anime", label: "• Anime" },
            { value: "blues", label: "•	Blues" },
            { value: "childrenmusic", label: "•	Children’s Music" },
            { value: "classical", label: "•	Classical" },
            { value: "comedy", label: "•	Comedy" },
            { value: "country", label: "•	Country" },
            { value: "dance", label: "•	Dance" },
            { value: "disney", label: "•	Disney" },
            { value: "easylistening", label: "•	Easy Listening" },
            { value: "electronic", label: "•	Electronic" },
            { value: "enka", label: "•	Enka" },
            { value: "frenchPop", label: "•	French Pop" },
            { value: "germanFolk", label: "•	German Folk" },
            { value: "germanPop", label: "•	German Pop" },
            { value: "fitness & Workout", label: "•	Fitness & Workout" },
            { value: "hip-HopRap", label: "•	Hip-Hop/Rap" },
            { value: "holiday", label: "•	Holiday" },
            { value: "indiePop", label: "•	Indie Pop" },
            { value: "industrial", label: "•	Industrial" },
            {
              value: "inspirationalChristianGospel",
              label: "•	Inspirational – Christian & Gospel",
            },
            { value: "instrumental", label: "•	Instrumental" },
            { value: "jPop", label: "•	J-Pop " },
            { value: "jazz", label: "•	Jazz" },
            { value: "KPop", label: "•	K-Pop" },
            { value: "karaoke", label: "•	Karaoke" },
            { value: "kayokyoku", label: "•	Kayokyoku" },
            { value: "latin", label: "•	Latin" },
            { value: "metal", label: "•	Metal" },
            { value: "newAge", label: "•	New Age" },
            { value: "opera", label: "•	Opera" },
            { value: "pop", label: "•	Pop" },
            { value: "R&BSoul", label: "•	R&B/Soul" },
            { value: "reggae", label: "•	Reggae" },
            { value: "rock", label: "•	Rock" },
            { value: "singerSongwriter", label: "•	Singer/Songwriter" },
            { value: "soundtrack", label: "•	Soundtrack" },
            { value: "spokenWord", label: "•	Spoken Word" },
            { value: "texmexTejano", label: "•	Tex-Mex / Tejano" },
            { value: "vocal", label: "•	Vocal" },
            { value: "world", label: "•	World" },
          ]}
          as={Select}
        />
        <h3>Single Released Date</h3>
        <Input
          ref={register}
          id="date"
          name="date"
          type="date"
          ref={register({
            valueAsDate: true,
          })}
        />
        <h3>Music Service</h3>
        Publishing
        <Controller
          name="Publishing"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )} // props contains: onChange, onBlur and value
        />
        Distribution
        <Controller
          name="Distribution"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )} // props contains: onChange, onBlur and value
        />
        Licensing
        <Controller
          name="Licensing"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )} // props contains: onChange, onBlur and value
        />
        <br></br>
        Music Label Services
        <Controller
          name="MusicLabelServices"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )} // props contains: onChange, onBlur and value
        />
        <br />
        Other
        <Controller
          as={TextField}
          name="Other"
          control={control}
          defaultValue=""
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
