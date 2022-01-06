import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import Confetti from 'react-confetti'
import { useWindowSize, useTimeout } from 'react-use';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


// --- MUI sx STYLES --- // 
import {
  sxProfilePageContainer,
  sxPageContent,
  sxLeftColumn,
  sxTopLeftSection,
  sxTopRightSection,
  sxMiddleSection,
  sxPhotoBox,
  sxRightColumn,
  sxBottomSection,
  sxButtonBox,
  sxGoals,
} from './Profile.style';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Profile() {
  const user = useSelector((store) => store.user);
  const userCombos = useSelector((store) => store.userCombos);
  const userIngredients = useSelector((store) => store.userIngredients);
  const userRecipes = useSelector((store) => store.userRecipes);
  const comboGoal = useSelector((store) => store.comboGoal);
  const ingredientGoal = useSelector((store) => store.ingredientGoal);
  const ingredientUnique = useSelector((store) => store.ingredientUnique);
  const recipeGoal = useSelector((store) => store.recipeGoal);
  const recipeSaved = useSelector((store) => store.recipeSaved);
  const goal = useSelector((store) => store.goal);
  console.log('--- profile page goal', goal);
  const weeklyCombos = useSelector((store) => store.weeklyCombos);
  const monthlyCombos = useSelector((store) => store.monthlyCombos);
  const dispatch = useDispatch();

  const { width, height } = useWindowSize();
  const [isComplete] = useTimeout(8000);

  useEffect(() => {
    dispatch({ type: 'FETCH_COMBOS' })
    dispatch({ type: 'FETCH_COMBO_GOAL' })
    dispatch({ type: 'FETCH_INGREDIENT_GOAL' })
    dispatch({ type: 'FETCH_INGREDIENT_UNIQUE' })
    dispatch({ type: 'FETCH_RECIPE_GOAL' })
    dispatch({ type: 'FETCH_RECIPE_SAVED' })
    dispatch({ type: 'FETCH_WEEKLY_COMBOS' })
    dispatch({ type: 'FETCH_MONTHLY_COMBOS' })
  }, [])

  useEffect(() => {
    if (userCombos.length >= comboGoal.goal) {
      dispatch({ type: 'UPDATE_COMBO_GOAL', payload: comboGoal })
    }
  }, [userCombos, comboGoal])

  useEffect(() => {
    if (recipeSaved.length >= recipeGoal.goal) {
      dispatch({ type: 'UPDATE_RECIPE_GOAL', payload: recipeGoal })
    }
  }, [recipeSaved, recipeGoal])

  useEffect(() => {
    if (ingredientUnique.length >= ingredientGoal.goal) {
      dispatch({ type: 'UPDATE_INGREDIENT_GOAL', payload: ingredientGoal })
    }
  }, [ingredientUnique, ingredientGoal])

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={sxProfilePageContainer}>
      <Box sx={sxPageContent}>
        <Box sx={sxRightColumn}>
          <Box sx={sxLeftColumn}>
            <Box sx={sxTopLeftSection}>
              <CardMedia sx={sxPhotoBox} component="img" image={user.pic} />
              <Typography>{user.username}</Typography>
              <LogOutButton />
            </Box>
            <Box sx={sxTopRightSection}>
              <Typography fontSize={24}>{user.bio}</Typography>
              <Typography>{user.age}</Typography>
            </Box>
          </Box>
          <Box sx={sxMiddleSection}>
            <Typography size={24}>Goal Progress</Typography>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={4}>
                <Typography>New Combos - Goal: {comboGoal.goal} </Typography>
                <Item>Goal Progress: {userCombos.length}/{comboGoal.goal}</Item>
                <Alert severity="success">
                    <AlertTitle>Congratulations!!!</AlertTitle>
                    You hit your Combo Goal! <strong>Keep it Up!</strong>
                  </Alert>
              </Grid>
              <Grid item xs={4}>
                <Typography>New Recipes - Goal: {recipeGoal.goal} </Typography>
                <Item>Goal Progress: {recipeSaved.length}/{recipeGoal.goal}</Item>
                <Alert severity="success">
                    <AlertTitle>Congratulations!!!</AlertTitle>
                    You hit your Recipe Goal! <strong>Keep it Up!</strong>
                  </Alert>
              </Grid>
              {comboGoal.goal &&
                <Grid item xs={4}>
                  <Typography>New Ingredients - Goal: {ingredientGoal.goal} </Typography>
                  <Item>Goal Progress: {ingredientUnique.length}/{ingredientGoal.goal}</Item>
                  <Confetti width={width} height={height} recycle={!isComplete()} />
                  <Alert severity="success">
                    <AlertTitle>Congratulations!!!</AlertTitle>
                    You hit your Ingredient Goal! <strong>Keep it Up!</strong>
                  </Alert>
                </Grid>}
            </Grid>
            <Typography size={18}>Metrics</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>Combos Made This Week: {weeklyCombos.length}</Item>
                <Item>Combos Made This Month: {monthlyCombos.length}</Item>
                <Item>Combos Made This Year: {weeklyCombos.length}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Metrics/Monthly</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Metrics/Total</Item>
              </Grid>
            </Grid>
          </Box>
          <Typography sx={{ textAlign: "center" }}>Saved Flavor Combos</Typography>
          <Box sx={sxBottomSection}>
            <Typography size={18}>Saved Flavor Combos</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {/* <Typography>Saved Flavor Combos</Typography> */}
              {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(12)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>Saved Flavor Combos</Item>
                </Grid>
              ))}
            </Grid> */}
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {userCombos.map((combo) => {

                return (
                  <Grid item xs={2} sm={4} md={4} key={combo.id} >
                    <Item >
                      <List>
                        <ListItem sx={{ p: 3, border: '1px solid black', }}>{combo.name}</ListItem>
                      </List>
                    </Item>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box >


  );
}

export default Profile;
