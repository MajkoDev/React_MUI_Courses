import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>

      <Typography 
        variant='h4'
        component='h1' // shanging the semantic element
        gutterBottom // margin at bottom
      >h4 Heading</Typography>

      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>sub title 1</Typography>
      <Typography variant='subtitle2'>sub title 2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil excepturi blanditiis eveniet doloribus officiis sed placeat voluptate. Quaerat numquam eveniet eligendi illum qui similique excepturi, voluptas ipsam accusantium. Minus odio tempore, ad optio debitis provident eligendi delectus deleniti hic. Tempora rem officia aut nesciunt possimus.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore temporibus assumenda incidunt ipsam quidem eum magni quasi, exercitationem illum quae unde similique consequuntur numquam tempora dolore ducimus inventore enim? Quam eum neque, accusantium, harum illo dolore voluptate quae fugit sit non repellat odit totam?</Typography>
    </div>
  );
};