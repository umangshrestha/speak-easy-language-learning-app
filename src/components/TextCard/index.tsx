import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface TextCardProps {
  word: string;
  translation: string;
  phoenetic: string;
}

export default function TextCard({
  word,
  translation,
  phoenetic,
}: TextCardProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {word}
        </Typography>
        <Typography variant="body2" component="p">
          {translation}
        </Typography>
        <Typography variant="body2" component="p">
          {phoenetic}
        </Typography>
      </CardContent>
    </Card>
  );
}
