
// --- PROFILE PAGE STYLES --- // 

import { Translate } from "@mui/icons-material"

  //box stylings
  export const sxProfilePageContainer = {
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
  }

export const sxPageContent = {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: '100%',
    m: 2
  }

export const sxLeftColumn = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  }

export const sxRightColumn = {
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
  }

export const sxTopLeftSection = {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 300,
    padding: '1rem',
  }

  export const sxTopMiddleSection = {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 300,
    padding: '1rem',
  }

export const sxTopRightSection = {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 300,
    padding: '1rem',
   
  }

export const sxMiddleSection = {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,
  }

export const sxPhotoBox = {
    // border: '1px solid lightgray',
    width: 180,
    height: 180,
    boxShadow: 3,
    mb: .25,
    borderRadius: 1,
  };

export const sxButtonBox = {
    // border: '1px solid black',
    display: 'inline-flex',
    flexDirection: 'row',
    width: '100%',
    height: '35%',
    // m: 2
  }

export const sxBottomSection = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    mb: 2
  }

export const sxGoals = {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
  }

  export const sxRecipeContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // border: '1px solid red',
    gap: 2,
    justifyContent: 'center',
}

export const sxRecipeCard = {
  width: 400,
  height: 300,
  backgroundColor: '#fffdfa',
  elevation: 24,
  borderRadius: 5,
  pt:2,
}

export const sxCardContent = {
  height: 150,
}

export const sxCardTitle = {
  textAlign: 'center',
  height: 'auto',
}

export const sxBox = {
  height: 125,
  overflow: 'scroll',
  textAlign: 'center',
  alignItems: 'center',
}

export const sxCardActions = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
}

export const sxPhotoIngredientContainer = {
  // border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  width: 350,
  mx: 'auto',
  my: 1,
  pb: 2,

}

export const sxRecipeUrl = {
  flex: '90%',
  cursor: 'pointer',

  '&:hover': {
    border: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
}
}

export const sxRecipeButton = {
  flex: '10%',
  justifyContent: 'flex-end',
}