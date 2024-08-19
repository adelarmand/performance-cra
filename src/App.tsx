import React from 'react';
import axios from 'axios';

export interface Photos {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function App() {
  const [photos, setPhotos] = React.useState<Photos[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get<Photos[]>('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10');
      setPhotos(resp.data);
    };
    fetchData();
  }, []);

  if (photos.length === 0) return null;

  return (
    <>
      <h1>Create React App</h1>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {
            photos.map(({ id, title, url }) => (
              <tr key={id}>
                <td>{title}</td>
                <td><img width={300} height={300} alt={title} src={url} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
