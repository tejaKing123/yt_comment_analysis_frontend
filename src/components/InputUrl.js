import React,{useState} from 'react'
import { Form, Input, Rating, Button } from "semantic-ui-react";


export const InputUrl = ({onNewLink}) => {
    const [url, setUrl] = useState('')    
    return (
        <Form>            
            <Form.Field>
        <Input
          placeholder="movie title"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </Form.Field> 
      <Form.Field>
        <Button
          onClick={async () => {
            const movie = { url};
            const response = await fetch("http://127.0.0.1:5000/add_url", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(movie)
            });

            if (response.ok) {
              console.log("response worked!");
              onNewLink(movie);
              setUrl("");              
            }
          }}
        >
          submit
        </Button>
      </Form.Field>     
        </Form>
    )
}

export default InputUrl;
