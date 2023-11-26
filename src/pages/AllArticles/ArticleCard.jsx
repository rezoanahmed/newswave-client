import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


const ArticleCard = ({ articles }) => {
    const { title, article, image } = articles;
    return (
        // <div className="p-4 rounded-md bg-base-200 shadow-2xl">
        //     <img src={image} alt="" className="h-64 rounded-md" />
        //     <div className="px-2 py-6 bg-base-200">
        //         <p className="text-3xl font-quatsans font-bold">{title}</p>
        //         <p className="font-quat">{post}...<Link className="font-bold text-blue">Learn More</Link></p>
        //         <div className="flex items-center gap-2 pt-4">
        //             <img src={author_img} alt="" className="h-10 w-10 rounded-full" />
        //             <p className="font-quatsans">{author_name}</p>
        //         </div>
        //     </div>

        // </div>
        <>
        <Card sx={{ }}>
      <CardMedia
        sx={{ height: 400 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article?.slice(0,40)}...
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
        </>
    );
};

export default ArticleCard;