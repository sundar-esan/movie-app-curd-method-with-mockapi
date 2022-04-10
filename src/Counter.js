import {useState} from "react"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton onClick={() => setLike(like + 1)}
className="like-dislike" color="primary" aria-label="delete">
      <Badge badgeContent={like} color="primary">
👍
</Badge>
</IconButton>
<IconButton onClick={() => setDisLike(dislike + 1)}
className="like-dislike" color="error" aria-label="delete">
<Badge badgeContent={dislike}  color="error">
👎
</Badge>
</IconButton>


    </div>
  );
}
