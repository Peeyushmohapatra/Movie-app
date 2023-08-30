import React from "react";
import "./Cast.css";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const Cast = () => {
  const cast = useSelector((state) => {
    return state.cast;
  });
  console.log(cast);
  return (
    <>
    <div className="cast_container">
      <Stack direction="row" spacing={3}>
      {cast &&
            cast.map((people) => {
              return (
                <div className="casts">

                    <Avatar sx={{ width: 120, height: 120 }} alt={people.name} src={`https://image.tmdb.org/t/p/original/${
                      people && people.profile_path
                    }`} />
                    <Stack direction="column" spacing={1}>
                    <Chip color="success" label={people.name} variant="outlined" />
                    <Chip color="success" label={people.character} variant="outlined" />
                    <Chip color="success" label={people.gender == 1 ? "Female" : "Male"} variant="outlined" />
                     </Stack>
                    {/* <span className="span">{people.name}</span> */}
                </div>
              );
            })}
    </Stack>
    </div>
    <div className="big_cast_container">
    {cast && cast.map((item) => {
      return (
        <div className="outer_cast_container">
            <div className="casts_image">
              <img src={`https://image.tmdb.org/t/p/original/${
                      item && item.profile_path
                    }`}  alt="" />
            </div>
            <p>{item.name}</p>
            <p>{item.character}</p>
            <p>{item.gender == 1 ? "Female" : "Male"}</p>
            </div>
      )
    })}
    </div>
    </>
  );
};

export default Cast;
